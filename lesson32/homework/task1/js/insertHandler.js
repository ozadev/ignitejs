const pool = require('./connectionPool');

const queries = require('./queries');

module.exports = {
    loadAddPage: function(req, res) {
        res.render('addItem');
    },
    addItem: function(req, res) {
        pool.getConnection(function(err, connection){
            if (err) throw err;

            var query = queries.insertItem(req.body, connection);

            query.on('end', function() {

                res.status(200).send('/');

                connection.release();
            });
        });
    }
}