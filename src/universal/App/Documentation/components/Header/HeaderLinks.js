import * as React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import {
  UikTopBarLink,
  UikTopBarLinkContainer,
} from '@components'

import cls from './docs-headerLinks.scss'


const headerLinks = [
  {
    text: 'Getting Started',
    to: '/docs/start',
  },
  {
    text: (
      <strong>
        React Documentation
      </strong>
    ),
    to: '/docs/react',
  },
  {
    text: 'Changelog',
    to: '/docs/changelog',
    exact: true,
  },
]

// @flow
const HeaderLinks = () => (
  <React.Fragment>
    <UikTopBarLinkContainer className={ cls.links }>
      {
        headerLinks.map(({ to, text, ...rest }) => (
          <UikTopBarLink
            key={ to }
            activeClassName="active"
            Component={ NavLink }
            to={ `${to}` }
            { ...rest }
          >
            {text}
          </UikTopBarLink>
        ))
      }
    </UikTopBarLinkContainer>
  </React.Fragment>
)


export default withRouter(HeaderLinks)
