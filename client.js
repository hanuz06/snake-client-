const net = require('net');
const { IP, PORT } = require('./constants');


/**
 * Establishes connection with the game server
 */

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    // conn.write('Successfully connected to game server');
    conn.write('Name: LEE');
    // setTimeout(()=>{
    //   conn.write('Move: up');      
    // },500)
    
  });

  // client.js
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  return conn;
}

module.exports = {
  connect
};