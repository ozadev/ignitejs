const pool = require('./connectionPool');

var queries = require('./queries'); 

module.exports = {
    displayAllItems: function(req, res) {
        pool.getConnection(function (err, connection) {
            if (err) throw err;

            var query = queries.getAllItems(connection);

            query.on('end', function() {
                res.render('index', { data:  queries.dataAll });

                connection.release(); 
            })

        })
    }
}