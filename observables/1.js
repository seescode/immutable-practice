const EventEmitter = require('events');

const event = new EventEmitter();
event.on('event123', (data) => {
  console.log(data);
});


event.emit('event123', 1);
event.emit('event123', 2);
event.emit('event123', 3);
