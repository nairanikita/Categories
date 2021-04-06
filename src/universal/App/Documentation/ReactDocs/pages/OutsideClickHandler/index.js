/* eslint-disable max-len */
import * as React from 'react'
import { Link } from 'react-router-dom'


import {
  UikWidgetContent,
  UikWidgetDoc,
  UikLayoutMain,
} from '@components'


import PropertyTable from '../../components/PropertyTable'
import properties from '../../shared/properties'

const itemProps = [
  properties.children(),
  properties.className(),
  properties.Component({
    defaultValue: '"div"',
  }),
  {
    prop: 'onOutsideClick',
    propType: 'Function',
    desc: 'Callback function that is triggered when clicked outside the element area',
  },
  {
    prop: 'onOutsideScroll',
    propType: 'Boolean',
    defaultValue: 'true',
    desc: 'Triggers the onOutsideClick on scroll as well',
  },
  {
    prop: 'onWindowResize',
    propType: 'Boolean',
    defaultValue: 'true',
    desc: 'Triggers the onOutsideClick on window resize as well',
  },
  properties.rest(),
]


const DocsOutsideClick = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikOutsideClickHandler
        </h1>
        <p>
          Wrapps the content with div and checks when user clicks outside of the dom. This component is used e.g. on
          {' '}
          <Link to="/docs/react/dropdown">
            UikDropdown
          </Link>
          . Check the source code for example.
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsOutsideClick
