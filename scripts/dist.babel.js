

import entryBundle from './entry.bundle'
import entryComponents from './entry.components'
import createWebpackConfig from './createWebpackConfig'

process.env.BABEL_ENV = 'production'
process.env.NODE_ENV = 'production'

export default createWebpackConfig({
  entry: {
    ...entryBundle,
    ...entryComponents,
  },
})
