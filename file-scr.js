// Read a file
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Manipulate the file content, convert to uppercase letters
  const modifiedData = data.toUpperCase();
  // const modifiedData = data.LowerCase();
  
  // Write the modified content to the new file
  fs.writeFile('output.txt', modifiedData, (err) => {
    if (err) {
      console.error('Error writing into file:', err);
      return;
    }
    console.log('File manipulation successful');
    // console.log(modifiedData); //
  });
});
