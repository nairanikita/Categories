
/* eslint-disable max-len */
import React from 'react'
import { Link } from 'react-router-dom'

import {
  UikButton,
} from '@components'

import {
  UikCodeHighlight,
} from '@componentWrappers'

import PageBlank from '../../components/PageBlank'


const DocsGuideComponentProperty = () => (
  <PageBlank>
    <h1>
      <strong>
        {'"Component" property'}
      </strong>
    </h1>
    <p>
      {`It's not really a new thing and you probably noticed it to be used in e.g. react-router. With "Component" property,
      the Dashboard UI Kit components are nicely composable which makes them super flexible in terms of reusability.`}
    </p>

    <h2>
      Usage
    </h2>
    <p>
      {'Most of the components accept "Component" property, e.g. UikButton. You will always find that information on the documentation page for each component or in the code. So let\'s have a look on some exaples. First of all, here is a usage without Component property.'}
    </p>
    <UikCodeHighlight
      code={ `import { UikButton } from 'duik'

<UikButton>This is a simple button</UikButton>
` }
      language="javascript"
    />
    <p>
      <br />
      {'Renders: '}
      <UikButton>
This is a simple button
      </UikButton>
      {' which is a simple button.'}
    </p>
    <h2>
      A String HTML element
    </h2>
    <p>
      Any string that is supported (or not) will be rendered, e.g. if you provide
      {' "section" '}
as a parameter, react will render
      {' <section> '}
in the DOM. Here is a simple example:
    </p>
    <UikCodeHighlight
      code={ `import { UikButton } from 'duik'

<UikButton Component="a" href="//google.com" primary>Link to google</UikButton>
` }
      language="javascript"
    />
    <p>
      <br />
      {'The UikButton becomes <a>: '}
      <UikButton
        Component="a"
        href="//google.com"
        primary
      >
        Link to google
      </UikButton>
    </p>

    <h2>
      React Elements
    </h2>
    <p>
      {'But you don\'t have to stop with String elements only. You can also pass any other component that will wrap the component instead and will receive all their props. Make sure that those components accepts all the properties you are sending to it as well.'}
    </p>
    <p>
      {'Let\'s have a look on exampe where we are using our UikButton with a Link component from react-router.'}
    </p>
    <UikCodeHighlight
      code={ `import { UikButton } from 'duik'
import { Link } from 'react-router-dom'

<UikButton Component={ Link } to="/docs" success>To Docs Homepage</UikButton>
` }
      language="javascript"
    />
    <p>
      <br />
      {'The UikButton becomes <Link ...>: '}
      <UikButton
        Component={ Link }
        success
        to="/docs"
      >
        To Docs Homepage
      </UikButton>
    </p>
  </PageBlank>
)


export default DocsGuideComponentProperty
