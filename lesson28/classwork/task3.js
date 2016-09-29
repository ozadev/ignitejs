const fs = require('fs');

var text = process.argv.slice(2).join(' ');

fs.writeFile('test.txt', text, (err) => {
    if (err) {
        console.error(err);
    }
});