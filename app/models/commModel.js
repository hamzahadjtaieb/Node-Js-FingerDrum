'user strict';
var sql = require('./db.js');

// user object constructor
var commentaire = function(commentaire){
    this.commentaire = commentaire;
    
   
  

};




// getreadcommentaire
commentaire.getreadcommentaire = function (id, result) {
    sql.query("SELECT * FROM `commentaire` WHERE id = ? ", [id], function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });   
};



commentaire.addcommentaire = function (newcommentaire, result) {    
    
    console.log("LIKESSSSSSSSSSSSSS"+JSON.stringify(newcommentaire))
        var df = sql.query("INSERT INTO commentaire set ? ", newcommentaire, function (err, res) {
                
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
commentaire.removelikes = function(id_event,id_user, result){
     sql.query("DELETE FROM commentaire WHERE id_event = ? and id_user = ?", [id_event,id_user], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};


// getall_comment

commentaire.getall_comment = function (result) {
    sql.query("Select * from commentaire", function (err, res) {

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


module.exports= commentaire;
