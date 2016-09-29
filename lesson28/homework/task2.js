const fs = require('fs');

const buffer = Buffer.alloc(6);

fs.open('test.txt', 'r', (err, fd) => {
    if (err) {
        console.error(err);
        return;
    }

    // read 10-15 bytes inclusively
    fs.read(fd, buffer, 0, buffer.length, 10, function (err, bytes) {

        if (err) {
            console.error(err);
            return;
        }

        console.log(buffer.slice(0, bytes).toString());

    });

    fs.close(fd, function (err) {
        if (err) {
            console.error(err);
            return;
        }
    })

});