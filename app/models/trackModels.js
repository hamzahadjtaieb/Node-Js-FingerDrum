'track strict';
var sql = require('./db.js');

//user object constructor
var track = function(track){
    this.track = track;
    
   
  

};

track.createtrack= function (newtrack, result) {  

    console.log(" *** CREATE TRACK HERE :) *** ");
    
    
        var base64Data = newtrack.image.replace(/^data:image\/jpeg;base64,/, "");

        require("fs").writeFile("./app/router/uploads/img_"+newtrack.date+".jpg", base64Data, 'base64', function(err) {
        console.log(err);
        });

        newtrack.image = "img_"+newtrack.date+".jpg";

    
        var df = sql.query("INSERT INTO track set ? ", newtrack, function (err, res) {
                
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

//getevent
// getreadlike
track.gettrack = function (id, result) {
    sql.query("SELECT * FROM `track` WHERE id = ? ", [id], function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });   
};

//geteventLocation
track.gettrackGenre= function (genre, result) {
    sql.query("SELECT * FROM `track` WHERE genre = ? ", [genre], function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });   
};


// event.geteventC = function (categorie, result) {
//     sql.query("SELECT * FROM `event` WHERE categorie = ? ", [categorie], function (err, res) {             
//             if(err) {
//                 console.log("error: ", err);
//                 result(err, null);
//             }
//             else{
//                 result(null, res);
          
//             }
//         });   
// };


track.getAlltrack = function (result) {
    sql.query("Select * from track", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('track : ', res);  

             result(null, res);
            }
        });   
};



//searchAllevent RECHERCHE TEFJA3 
track.searchAlltrack = function (search, result) {
    sql.query("Select * from track WHERE auteur like '%"+search+"%' or title like '%"+search+"%' or genre like '%"+search+"%' ", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('track : ', res);  

             result(null, res);
            }
        });   
};





track.updateById = function(track, result){
    sql.query("UPDATE track SET genre  WHERE id = ?", [track.genre, track.id], function (err, res) {
            if(err) {
                console.log("error: ", err);
                  result(null, err);
               }
             else{   
               result(null, res);
                  }
              }); 
  };


track.remove = function(id, result){
    sql.query("DELETE FROM track WHERE id = ?", [id], function (err, res) {

               if(err) {
                   console.log("error: ", err);
                   result(null, err);
               }
               else{
              
                result(null, res);
               }
           }); 
};




module.exports= track;