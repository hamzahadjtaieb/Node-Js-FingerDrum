'rating strict';
var sql = require('./db.js');

//user object constructor
var rating = function(rating){
    this.rating = rating;
    
   
};

rating.getAllrates = function (result) {
    sql.query("Select * from rating", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('rating    : ', res);  

             result(null, res);
            }
        });   
};


rating.createrate = function (newrate, result) {  
    console.log("In Rating js :createrate "+JSON.stringify(newrate))
    var df = sql.query("INSERT INTO rating set ? ", newrate, function (err, res) {
        console.log("In Rating js :createrate 1 ");
            if(err) {
                console.log("In Rating js :createrate 2");
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log("In Rating js :createrate 3");
                console.log(res.insertId);
                result(null, res.insertId);
            }
        });
      
};





module.exports= rating;