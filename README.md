# lggrr
lggrr is a really lightweight, customizable logger for node.js servers.

## Usage
```javascript
const lggrr = require('lggrr').lggrr;
const log = new lggrr();

log.log("Hello log.");
```

### Specifying options
You can specify the options for the logger by giving the constructor an options object.
```javascript
const lggrr = require('lggrr').lggrr;
const log = new lggrr({
  path: "./logs",
  timeStamp: true,
  console: true
});

log.log("Hello log.");
```

You can also set the different option flags after using the constructor.
```javascript
const lggrr = require('lggrr').lggrr;
const log = new lggrr();

log.path = "./log";
log.timeStamp = true;
log.console = true;

log.log("Hello log.");
```

### Logging
The logged text gets saved at the specified path with a filename of the date.

You can use all the normal functions you would use from the console object:
* log
* info
* warn
* error

### Options
Option | Effect | Default
-------|--------|--------
path | Specifies the path that the log files will be saved in | ./
timeStamp | Enables and disables timeStamp in log file on and off | true
console | Enables and disables if logging should also show up on the console | true
