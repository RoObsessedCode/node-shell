
//writing out to console
//outputing prompt
let cmds = require('./command.js');
process.stdout.write('prompt > ');

//The stdin 'data' event fires after user types a line
process.stdin.on('data', (data) => {
  //let commands = ['date', 'pwd', 'ls', 'echo', 'cat'];
  let userInput = data.toString().trim().split(" ");
  let cmd = userInput.shift();
  let userArgs = userInput.join(' ');

  if (Object.keys(cmds).includes(cmd)) {
    cmds[cmd](userArgs);
    process.stdout.write('\nprompt > ');
  } else {
    process.stdout.write(`You typed: ${cmd}`);
  }
  // switch (cmd) {
  //   case 'date':
  //     cmds[cmd]();
  //     break;

  //   case 'pwd':
  //     cmds[cmd]();
  //     break;

  //   case 'ls':
  //     cmds[cmd]();
  //     break;

  //   case 'echo':
  //     cmds[cmd](userArgs);
  //     break;

  //   case 'cat':
  //     cmds[cmd](userArgs);
  //     break;

  //   default:
      //process.stdout.write(`You typed: ${cmd}`);
      // process.stdout.write('\nprompt > ');


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

