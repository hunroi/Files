// Read a file
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Manipulate the file content
  const modifiedData = data.toUpperCase();

  // Write the modified content to a new file
  fs.writeFile('output.txt', modifiedData, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('File manipulation successful!');
  });
});
