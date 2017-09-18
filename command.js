let fs = require('fs');

module.exports = {

  pwd: () => {
    process.stdout.write(`${process.cwd()}`);
    process.stdout.write('\nprompt > ');
  },

  ls: () => {
    fs.readdir('.', (err, files) => {
      if (err) throw err;
      files.forEach((file) => {
        process.stdout.write(file.toString() + '\n');
      })
      process.stdout.write('\nprompt > ');
    })
  },

  date: () => {
    process.stdout.write(Date());
    process.stdout.write('\nprompt > ');
  }

};
