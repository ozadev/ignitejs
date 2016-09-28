const events = require('events');

const emitter = new events.EventEmitter;

emitter.on('test', () => {
    console.log('It\'s alive');
});

emitter.emit('test');

console.log(events);
