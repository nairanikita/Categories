const fetch = require('isomorphic-fetch')
const fs = require('fs')
const path = require('path')
const Promise = require('bluebird')
const cleaner = require('clean-html') // eslint-disable-line
const ncp = require('ncp').ncp // eslint-disable-line

ncp.limit = 1000

const dir = path.resolve(process.cwd(), './html')

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir)
}


ncp(path.resolve(process.cwd(), 'build', 'public'), dir, (err) => {
  if (err) {
    return console.error(err)
  }
  console.log('Copying static - OK.')
})


const pages = [
  {
    url: '/buildings',
    outputName: 'buildings-dashboard',
  },
  {
    url: '/buildings/sign-up',
    outputName: 'buildings-sign-up',
  },
  {
    url: '/buildings/listing',
    outputName: 'buildings-listing',
  },
  {
    url: '/buildings/listing/1',
    outputName: 'buildings-listing-detail',
  },
  {
    url: '/buildings/performance',
    outputName: 'buildings-performance',
  },
  {
    url: '/buildings/user/settings',
    outputName: 'buildings-user-settings',
  },
  {
    url: '/buildings/conversations/1',
    outputName: 'buildings-conversations',
  },
  {
    url: '/buildings/users/1',
    outputName: 'buildings-users',
  },
  {
    url: '/social',
    outputName: 'social-homefeed',
  },
  {
    url: '/social/profile',
    outputName: 'social-profile',
  },
  {
    url: '/social/events',
    outputName: 'social-events',
  },
  {
    url: '/knowledge/doc',
    outputName: 'knowledge-doc',
  },
  {
    url: '/knowledge',
    outputName: 'knowledge-helpdesk',
  },
  {
    url: '/tutorials',
    outputName: 'tutorials',
  },
  {
    url: '/analytics',
    outputName: 'analytics',
  },
]


Promise.all(
  pages.map(page => (
    fetch(`http://localhost:3000${page.url}`)
      .then(res => res.text())
      .then(res => fs.writeFile(path.resolve(dir, `${page.outputName}.html`), res, (err) => {
        if (err) {
          console.log('Scraping - Error: ', page.outputName)
        } else {
          console.log('Scraping - OK: ', page.outputName)
        }
      }))
  )),
).then(() => {
  pages.forEach((page) => {
    fs.readFile(path.resolve(dir, `${page.outputName}.html`), 'utf8', (err, data) => {
      if (err) throw err
      // Do your processing, MD5, send a satellite to the moon, etc.


      cleaner.clean(data, (html) => {
        // console.log(html)
        fs.writeFile(path.resolve(dir, `${page.outputName}.html`), html, (err) => {
          if (err) throw err
        })
      })
    })
  })
})
