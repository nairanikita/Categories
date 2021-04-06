const path = require('path')
const fs = require('fs')
const Promise = require('bluebird')

const root = path.resolve(process.cwd(), 'html')

const readdir = Promise.promisify(fs.readdir)
const writeFile = Promise.promisify(fs.writeFile)
const readFile = Promise.promisify(fs.readFile)

readdir(root)
  .then((files) => {
    files.forEach((fileName) => {
      const filePath = path.resolve(root, fileName)
      if (fs.lstatSync(filePath).isFile()) {
        readFile(filePath, 'utf8')
          .then((data) => {
            const result = data.replace(/\/static\//g, './static/')
            return result
          })
          .then((result) => {
            writeFile(path.resolve(root, fileName), result, 'utf8')
          })
      }
    })
  })
