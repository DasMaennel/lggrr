const fs = require('fs');

exports.lggrr = function(options) {
  options = options || {};
  this.path = options.path || "./";
  this.timeStamp = options.timeStamp || true;
  this.console = options.console || true;

  this.log = function(message, context) {
    if (this.console) console.log(message);
    if (context == null) this.writeToFile("LOG", message);
    else this.writeToFile("LOG", `[${context}] ${message}`);
  };

  this.info = function(message, context) {
    if (this.console) console.info(message);
    if (context == null) this.writeToFile("INFO", message);
    else this.writeToFile("INFO", `[${context}] ${message}`);
  };

  this.warn = function(message, context) {
    if (this.console) console.warn(message);
    if (context == null) this.writeToFile("WARNING", message);
    else this.writeToFile("WARNING", `[${context}] ${message}`);
  };

  this.error = function(message, context) {
    if (this.console) console.error(message);
    if (context == null) this.writeToFile("ERROR", message);
    else this.writeToFile("ERROR", `[${context}] ${message}`);
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
