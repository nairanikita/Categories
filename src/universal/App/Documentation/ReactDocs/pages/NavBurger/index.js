/* eslint-disable max-len */
import * as React from 'react'


import {
  UikWidgetContent,
  UikWidgetDoc,
  UikNavBurger,
  UikLayoutMain,
} from '@components'


import PropertyTable from '../../components/PropertyTable'
import ExampleTable from '../../components/ExampleTable'
import properties from '../../shared/properties'

const itemProps = [
  properties.className({
    desc: 'your className or "active" to display active state',
  }),
  {
    prop: 'isOpen',
    defaultValue: 'false',
    propType: 'boolean',
    desc: 'Whether menu is in open or close state',
  },
  properties.rest(),
]

class BurgerExample extends React.PureComponent {
  state = {
    isOpen: false,
  }

  toggle = () => {
    const { isOpen } = this.state
    this.setState({
      isOpen: !isOpen,
    })
  }

  render() {
    const { isOpen } = this.state
    return (
      <div>
        <span>
          Click me!
        </span>
        <br />
        <br />

        <UikNavBurger
          isOpen={ isOpen }
          onClick={ this.toggle }
        />
      </div>
    )
  }
}

const examples = [
  {
    rendered: (
      <UikNavBurger />
    ),
    code: '<UikNavBurger />',
  },
  {
    rendered: (
      <UikNavBurger isOpen />
    ),
    code: '<UikNavBurger isOpen />',
  },
  {
    rendered: (
      <BurgerExample />
    ),
    code: `class BurgerExample extends React.PureComponent {
  state = {
    isOpen: false,
  }

  toggle = () => {
    const { isOpen } = this.state
    this.setState({
      isOpen: !isOpen,
    })
  }

  render() {
    const { isOpen } = this.state
    return (
      <div>
        <span>
          Click me!
        </span>
        <br />
        <br />

        <UikNavBurger
          isOpen={ isOpen }
          onClick={ this.toggle }
        />
      </div>
    )
  }
}


<BurgerExample />
`,
  },
]


const DocsNavLink = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikNavBurger
        </h1>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikNavBurger Examples
        </h2>
        <p>
          Just a styled and animated burger :)
        </p>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsNavLink
