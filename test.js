const lggrr = require("./index.js").loggr;
const log = new lggrr();

log.path = "./logs";

log.log("Hello world!");
