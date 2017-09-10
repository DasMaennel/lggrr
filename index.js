const fs = require('fs');

exports.lggrr = function(options) {
  this.path = options.path || "./";
  this.timeStamp = options.timeStamp || true;
  this.console = options.console || true;

  this.log = function(message) {
    if (this.console) console.log(message);
    this.writeToFile("LOG", message);
  };

  this.info = function(message) {
    if (this.console) console.info(message);
    this.writeToFile("INFO", message);
  };

  this.warn = function(message) {
    if (this.console) console.warn(message);
    this.writeToFile("WARNING", message);
  };

  this.error = function(message) {
    if (this.console) console.error(message);
    this.writeToFile("ERROR", message);
  };

  this.writeToFile = function(prefix, message) {
    var date = new Date();
    var fileName = date.getFullYear() + "-" +
                   date.getMonth() + "-" +
                   date.getDate() + ".log";

    var text;
    if (this.timeStamp) {
      text = date.getHours() + ":" +
             date.getMinutes() + ":" +
             date.getSeconds() + "." +
             date.getMilliseconds() + " " + prefix + " >> " + message;
    }
    else {
      text = prefix + message;
    }

    fs.appendFile(this.path + "/" + fileName, text + "\n");
  };
}
