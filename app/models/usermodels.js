'user strict';
var sql = require('./db.js');

//user object constructor
var user = function(user){
    this.user = user;
};


user.createuser = function (newuser, result) {    
    
    console.log("lol"+JSON.stringify(newuser))
        var df = sql.query("INSERT INTO user set ? ", newuser, function (err, res) {
                
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

user.login = function (userName,password, result) {
        sql.query("SELECT * FROM `user` WHERE userName = ? AND password = ? ", [userName,password], function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
user.getAlluser = function (result) {
        sql.query("Select * from user", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('user : ', res);  

                 result(null, res);
                }
            });   
};

user.updateById = function(user, result){
  sql.query("UPDATE user SET userName  WHERE id = ?", [user.id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};

user.remove = function(id, result){
     sql.query("DELETE FROM user WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};


user.getuserR = function (id, result) {
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

user.getCompositeur = function (result) {
        sql.query("Select * from user WHERE role = 1", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('user : ', res);  

                 result(null, res);
                }
            });   
};

user.getAmateur= function (result) {
    sql.query("Select * from user WHERE role = 0", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('user : ', res);  

             result(null, res);
            }
        });   
};


//getartist
//getCompositeur

module.exports= user;
