/* eslint-disable max-len */
import * as React from 'react'
import { Link } from 'react-router-dom'

import {
  UikWidgetContent,
  UikWidgetDoc,
  UikLayoutMain,
} from '@components'

import {
  UikCodeHighlight,
} from '@componentWrappers'

const ReactCompiled = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
        Compiled React Files
        </h1>
        <p>
          {'Include the lib/styles.css file in your project once. Check the list of available components '}
          <Link to="/docs/start/bundle-contents">here</Link>
            .
        </p>
        <UikCodeHighlight
          code={ 'import  \'./path/to/files/lib/styles.css\'' }
          language="javascript"
        />
        <br />
        <p>To import components, simply use</p>
        <UikCodeHighlight
          code={ `import { UikButton } from './path/to/files/lib'
...
<UikButton>My Button</UikButton>` }
          language="javascript"
        />
        <br />
        <p>
          {'You can find necessary files in /root/dist/lib folder. This will import the whole package to your project. If you don\'t want to include the whole pack, you can import only components that you would like to have.'}
        </p>
        <UikCodeHighlight
          code={ `import  './path/to/files/UikButton/styles.scss'
import Button from './path/to/files/UikButton'
...
<Button>My Button</Button>` }
          language="javascript"
        />
      </UikWidgetContent>
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>Dependencies</h2>
        <p>If importing whole compiled file, you will have to run this command to install dependencies to your project</p>

        <br />
        <UikCodeHighlight
          code="yarn add react classnames

// if using yarn
npm install react clasnames // if using npm"
          language="javascript"
        />
      </UikWidgetContent>
    </UikWidgetDoc>


    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>Errors</h2>
        <p>
          {'When importing file, errors might show up. This is because the compiled file is eslinted (it doesn\'t have to be since it\'s compiled). Add these files to your .eslintignore file to be ignored. This doesn\'t work with create-react-app because CRA is ignoring .eslintignore file. Instead, you should add '}
          {/* eslint-disable-next-line */ }
          <code>/* eslint-ignore */</code>
          {' on top of the file.'}
        </p>
      </UikWidgetContent>
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default ReactCompiled
