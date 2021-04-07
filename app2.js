const events = require('events');

const eventEmitter = new events.EventEmitter();

const EventHandler = data => {
    console.log(`Event fired,  data = ${data}`);
}

eventEmitter.on('S.O.S', EventHandler);

eventEmitter.emit('S.O.S', 'Our ship destroyed');