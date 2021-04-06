/* eslint-disable max-len */
import * as React from 'react'
import { Link } from 'react-router-dom'


import {
  UikWidgetContent,
  UikWidgetDoc,
  UikLayoutMain,
} from '@components'

import {
  UikCodeHighlightContainer,
} from '@componentWrappers'


import PropertyTable from '../../components/PropertyTable'
import ExampleTable from '../../components/ExampleTable'
import properties from '../../shared/properties'

const itemProps = [

  properties.cls({
    desc: 'className for wrapping component',
  }),
  {
    prop: 'maxHeight',
    propType: 'Boolean',
    defaultValue: 'false',
    desc: 'Maximum height of the container is 70vh',
  },
  properties.Component({
    defaultValue: '"div"',
  }),
  {
    prop: 'data',
    propType: 'Object',
    defaultValue: '{}',
    desc: (
      <p>
        {'Object of <key, value>, where key is language and Value is code property for '}
        <Link
          to="/docs/react/code-highlight"

        >
          UikCodeHighlight
        </Link>
      </p>
    ),
  },
  {
    prop: 'defaultActiveLang',
    propType: 'String',
    desc: 'On initial render, by default the language is selected',
  },
  properties.rest({
    desc: 'Other props are passed to the wrapping component',
  }),
]

const examples = [
  {
    rendered: (
      <UikCodeHighlightContainer
        data={ {
          javascript: 'const hello = "Hello Kit"',
          markup: '<div>Hello</div>',
        } }
      />
    ),
    code: `<UikCodeHighlightContainer
  data={ {
    javascript: 'const hello = "Hello Kit",
    markup: '<div>Hello</div>',
  } }
/>`,
  },
]


const DocsHighlightContainer = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikCodeHighlightContainer
        </h1>
        <p>
          This is a wrapping component with styles and some extra logic above
          {' '}
          <a href="https://github.com/PrismJS/prism">
            PrismJS
          </a>
          . You can pass multiple different code examples, e.g. Javascript + Html (markdown), the component will render the code with tabs to select a code preview.
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikCodeHighlightContainer Examples
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsHighlightContainer
