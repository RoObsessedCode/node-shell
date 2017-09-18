
//writing out to console
//outputing prompt
let cmds = require('./command.js');
process.stdout.write('prompt > ');

//The stdin 'data' event fires after user types a line
process.stdin.on('data', (data) => {
  var cmd = data.toString().trim();
  // if (cmd === 'pwd') {
  //   cmds.pwd()
  // }
  if (cmd === 'date') {
    process.stdout.write(Date());
  } else if (cmd === 'pwd') {
    cmds['pwd']();
  } else {
  process.stdout.write(`You typed: ${cmd}`);
  }
  process.stdout.write('\nprompt > ');
});

//Installing current directory command

