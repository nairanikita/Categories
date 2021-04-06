/* eslint-disable max-len */
import * as React from 'react'
import { Link } from 'react-router-dom'


import {
  UikWidgetContent,
  UikWidgetDoc,
  UikDropdownItem,
  UikDropdown,
  UikButton,
  UikLayoutMain,
} from '@components'


import PropertyTable from '../../components/PropertyTable'
import ExampleTable from '../../components/ExampleTable'
import properties from '../../shared/properties'

const itemProps = [
  properties.className(),
  properties.children({
    desc: (
      <p>
        {'Items inside a list. You can use array of'}
        <Link to="/docs/react/dropdown-item">
        UikDropdownItem
        </Link>
        {', which is basically a styled '}
        <Link to="/docs/react/button">
        UikButton
        </Link>
        {' or any of your components.'}
      </p>
    ),
  }),
  {
    prop: 'position',
    propType: 'String',
    isRequired: false,
    defaultValue: 'bottomRight',
    desc: 'topLeft, topRight, bottomLeft, bottomRight',
  },
  properties.node({
    prop: 'DisplayComponent',
    desc: 'Initial display component that is visible for click, must be able to receive onClick property',
  }),
  properties.childProps({
    prop: 'listProps',
    desc: 'props passed down to the list',
  }),
  properties.childProps({
    prop: 'displayComponentProps',
    desc: 'props passed down to the display component',
  }),
  properties.rest(),
]

const CustomDisplayComponent = ({ onClick }) => ( // eslint-disable-line
  <UikButton
    onClick={ onClick }
    primary
  >
    CustomDisplayComponent
  </UikButton>
)

const examples = [
  {
    rendered: (
      <UikDropdown position="bottomLeft">
        <UikDropdownItem>
          Settings
        </UikDropdownItem>
        <UikDropdownItem>
          Your Profile
        </UikDropdownItem>
      </UikDropdown>
    ),
    code: `<UikDropdown position="bottomLeft">
  <UikDropdownItem>
    Settings
  </UikDropdownItem>
  <UikDropdownItem>
    Your Profile
  </UikDropdownItem>
</UikDropdown>`,
  },
  {
    rendered: (
      <UikDropdown
        DisplayComponent={ CustomDisplayComponent }
        position="bottomLeft"
      >
        <UikDropdownItem>
          Settings
        </UikDropdownItem>
        <UikDropdownItem>
          Your Profile
        </UikDropdownItem>
      </UikDropdown>
    ),
    code: `// custom component
const CustomDisplayComponent = ({ onClick }) => (
  <UikButton
    onClick={ onClick }
    primary
  >
    CustomDisplayComponent
  </UikButton>
)

// usage
<UikDropdown
  DisplayComponent={ CustomDisplayComponent }
  position="bottomLeft"
>
  <UikDropdownItem>
    Settings
  </UikDropdownItem>
  <UikDropdownItem>
    Your Profile
  </UikDropdownItem>
</UikDropdown>`,
  },
]


const DocsDropdown = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikDropdown
        </h1>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikDropdown Examples
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsDropdown
