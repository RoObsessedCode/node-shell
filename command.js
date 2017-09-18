

module.exports = {

  pwd: () => {
    process.stdout.write(`${process.cwd()}`);
    //process.stdout.write('\nprompt > ');
  }
};
