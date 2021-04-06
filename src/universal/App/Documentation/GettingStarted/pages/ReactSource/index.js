/* eslint-disable max-len */
import * as React from 'react'
import { Link } from 'react-router-dom'

import {
  UikWidgetContent,
  UikWidgetDoc,
  UikLayoutMain,
} from '@components'


const DocsReactSourceCode = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          React Source Code
        </h1>
        <p>
          {'As said, the project is primarily written for React usage, the file & folder structure is optimized for this usage as well.'}
        </p>
      </UikWidgetContent>
      <UikWidgetContent>
        <ul className="no-style">
          <li>
            <strong className="color-blue">
                /repository
            </strong>
            {' '}
            <i>
                (React source code & repository, including this documentation,
              {' '}
              <Link to="/docs/start/source-code">
                  read more →
              </Link>
                )
            </i>
          </li>
          <ul className="no-style">
            <li>
                /src
            </li>
            <ul className="no-style">
              <li>
                  /client
              </li>
              <ul className="no-style">
                <li>
                    /index.js
                  {' '}
                  <em>
                    - default client configuration
                  </em>
                </li>
              </ul>
              <li>
                  /server
              </li>
              <ul className="no-style">
                <li>
                    /index.js
                  {' '}
                  <em>
                    - default server configuration
                  </em>
                </li>
                <li>
                    /Markup.js
                  {' '}
                  <em>
                    - default markup to be served by server
                  </em>
                </li>
                <li>
                    /MarkupSSR.js
                  {' '}
                  <em>
                    - Server side rendered markup to be served by server
                  </em>
                </li>
              </ul>
              <li>
                  /universal
              </li>
              <ul className="no-style">
                <li>
                    /App
                  {' '}
                  <em>
                    - application, route based structure
                  </em>
                </li>
                {/* App */}
                <ul className="no-style">
                  <li>
                      /App.scss
                    {' '}
                    <em>
                      - default Sass file with basic styling
                    </em>
                  </li>
                  <li>
                      /index.js
                    {' '}
                    <em>
                      - root of the application with routes
                    </em>
                  </li>
                  <li>
                    {'/*'}
                    {' '}
                    <em>
                      - Route level components
                    </em>
                  </li>
                </ul>
                {/* app end */}
                <li>
                    /components
                  {' '}
                  <em>
                    - reusable components
                  </em>
                </li>
                <li>
                    /containers
                  {' '}
                  <em>
                    - reusable components, wrapping type
                  </em>
                </li>
                <li>
                  /exampleAssets
                  {' '}
                  <em>
                    - example images and others
                  </em>
                </li>
                <li>
                  /fonts
                  {' '}
                  <em>
                    - place to store your fonts
                  </em>
                </li>
                <li>
                  /redux
                  {' '}
                  <em>
                    - redux configuration
                  </em>
                </li>
                <li>
                  /vars.scss
                  {' '}
                  <em>
                    - default Sass variables, mixins and other
                  </em>
                </li>
              </ul>
              <li>
                  /index.js
              </li>
            </ul>
            <li>
                /.babelrc
            </li>
            <li>
                /.eslintrc.js
            </li>
            <li>
                /.flowconfig
            </li>
            <li>
                /jsconfig.json
            </li>
            <li>
                /package.json
            </li>
            <li>
                /razzle.config.json
            </li>
            <li>
                /yarn.lock
            </li>
          </ul>
        </ul>
      </UikWidgetContent>
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsReactSourceCode
