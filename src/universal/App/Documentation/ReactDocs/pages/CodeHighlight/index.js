/* eslint-disable max-len */
import * as React from 'react'


import {
  UikWidgetContent,
  UikWidgetDoc,
  UikLayoutMain,
} from '@components'

import {
  UikCodeHighlight,
} from '@componentWrappers'


import PropertyTable from '../../components/PropertyTable'
import ExampleTable from '../../components/ExampleTable'
import properties from '../../shared/properties'

const itemProps = [
  {
    prop: 'language',
    propType: 'String',
    required: true,
    desc: (
      <p>
      Language to parse, visit
        {' '}
        <a href="https://github.com/PrismJS/prism/tree/master/components">
        prismjs
        </a>
        {' '}
      to see supported languages. By default, this component imports only javascript, jsx, markup, css, and json highlighting. If you want to use another syntax, you will have to import it as following:
        <code>
          {'import \'prismjs/components/prism-yourlang\''}
        </code>
        {' '}
in your files
      </p>
    ),
  },
  {
    prop: 'code',
    propType: 'String',
    required: true,
    desc: (
      <p>
        Code to be highlighted
      </p>
    ),
  },
  properties.rest({
    desc: (
      <p>
      Other properties passed down to the refractor component. See the
        {' '}
        <a href="https://github.com/PrismJS/prism">
        documentation
        </a>
        {' for more information.'}
      </p>
    ),
  }),
]

const examples = [
  {
    rendered: (
      <UikCodeHighlight
        code={ 'const hello = "Hello Kit\'' }
        language="javascript"
      />
    ),
    code: `<UikCodeHighlight
  code={ 'const hello = "Hello Kit" }
  language="javascript"
/>`,
  },
]


const DocsHighlight = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikCodeHighlight
        </h1>
        <p>
          This is a wrapping component with styles and some extra logic above
          {' '}
          <a href="https://github.com/PrismJS/prism">
            PrismJS
          </a>
          .
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikCodeHighlight Examples
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsHighlight
