
const fs = require('fs')
const path = require('path')
const Bluebird = require('bluebird')

const root = __dirname
const distPath = path.resolve(root, '../dist')

const readDir = Bluebird.promisify(fs.readdir)


readDir(distPath).then((files) => {
  files.forEach((file) => {
    const compiledFilePath = path.resolve(distPath, file, 'index.js')
    const isIndexFile = fs.lstatSync(compiledFilePath).isFile()

    if (isIndexFile) {
      const data = fs.readFileSync(compiledFilePath)
      const fd = fs.openSync(compiledFilePath, 'w+')
      const insert = Buffer.from('/* eslint-disable */\n')
      fs.writeSync(fd, insert, 0, insert.length, 0)
      fs.writeSync(fd, data, 0, data.length, insert.length)
      fs.close(fd, (err) => {
        if (err) throw err
      })
    }
  })
})
