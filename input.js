/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

const handleUserInput = (key) => {
  if (key === "\u0003") {
    process.stdout.write("Thanks for playing, ciao!\n");
    process.exit();
  }
}


const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on("data", handleUserInput)
  return stdin;

}

module.exports = {
  setupInput
};