const SerialPort = require('serialport');
const port = new SerialPort('/dev/ttyUSB0');
 
let code = '';
let timeout = null;
 
port.on('data', data=> {
  clearTimeout(timeout);
  code+=data.toString('utf8');
  timeout=setTimeout(() => {
  console.log(code);
  code = '';
  }, 200);
});

