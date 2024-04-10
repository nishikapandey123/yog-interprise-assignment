const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'task_automation');
const filePaths = [
    path.join(directoryPath, 'file1.txt'),
    path.join(directoryPath, 'file2.txt'),
    path.join(directoryPath, 'file3.txt'),
];
const concatenatedFilePath = path.join(directoryPath, 'concatenated.txt');


if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath);
}


filePaths.forEach((filePath, index) => {
    fs.writeFileSync(filePath, `Concate the file ${index + 1}`);
});


let concatenatedContent = '';
filePaths.forEach(filePath => {
    concatenatedContent += fs.readFileSync(filePath, 'utf8') + '\n';
});
fs.writeFileSync(concatenatedFilePath, concatenatedContent.trim());


console.log(fs.readFileSync(concatenatedFilePath, 'utf8'));

filePaths.forEach(filePath => {
    fs.unlinkSync(filePath);
});
