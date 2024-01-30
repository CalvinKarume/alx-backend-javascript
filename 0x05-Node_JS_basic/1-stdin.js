function interactiveSession() {
  process.stdout.write('Welcome to Holberton School, what is your name?\n');

  process.stdin.setEncoding('utf8');

  let name = '';

  process.stdin.on('data', (data) => {
    name += data;
  });

  process.stdin.on('end', () => {
    const trimmedName = name.trim();
    if (trimmedName) {
      process.stdout.write(`Your name is: ${trimmedName}\n`);
    } else {
      process.stdout.write('Your name is: \n');
    }
    process.stdout.write('This important software is now closing\n');
  });
}

interactiveSession();

module.exports = interactiveSession;

