
/* eslint-disable max-len */
import React from 'react'
import { Link } from 'react-router-dom'

import {
  UikCodeHighlight,
} from '@componentWrappers'

import PageBlank from '../../../components/PageBlank'

const structure = `dashboard-ui-kit-demo
├── README.md
├── node_modules
├── package.json
├── .env // <--- new
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── @uik
    │   ├── index.js // <--- new
    │   └── styles.css // <--- new
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js`


const DocsGuideComponentProperty = () => (
  <PageBlank>
    <h1>
      <strong>
        {'Create React App Integration'}
      </strong>
    </h1>
    <p>
      {'This is a step by step guide for how to simply integrate Dashboard UI Kit into your CRA project. You will also find the full example source code in the zipped file bundle.'}
    </p>

    <h2>
      Installation
    </h2>
    <p>
      {'This is a guide that follows instructions on the '}
      <a href="https://github.com/facebook/create-react-app">official github repository</a>
      .
    </p>
    <UikCodeHighlight
      code={ `npx create-react-app dashboard-ui-kit-demo
cd dashboard-ui-kit-demo
// to check if it's working
npm start` }
      language="javascript"
    />

    <h2>
      {'Adding new files'}
    </h2>
    <p>
      {'All should be fine, so now let\'s copy some files. We will simplify this to copying the whole compiled file. In the zipped package, you will find necessary folder in '}
      <code>your_unzipped_folder/dist/lib</code>
      {' in which you will find index.js and styles.css files. We are going to copy these files into our newly created project into '}
      <code>dashboard-ui-kit-demo/src/@uik</code>
    </p>
    <h2>
      Simplifying our imports
    </h2>
    <p>
      {'We want to make the code a little bit more convenient. We could probably use dot annotation to import files, however we can create an alias, so we don\'t have to write and guess how many dots we have to add like this '}
    </p>
    <UikCodeHighlight
      code="import { Component } from '../../@uik'"
    />
    <p>
      {'Our goal is to minize this so we can import components from our library like so wherever we are importing our components: '}
    </p>
    <UikCodeHighlight
      code="import { Component } from '@uik'"
    />
    <p>
      {'This can be easily achived with creating file with name \'.env\' in our root folder of the project. So, let\'s create it and the content of the file is:'}
    </p>
    <UikCodeHighlight
      code="NODE_PATH=src"
    />
    <p>
      {'CRA will create aliases for us so whatever is in src folder, you can reach it without wiriting \'.../\' dot annotation. Now we are ready to importing some components from the UI Kit!'}
    </p>
    <h2>New file structure</h2>
    <p>
      Our file structure in newly created CRA app looks something like this (remember if you are alerady running npm start, you need to kill the process and run it again to restart):
    </p>
    <UikCodeHighlight
      code={ structure }
      language="javascript"
    />

    <h2>Importing UIK components</h2>
    <p>
      {'Let\'s modify the src/App.js file, we want to display a '}
      <Link to="/docs/react/button">UikButton</Link>
      {' on the example page. We just have to add three extra lines. The full code looks like this:'}
    </p>
    <UikCodeHighlight
      code={ `import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { UikButton } from '@uik' // <--- new
import '@uik/styles.css' // <--- new

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <br />
          <UikButton primary>UikButton</UikButton> // <--- new
        </header>
      </div>
    );
  }
}

export default App;
` }
      language="javascript"
    />
    <p>
      {'As you can see, we imported the UikButton component, as well as the styles. Note that you have to import the styles only once in the root of the application! Check more '}
      <Link to="docs/start/compiled">here</Link>
      .
    </p>
    <h2>Let's run it</h2>
    <p>
      {'Before we actually start, we need to install dependencies. Then finally we can start the project and that\'s it!'}
    </p>
    <UikCodeHighlight
      code="npm install --save classnames
npm start"
      language="javascript"
    />

  </PageBlank>
)


export default DocsGuideComponentProperty
