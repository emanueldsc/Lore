const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src/assets');
const outputFile = path.join(__dirname, 'src/assets/markdownLinks.json');

function getMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Recursivamente buscar em subpastas
      getMarkdownFiles(filePath, fileList);
    } else if (path.extname(file) === '.md') {
      // Adiciona o caminho relativo para o arquivo .md
      const relativePath = 'assets/' + path.relative(path.join(__dirname, 'src/assets'), filePath);
      fileList.push(relativePath.replace(/\\/g, '/'));
    }
  });

  return fileList;
}

function generateJsonFile() {
  const markdownFiles = getMarkdownFiles(baseDir);
  const jsonContent = JSON.stringify(markdownFiles, null, 2);

  fs.writeFileSync(outputFile, jsonContent, 'utf8');
  console.log('Arquivo JSON gerado com sucesso:', outputFile);
}

generateJsonFile();
