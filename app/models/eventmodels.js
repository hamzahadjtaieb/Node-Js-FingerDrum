'event strict';
var sql = require('./db.js');

//user object constructor
var event = function(event){
    this.event = event;
    
   
  

};

event.createevent= function (newevent, result) {  

    console.log("Hello create event ");
    
    
        var base64Data = newevent.image.replace(/^data:image\/jpeg;base64,/, "");

        require("fs").writeFile("./app/router/uploads/img_"+newevent.date+".jpg", base64Data, 'base64', function(err) {
        console.log(err);
        });

        newevent.image = "img_"+newevent.date+".jpg";

    
        var df = sql.query("INSERT INTO event set ? ", newevent, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });
          
};

event.getevent = function (id, result) {
        sql.query("SELECT * FROM `event` WHERE id = ? ", [id], function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};




event.geteventLocation = function (location, result) {
    sql.query("SELECT * FROM `event` WHERE location = ? ", [location], function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });   
};

event.geteventC = function (categorie, result) {
    sql.query("SELECT * FROM `event` WHERE categorie = ? ", [categorie], function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });   
};

event.getAllevent = function (result) {
        sql.query("Select * from event", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('event : ', res);  

                 result(null, res);
                }
            });   
};


event.searchAllevent = function (search, result) {
    sql.query("Select * from event WHERE location like '%"+search+"%' or title like '%"+search+"%' or prix like '%"+search+"%' ", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('event : ', res);  

             result(null, res);
            }
        });   
};


event.updateById = function(event, result){
  sql.query("UPDATE event SET categorie  WHERE id = ?", [event.categorie, event.id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};


event.remove = function(id, result){
     sql.query("DELETE FROM event WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= event;
