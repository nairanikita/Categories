import * as React from 'react'

/* eslint-disable max-len */
import {
  UikWidgetContent,
  UikWidgetDoc,
  UikLayoutMain,
} from '@components'

import {
  UikCodeHighlightContainer,
} from '@componentWrappers'

import sampleCode from './sampleCode'


const DocsHtmlCss = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
        Plain HTML & CSS
        </h1>
        <p>
          {`HTML & CSS is in output of the original React code. It has been built with having a clean code in mind.
        SCSS files are avaiable in the React source code as they have been built with `}
          <a href="https://github.com/webpack-contrib/css-loader#localidentname">
          CSS Modules (css-loader) with a localIndentSettings
          </a>
          {': uik-[name]__[local], where name is filename and local is local class name.'}
        </p>
        <p>
          Because all javascript interactions were written in React, there is currently no support of JS actions and events in this plain html/css template, such as opening custom selects
        </p>
        <p>
          <strong>
          Disclaimer:
          </strong>
          {' '}
            Because the HTML is an output of React code, chartjs and refractor are not initialized and not rendered. Sorry for incoveniency
        </p>
      </UikWidgetContent>

    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          Folder Structure
        </h2>
      </UikWidgetContent>
      <UikWidgetContent>
        <ul className="no-style">
          <li>
            /root
          </li>
          <ul className="no-style">
            <li>
              <strong className="color-green">
                /html
              </strong>
            </li>
            <ul className="no-style">
              <li>
                /static
              </li>
              <li>
                /pages.html
              </li>
            </ul>
          </ul>
        </ul>
      </UikWidgetContent>
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          Sample Code
        </h2>
      </UikWidgetContent>
      <UikCodeHighlightContainer
        data={ sampleCode }
        maxHeight
      />

    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsHtmlCss
