const EventEmitter = require("events"); // EventEmitter is class, not function

// We must inherit EventEmitter class
class Person extends EventEmitter {
  constructor(name, position) {
    super(); // Without this string exception will be generated
    this.name = name;
    this.position = position;
  }
  AddHandler(event) {
    this.on(event, (text) => {
      console.log(this.name + " said : " + text);
    });
  }
}

const Suhov = new Person("Suhov", "Red Commissar");
const Abdulla = new Person("Abdulla", "Basmachi Commander");
const Mahmud = new Person("Mahmud", "Basmachi Combatant");

Suhov.AddHandler("speak");
Abdulla.AddHandler("speak");
Mahmud.AddHandler("speak");

Abdulla.emit("speak", "Mahmud, podzjigay !");
Suhov.emit("speak", "Abdulla, u tebya laskovie zjoni, mne s nimi horosho");
Abdulla.emit("speak", "Kogda ya podozgu benzin i tebe budet sovsem horosho.");
Suhov.emit("speak", "Abdulla, ya zdes");
