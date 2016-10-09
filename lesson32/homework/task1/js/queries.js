var mysql = require('mysql');

module.exports = {
    dataAll: [],
    selectedItem: {},
    itemExist: false,

    getAllItems: function (connection) {
        var self = this;
        var query = connection.query('SELECT * FROM `test_table`', function (err, rows) {
            if (err) throw err;

            self.dataAll = rows;
        });
        return query;
    },

    insertItem: function (data, connection) {
        var sqlTemplate = 'INSERT INTO `test_table` (NAME, INFO) VALUES (?, ?)';
        var inserts = [data.name, data.info];
        var sql = mysql.format(sqlTemplate, inserts);

        return query = connection.query(sql, function (err) {
            if (err) throw err;

            console.log('item inserted into database!');
        })
    },

    removeItem: function (id, connection) {
        return connection.query('DELETE FROM `test_table` WHERE id=?', [id], function (err) {
            if (err) throw err;

            console.log(`Item (id = ${id}) removed from database!`);
        })
    },

    findItemById: function (id, connection) {
        var self = this;
        var query = connection.query('SELECT * FROM `test_table` WHERE id=?', [id], function (err, rows) {
            if (err) throw err;

            self.itemExist = rows.length != 0;
            self.selectedItem = rows[0];
        });
        return query;
    },

    updateItem: function (data, connection) {
        var self = this;

        var sqlTemplate = 'UPDATE `test_table` SET name=?, info=? WHERE id=?';
        var inserts = [data.name, data.info, self.selectedItem.id];
        var sql = mysql.format(sqlTemplate, inserts);

        var query = connection.query(sql, function (err) {
            if (err) throw err;

            console.log(`Item (id = ${self.selectedItem.id}) updated!`);
        });
        return query;
    }
}