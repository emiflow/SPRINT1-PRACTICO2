import path from 'path';
const filePath = './data/example.txt';

const dirName = path.dirname(filePath);
console.log('Directorio base: ',dirName);

const baseName = path.basename(filePath,'.txt');
console.log('Nombre archivo:',baseName);

const extName = path.extname(filePath);
console.log('Extension archivo:',extName);

const newPath = path.join('/user','docs','newfile.txt');
console.log('Nueva Ruta:',newPath);