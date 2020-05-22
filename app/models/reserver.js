'user strict';
var sql = require('./db.js');

//user object constructor
var reserver = function(reserver){
    this.reserver = reserver;
    
   
  

};
reserver.addreserver = function (newreserver, result) {    
    
    console.log("reserver"+JSON.stringify(newreserver))
        var df = sql.query("INSERT INTO reserver set ? ", newreserver, function (err, res) {
                
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
reserver.removereserver = function(id, result){
     sql.query("DELETE FROM reserver WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= reserver;
