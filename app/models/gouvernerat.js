'gouvernerat strict';
var sql = require('./db.js');

//user object constructor
var gouvernerat = function(event){
    this.gouvernerat = gouvernerat;
    
   
  

};


gouvernerat.getAllgouvernerat = function (result) {
        sql.query("Select * from gouvernerat", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('gouvernerat : ', res);  

                 result(null, res);
                }
            });   
};
;

module.exports= gouvernerat;
