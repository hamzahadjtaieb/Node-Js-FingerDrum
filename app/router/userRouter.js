'use strict';

const mysql = require('mysql');
const connection = mysql.createConnection({

  host     : 'localhost',
    user     : 'root',
    password : 'root',
    port    :'3306',
    database : 'abcdrum'

})

module.exports = function(app) {

  var db = require('../models/db');

  var todoList = require('../controller/userController');
  var todoList_track = require('../controller/trackController');
  
  var todoList_event = require('../controller/eventController');
  var todoListgov = require('../controller/gouverneratController');
  var todoListrat = require('../controller/ratingController');
  var todoList_book = require('../controller/bookController');
  var todoList_comment = require('../controller/commentController');
  var todoList_likes= require('../controller/likesController');
  var todoList_reserver= require('../controller/reserverController');




  //ANDROID
  app.get("/users1/getAll", (req, res) => {

    connection.query("select * from user", (err, rows, fields) => {
  
      if (err) {
        return res.json(err)
  
      } else {
  
        return res.json(rows)
      }
    })
  
  })

  





  //END //ANDROID


























  app.get("/likesss/:id/:id_track",(req,res)=>{
    
    const queryString="SELECT * FROM `likes` WHERE id = ? and id_track = ?"
    connection.query(queryString,[req.params.id,req.params.id_track],(err,rows,fields)=>{
    
            if(err)
            {

               return res.json(err)
               

            }else{

            return res.json(rows)

            }

        })

  })

  app.post("/commentaire/add",(req,res)=>{
        
    const queryString="insert into commentaire(id_user,id_track,content) values(?,?,?)"
    
    connection.query(queryString,[req.body.id_user,req.body.id_track,req.body.content],(err,rows,fields)=>{
        
        if(err)
            {
                
               return res.json(err)
                    
            }else{
            
                return res.json("Creation successful")
            
            }
        
    })
    
})




  // todoList Routes
  app.route('/users')
    .get(todoList.list_all_users)
    .post(todoList.create_a_user);

    app.route('/userss/:userId')
    .get(todoList.read_a_userR);
   
   app.route('/users/:userId')
    .get(todoList.read_a_user)
    .put(todoList.update_a_user)
    .delete(todoList.delete_a_user);

    app.route('/users/:userName/:password')
    .get(todoList.read_a_user)

    app.route('/usersCompositeur')
    .get(todoList.get_LesCompositeurs);

    app.route('/usersAmateur')
    .get(todoList.get_LesAmateurs);



    //*** EVENT ****
    app.route('/event')
    .get(todoList_event.list_all_events)
    .post(todoList_event.create_event)

    app.route('/searchevent/:search')
    .get(todoList_event.search_all_events)






    //**** TRACK ****
    app.route('/track')
    .get(todoList_track.list_all_track)
    .post(todoList_track.create_track)


    //RECHERCHE TEKHDEM :))
    app.route('/searchtrack/:search')
    .get(todoList_track.search_all_tracks)

   
    app.route('/track/:id')
    .get(todoList_track.read_track)
    .put(todoList_track.update_track)
    .delete(todoList_track.delete_track);


  
    //eventc
    // app.route('/eventc/:categorie')
    // .get(todoList_track.read_eventc)

    app.route('/track/:id/:genre')
    .get(todoList_track.read_track)

    //TEKHDEMCH
    app.route('/track/:genre')
    .get(todoList_track.read_genre)

    //// *****


    

   //************COMMENTAIRE
    app.route('/commentaire')
    .post(todoList_comment.create_commentaire)
    .get(todoList_comment.getallcomment)

    app.route('/commentaire/:id')
    .get(todoList_comment.read_commentaire)



   //************COMMENTAIRE



    //******************LIKES
    app.route('/likes')
    .post(todoList_likes.create_likes)
    .get(todoList_likes.getalllikes)

    app.route('/likes/:id')
    .get(todoList_likes.read_Like)













    app.route('/likess/:id/:id_track')
    .get(todoList_likes.read_Like_idTrack)
    //******************LIKES


    












    app.route('/reserver')
    .post(todoList_reserver.create_reserver)
    
    

    
    app.route('/book')
    .post(todoList_book.book_event);

    //tekhdemch
    app.route('/book/:idUser')
    .get(todoList_book.get_book);


    //************************RATING
    app.route('/rating')
    .get(todoListrat.list_all_rates);

    app.route('/addrating')
    .post(todoListrat.create_rate);
    //************************RATING
    
    app.route('/eventc/:categorie')
    .get(todoList_event.read_eventc)
   
   app.route('/event/:id')
    .get(todoList_event.read_event)
    .put(todoList_event.update_event)
    .delete(todoList_event.delete_event);

    app.route('/event/:id/:categorie')
    .get(todoList_event.read_event)

    app.route('/img/:name')
    .get( function(req , res){
        res.sendFile(__dirname+'/uploads/'+req.params.name);
    });

    app.route('/govs')
    .get(todoListgov.list_all_gouvernerats)


    app.route('eventc/:location')
    .get(todoList_event.read_location)
 
    };