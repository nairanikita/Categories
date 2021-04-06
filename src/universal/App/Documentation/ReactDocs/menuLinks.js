import componentLinks from './pages/componentLinks'

import PageStyleguide from './pages/Styleguide'
import PageBundleSize from './pages/BundleSize'
import PageComponentProperty from './pages/ComponentProperty'

const links = [
  {
    name: 'Guides',
    links: [
      {
        text: 'Elements Styleguide',
        to: '/styleguide',
        component: PageStyleguide,
      },
      {
        text: 'Importing and Bundle Size',
        to: '/bundle-size',
        component: PageBundleSize,
      },
      {
        text: '"Component" Property',
        to: '/component-property',
        component: PageComponentProperty,
      },
    ],
  },
  {
    name: 'Components',
    links: componentLinks,
  },
]

export const getFlattenLinks = () => links.reduce((nextArray, nextItem) => [
  ...nextArray,
  ...nextItem.links,
], [])

export default links
