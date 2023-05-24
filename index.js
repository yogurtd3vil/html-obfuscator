const fs = require('fs');
const obfuscator = require('./obfuscate/obfuscate');

fs.readFile('index.html', 'utf-8', (err, data) => {
  if (err) {
    console.error('erro ao ler o arquivo index.html:', err);
    return;
  }

  const obfuscatedHtml = obfuscator(data);

  fs.writeFile('output.html', obfuscatedHtml, 'utf-8', (err) => {
    if (err) {
      console.error('erro ao criar ou reescrever o arquivo output.html:', err);
      return;
    }

    console.log('arquivo output.html foi criado ou reescrito com sucesso!');
  });
});
