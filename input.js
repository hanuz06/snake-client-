// Stores the active TCP connection object.
let connection;


/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */


const handleUserInput = key => {
  if (key === "w") {
    connection.write('Move: up');    
  }

  if (key === "a") {
    connection.write('Move: left');;    
  }

  if (key === "s") {
    connection.write('Move: down');    
  }

  if (key === "d") {
    connection.write('Move: right');    
  }

  if (key === "q") {
    connection.write('Say: MMM');
    console.log('Write: Hello Andrey')    
  }

  if (key === "\u0003") {
    process.stdout.write("Thanks for playing, ciao!\n");
    process.exit();
  }
}


const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput)

  return stdin;

}

setupInput()

module.exports = {
  setupInput
};