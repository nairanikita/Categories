/* eslint-disable max-len */
import * as React from 'react'

import {
  UikWidgetContent,
  UikWidgetDoc,
  UikWidgetTable,
  UikLayoutMain,
} from '@components'


const DocsReactStack = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          The Stack and Environment
        </h1>
        <p>
          As described, the stack is React based. The stack is built on top of
          {' '}
          <a href="https://github.com/jaredpalmer/razzle">
            awesome razzle
          </a>
          , a tool which abstracts many complex configuration to run an app into a single dependency. There are many other and more known frameworks, however razzle lets you built your app with your own architectural decisions and gives you more freedom of the whole concept of your app. Feel free to
          {' '}
          <a href="https://github.com/jaredpalmer/razzle">
            read more about razzle on github
          </a>
          .
        </p>
      </UikWidgetContent>
      <UikWidgetContent>
        <h2>
          Run the project
        </h2>
        <p>
          {'To tun a project, navigate to a project folder with package.json.'}
        </p>
      </UikWidgetContent>
      <UikWidgetTable>
        <thead>
          <tr>
            <th>
                Command
            </th>
            <th>
                Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>
                  npm install
              </code>
              {' or '}
              <code>
                  yarn
              </code>
            </td>
            <td>
                Install packages/dependencies.
            </td>
          </tr>
          <tr>
            <td>
              <code>
                  npm&nbsp;run&nbsp;dev
              </code>
                &nbsp;or&nbsp;
              <code>
                  yarn&nbsp;dev
              </code>
            </td>
            <td>
                Runs the project in development mode (supports hot reload). By default you can view your application at.
              {' '}
              <code>
                  http://localhost:3000
              </code>
            </td>
          </tr>
          <tr>
            <td>
              <code>
                  npm&nbsp;run&nbsp;build
              </code>
                &nbsp;or&nbsp;
              <code>
                  yarn&nbsp;build
              </code>
            </td>
            <td>
              Builds the app for production to the build folder. The build is minified and the filenames include the hashes. Your app is ready to be deployed!
            </td>
          </tr>
          <tr>
            <td>
              <code>
                  npm&nbsp;run&nbsp;start
              </code>
                &nbsp;or&nbsp;
              <code>
                  yarn&nbsp;start
              </code>
            </td>
            <td>
                Runs the compiled app in production.
              {' '}
              <code>
                  http://localhost:3000
              </code>
            </td>
          </tr>
        </tbody>
      </UikWidgetTable>
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          Project environment variables and configuration
        </h2>
        <p>
          To change, use process.env.VARIABLE.
        </p>
        <p>
          For more information, visit
          {' '}
          <a href="https://github.com/jaredpalmer/razzle">
            razzle
          </a>
          {' '}
          to read more about razzle env variables if necessary.
        </p>
      </UikWidgetContent>
      <UikWidgetTable>
        <thead>
          <tr>
            <th>
                Variable
            </th>
            <th>
                Default Value
            </th>
            <th>
                Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
                PORT
            </td>
            <td>
                3000
            </td>
            <td>
                Runs app on this port
            </td>
          </tr>
        </tbody>
      </UikWidgetTable>
      <UikWidgetContent>
        <h3>
          Typechecking with Flow
        </h3>
        <p>
          By default, typechecking with flow is enabled. To disable flow, remove it from both
          {' '}
          <code>
            razzle.config.json
          </code>
          {' '}
            and
          {' '}
          <code>
            .babelrc
          </code>
          {' '}
            files in the root folder of the project.
        </p>
        <h3>
          Server configuration and SSR
        </h3>
        <p>
          {'For a server configuration, you can explore contents in '}
          <code>
            src/server/*
          </code>
          {' files. By default, SSR is enabled.'}
        </p>
        <h3>
          Redux
        </h3>
        <p>
            For a redux configuration, you can explore
          {' '}
          <code>
            src/universal/redux/*
          </code>
          .
        </p>
      </UikWidgetContent>
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsReactStack
