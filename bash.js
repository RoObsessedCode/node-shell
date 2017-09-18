
//writing out to console
//outputing prompt

process.stdout.write('prompt > ');

//The stdin 'data' event fires after user types a line
process.stdin.on('data', (data) => {
  var cmd = data.toString().trim();

  process.stdout.write(`You typed: ${cmd}`);
  process.stdout.write('\nprompt > ');

});