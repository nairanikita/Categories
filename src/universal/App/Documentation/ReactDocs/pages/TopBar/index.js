/* eslint-disable max-len */
import * as React from 'react'
import { Link } from 'react-router-dom'


import {
  UikWidgetContent,
  UikWidgetDoc,
  UikLayoutMain,
  UikTopBar,
  UikTopBarSection,
  UikTopBarTitle,
  UikTopBarLink,
  UikTopBarLinkContainer,
  UikButton,
  UikInput,
  UikDivider,
  Uikon,
} from '@components'

import {
  UikCodeHighlight,
} from '@componentWrappers'

import cls from './docs-top-bar.scss'

import PropertyTable from '../../components/PropertyTable'
import properties from '../../shared/properties'

const itemProps = [
  properties.children(),
  properties.className(),
  {
    prop: 'center',
    propType: 'Boolean',
    defaultValue: 'false',
    desc: 'Centers the content inside with justify-content: center',
  },
  properties.rest(),
]

const UikTopBarDocs = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikTopBar
        </h1>
        <p>
          A container component that maintains just simply maintains a height. A set of components is coded to use within the UikTopBar for faster developing. By default, the display is set to
          {' '}
          <code>display: flex; justify-content: space-between;</code>
        </p>
        <h2>List of related components</h2>
        <ul>
          <li><Link to="/docs/react/top-bar-link">UikTopBarLink</Link></li>
          <li><Link to="/docs/react/top-bar-link-container">UikTopBarLinkContainer</Link></li>
          <li><Link to="/docs/react/top-bar-section">UikTopBarSection</Link></li>
          <li><Link to="/docs/react/top-bar-title">UikTopBarTitle</Link></li>
        </ul>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <h3 className={ cls.outerTitle }>Simple Example</h3>
    <div className={ cls.asPage }>
      <UikTopBar>
        <UikTopBarSection>
          <UikTopBarTitle>Dashboard</UikTopBarTitle>
        </UikTopBarSection>
        <UikTopBarSection>
          <UikButton primary>Login</UikButton>
        </UikTopBarSection>
      </UikTopBar>
      <div className={ cls.content }>
        Some content
      </div>
    </div>
    <UikCodeHighlight
      className={ cls.codeHighlight }
      code={ `<div className={ cls.asPage }> // pretend this is body

  <UikTopBar>

    <UikTopBarSection>
      <UikTopBarTitle>Dashboard</UikTopBarTitle>
    </UikTopBarSection>

    <UikTopBarSection>
      <UikButton primary>Login</UikButton>
    </UikTopBarSection>

  </UikTopBar>

  <div className={ cls.content }>
    Some content
  </div>
</div>` }
      language="markup"
    />

    <h3 className={ cls.outerTitle }>With links, search input and others</h3>
    <div className={ cls.asPage }>
      <UikTopBar>
        <UikTopBarSection>
          <UikTopBarTitle>
            <Uikon>building_plan</Uikon>
            Dashboard
          </UikTopBarTitle>
        </UikTopBarSection>
        <UikTopBarSection>
          <UikTopBarLinkContainer>
            <UikTopBarLink>Cakes</UikTopBarLink>
            <UikTopBarLink>Breads</UikTopBarLink>
            <UikTopBarLink>Other</UikTopBarLink>
          </UikTopBarLinkContainer>
          <UikDivider
            margin
            vertical
          />

          <UikInput
            icon={ <Uikon>search_left</Uikon> }
            iconPosition="right"
            placeholder="Search for pastry"
          />
          <UikButton
            primary
            style={ { marginLeft: '15px' } }
          >
            Login
          </UikButton>
        </UikTopBarSection>
      </UikTopBar>
      <div className={ cls.content }>
        Some content
      </div>
    </div>
    <UikCodeHighlight
      className={ cls.codeHighlight }
      code={ `
<div className={ cls.asPage }>
  <UikTopBar>

    <UikTopBarSection>
      <UikTopBarTitle>
        <Uikon>building_plan</Uikon>
        Dashboard
      </UikTopBarTitle>
    </UikTopBarSection>

    <UikTopBarSection>

      <UikTopBarLinkContainer>
        <UikTopBarLink>Cakes</UikTopBarLink>
        <UikTopBarLink>Breads</UikTopBarLink>
        <UikTopBarLink>Other</UikTopBarLink>
      </UikTopBarLinkContainer>

      <UikDivider
        margin
        vertical
      />

      <UikInput
        icon={ <Uikon>search_left</Uikon> }
        iconPosition="right"
        placeholder="Search for pastry"
      />

      <UikButton
        primary
        style={ { marginLeft: '15px' } }
      >
        Login
      </UikButton>

    </UikTopBarSection>

  </UikTopBar>

  <div className={ cls.content }>
    Some content
  </div>
</div>` }
      language="markup"
    />
  </UikLayoutMain>
)

export default UikTopBarDocs
