
//writing out to console
//outputing prompt
let cmds = require('./command.js');
process.stdout.write('prompt > ');

//The stdin 'data' event fires after user types a line
process.stdin.on('data', (data) => {
  var cmd = data.toString().trim();
  switch (cmd) {
    case 'date':
      cmds[cmd]();
      break;

    case 'pwd':
      cmds[cmd]();
      break;

    case 'ls':
      cmds[cmd]();
      break;

    default:
      process.stdout.write(`You typed: ${cmd}`);
  };
  // if (cmd === 'date') {
  //   process.stdout.write(Date());
  // } else if (cmd === 'pwd') {
  //   cmds[cmd]();
  // } else if (cmd === 'ls') {
  //   cmds[cmd]();
  // } else {
  // process.stdout.write(`You typed: ${cmd}`);
  // }
  // //process.stdout.write('\nprompt > ');
});

//Installing current directory command

