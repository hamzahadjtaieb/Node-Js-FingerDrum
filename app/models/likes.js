'user strict';
var sql = require('./db.js');

//user object constructor
var likes = function(likes){
    this.likes = likes;
    
   
  

};

// getreadcommentaire
likes.getreadlike = function (id, result) {
    sql.query("SELECT * FROM `likes` WHERE id = ? ", [id], function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });   
};

















likes.getreadlike_idTrack = function (id,id_track ,result) {
    sql.query("SELECT * FROM `likes` WHERE id = ? and id_track = ? ", [id,id_track], function (err, res) {             
            if(err) {
                console.log("error on id,id_track : ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });   
};






















likes.addlikes = function (newlikes, result) {    
    
    console.log("Add Likes"+JSON.stringify(newlikes))
        var df = sql.query("INSERT INTO likes set ? ", newlikes, function (err, res) {
                
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

likes.getall_likes = function (result) {

    console.log("GET ALL LIKES : "+JSON.stringify(result))
    sql.query("Select * from likes", function (err, res) {

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




likes.removelikes = function(id_event,id_user, result){
     sql.query("DELETE FROM likes WHERE id_event = ? and id_user = ?", [id_event,id_user], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= likes;
