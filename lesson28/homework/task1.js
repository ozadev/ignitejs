var events = require('events');
var emitter = new events.EventEmitter

var time = 0;

emitter.on('tick', (err) => {
    if (err) {
        console.error(err);
        return;
    }

    if (time !== undefined) {
        console.log('tick: ' + time++ + 's');
    }
});

setInterval(() => {
    emitter.emit('tick');
}, 1000);