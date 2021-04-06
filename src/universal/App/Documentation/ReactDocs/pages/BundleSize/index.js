
/* eslint-disable max-len */
import React from 'react'
import { Link } from 'react-router-dom'

import {
  UikCodeHighlight,
} from '@componentWrappers'

import PageBlank from '../../components/PageBlank'


const DocsGuideBundleSize = () => (
  <PageBlank>
    <h1>
      <strong>
            Bundle Size
      </strong>
    </h1>
    <p>
      In the world of big and heavy applications, our aim was to deliver a very lightweight solution. Currently the bundle weights
      {' '}
      <strong>
        23kb
      </strong>
      {' with both JS and CSS.'}
    </p>

    <h2>
      Importing whole bundle &amp; treeshaking
    </h2>
    <p>
      {`If your stack is built on top of webpack and other similar solutions, when compilling, unused code won't be included in the final bundle compiled by your stack.
      `}
    </p>
    <UikCodeHighlight
      code={ 'import { UikButton, UikInput } from \'duik\'' }
      language="javascript"
    />
    <h2>
      Importing specific components only
    </h2>
    <p>
      If you are not sure that your bundling supports treeshaking, you can simply import your components one by one. See example below:
    </p>
    <UikCodeHighlight
      code={ `import UikButton from 'duik/UikButton'
import UikInput from 'duik/UikInput'` }
      language="javascript"
    />
    <h2>
      How to import compiled files
    </h2>
    <p>
Please follow guide in
      {' '}
      <Link to="/docs/start/compiled">Getting Started</Link>
      {' '}
section for more details.
    </p>
  </PageBlank>
)


export default DocsGuideBundleSize
