var pool = require('./connectionPool');
var mysql = require('mysql');
var path = require('path'); 

module.exports = {
    // згрузка всех элементов
    loadItems: function (req, res) {

        // подключение к бд 
        pool.getConnection(function (err, connection) {

            if (err) console.log(err)

            connection.query('SELECT * FROM `items`', function (err, rows) {
                res.json(rows);
                connection.release();
            });
        });

    },
    // создание элемента 
    createItem: function (req, res) {

        // подключение к бд 
        pool.getConnection(function (err, connection) {
            if (err) console.log(err)
            var data = req.body;

            var sql = 'INSERT INTO `items`(name, description, completed) VALUES (?, ?, ?)';
            var inserts = [data.name, data.description, data.completed];
            sql = mysql.format(sql, inserts);

            connection.query(sql, function (err, rows) {

                res.send('Item created');
                connection.release();
            });
        })
    },
    // обновление элемента (редактирование) 
    updateItem: function (req, res) {
        pool.getConnection(function (err, connection) {
            if (err) console.log(err)
            var data = req.body;

            var sql = 'UPDATE `items` SET name=?, description=?, completed=? WHERE id=?';
            var inserts = [data.name, data.description, data.completed, data.id];
            sql = mysql.format(sql, inserts);

            connection.query(sql, function (err, rows) {

                console.log('item updated');
                res.send('item updated');
                connection.release();
            })
        })
    },
    // удаление элемента 
    removeItem: function (req, res) {

        pool.getConnection(function (err, connection) {
            if (err) console.log(err)

            var sql = 'DELETE FROM `items` WHERE id=?';
            var inserts = req.params.itemID;
            sql = mysql.format(sql, inserts);

            connection.query(sql, function (err, rows) {

                console.log('item deleted');
                res.send('item deleted');
                connection.release();
            })
        })
    }
}