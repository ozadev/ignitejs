const mysql = require('mysql');
const pool = require('./connectionPool');

const queries = require('./queries');

module.exports = {

    removeItem: function (req, res) {

        pool.getConnection(function (err, connection) {
            if (err) throw err;

            var queryCheck = queries.findItemById(req.params.id, connection);

            queryCheck.on('end', function () {
                if (queries.itemExist) {
                    var query = queries.removeItem(req.params.id, connection);

                    query.on('end', function () {
                        res.end('/');

                        connection.release();
                    });
                }
                else {
                    console.log('No item with such id');
                    res.end('/');
                }
            });
        })
    },

    itemEditCheck: function (req, res) {

        pool.getConnection(function (err, connection) {
            if (err) throw err;

            var query = queries.findItemById(req.params.id, connection);

            query.on('end', function () {

                if (queries.itemExist) {
                    res.end(`editItem/${req.params.id}`);
                }
                else {
                    res.end('/');
                }

                connection.release();
            });
        })
    },

    loadEditPage: function(req, res) {
        pool.getConnection(function (err, connection) {
            if (err) throw err;

            var query = queries.findItemById(req.params.id, connection);

            query.on('end', function () {

                res.render('editItem', {item: queries.selectedItem});

                connection.release();
            });
        })

    },

    changeItem: function (req, res) {

        pool.getConnection(function (err, connection) {

            var query = queries.updateItem(req.body, connection);

            query.on('end', function () {
                // URL for redirect
                res.end('/');

                connection.release();
            });
        });
    }

}
