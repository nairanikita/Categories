/* eslint-disable max-len */
import * as React from 'react'
import { Link } from 'react-router-dom'

import {
  UikWidgetContent,
  UikWidgetDoc,
  UikNavLinkDark,
  UikLayoutMain,
} from '@components'


import ExampleTable from '../../components/ExampleTable'


const examples = [
  {
    rendered: (
      <React.Fragment>
        <UikNavLinkDark>
          Dashboard
        </UikNavLinkDark>
        <UikNavLinkDark className="active">
          Buildings
        </UikNavLinkDark>
        <UikNavLinkDark>
          Messages
        </UikNavLinkDark>
      </React.Fragment>
    ),
    code: `<React.Fragment>
  <UikNavLinkDark>
    Dashboard
  </UikNavLinkDark>
  <UikNavLinkDark className="active">
    Buildings
  </UikNavLinkDark>
  <UikNavLinkDark>
    Messages
  </UikNavLinkDark>
</React.Fragment>`,
  },
  {
    rendered: (
      <UikNavLinkDark
        rightEl="23"
      >
        Some Link
      </UikNavLinkDark>
    ),
    code: `<UikNavLinkDark
  rightEl="23"
>
  Some Link
</UikNavLinkDark>`,
  },
  {
    rendered: (
      <UikNavLinkDark
        icon="🏃🏻"
        rightEl="23"
      >
        Some Link
      </UikNavLinkDark>
    ),
    code: `<UikNavLinkDark
  icon="🏃🏻"
  rightEl="23"
>
  Some Link
</UikNavLinkDark>`,
  },
  {
    rendered: (
      <UikNavLinkDark
        className="active"
        highlighted
        rightEl="23"
      >
        Some Link
      </UikNavLinkDark>
    ),
    code: `<UikNavLinkDark
  className="active"
  highlighted
  rightEl="23"
>
  Some Link
</UikNavLinkDark>`,
  },
  {
    rendered: (
      <UikNavLinkDark>
        Some Link
      </UikNavLinkDark>
    ),
    code: `import { NavLink } from 'react-router-dom'
// renders with NavLink from react-router
<UikNavLinkDark Component={NavLink}>
  Some Link
</UikNavLinkDark>`,
  },
]

const examplesWithDarkBackground = examples.map(item => ({
  ...item,
  rendered: (
    <div style={ {
      background: '#271727',
      padding: '20px 0',
    } }
    >
      {item.rendered}
    </div>
  ),
}))


const DocsNavLinkDark = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikNavLinkDark
        </h1>
        <p>
          Same properties as
          {' '}
          <Link to="/docs/react/nav-link">
          UikNavLink
          </Link>
          {' '}
          with different styling suitable for dark backgrounds. This style is used in
          {' '}
          <Link to="/buildings">
buildings
          </Link>
          {' '}
example app.
        </p>
      </UikWidgetContent>
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikNavLink Examples
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examplesWithDarkBackground } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsNavLinkDark
