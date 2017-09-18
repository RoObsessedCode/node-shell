let fs = require('fs');

module.exports = {

  pwd: (_) => {
    process.stdout.write(`${process.cwd()}`);
    process.stdout.write('\nprompt > ');
  },

  ls: (_) => {
    fs.readdir('.', (err, files) => {
      if (err) throw err;
      files.forEach((file) => {
        process.stdout.write(file.toString() + '\n');
      })
      process.stdout.write('\nprompt > ');
    })
  },

  date: (_) => {
    process.stdout.write(Date());
    process.stdout.write('\nprompt > ');
  },

  echo: (args) => {
    if (process.env[args.slice(1)]) {
      process.stdout.write(process.env[args.slice(1)]);
    } else {
      process.stdout.write(args);
    }
    process.stdout.write('\nprompt > ');
  },

  cat: (file) => {
    fs.readFile(file, (err, data) => {
      if (err) throw err;
      process.stdout.write(data);
      process.stdout.write('\nprompt > ');
    })
  }
};
