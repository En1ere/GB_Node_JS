#!C:\Users\Eniere\Documents\Node\node

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const executorDir = process.cwd();
const isFile = (fileName) => fs.lstatSync(fileName).isFile();
let dirPath = '';

inquirer.prompt([{
    name: 'dir',
    type: 'input',
    message: 'Choose the directory'
  }])
  .then(answer => {

    if (!answer.dir) {
      dirPath = executorDir
    } else {
      dirPath = answer.dir
    }
    return dirPath
  })
  .then(answer => {
    console.log('answer dir', answer)
    const list = fs.readdirSync(answer).filter(isFile);
    inquirer.prompt([{
        name: 'fileName',
        type: 'list',
        message: 'Choose a file to read',
        choices: list,
      }])
      .then(answer => {
        const fullPath = path.join(dirPath, answer.fileName);
        const data = fs.readFileSync(fullPath, 'utf-8');

        console.log(data);
        return data
      })
  })
  .then()
  .catch(e => console.log(e))