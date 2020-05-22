'user strict';
var sql = require('./db.js');
var book = function (book) {
    this.book = book;




};
book.bookevent = function (newBook, result) {
    // book = {
    //     id_user: 37,
    //     id_event: 11
    // }


    console.log(newBook);

    var df = sql.query("INSERT INTO `book`(`id_user`, `id_event`) VALUES (" + newBook.book.id_user + "," + newBook.book.id_event + ") ", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });

};
book.getBooking = function (idUser, result) {
    sql.query("Select * from book where id_user = " + idUser, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('book : ', res);

            result(null, res);
        }
    });
};
module.exports = book;