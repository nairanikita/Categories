import * as React from 'react'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from '../universal/App'

// @flow
type MarkupProps = {
  assets: Object,
  store: Object,
  context: Object,
  req: Object,
  ssr?: Boolean,
}

const title = 'Dashboard UI Kit 3.0 Demo & Docs'
const description = 'Demo previews and React documentation for the best selling Dashboard UI Kit'


const createGtmMarkup = () => ({
  __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-127658620-1');
`,
})


const Markup = ({
  assets,
  store,
  context,
  req,
  ssr,
}: MarkupProps) => (
  <html lang="en">
    <head>
      <meta
        content="IE=edge"
        httpEquiv="X-UA-Compatible"
      />
      <meta charSet="utf-8" />
      <title>
        {title}
      </title>
      <meta
        content={ description }
        name="description"
      />

      <meta
        content={ title }
        property="og:title"
      />
      <meta
        content="website"
        property="og:type"
      />
      <meta
        content="http://preview.janlosert.com"
        property="og:url"
      />
      <meta
        content="http://preview.janlosert.com/OGDocumentation.jpg"
        property="og:image"
      />
      <meta
        content={ description }
        property="og:description"
      />

      <meta
        content="width=device-width, initial-scale=1"
        name="viewport"
      />
      {(assets.client && assets.client.css && (
      <link
        href={ `${assets.client.css}` }
        rel="stylesheet"
      />
      )) }
      {(assets.vendor && assets.vendor.js && (
      <script
        defer
        src={ `${assets.vendor.js}` }
      />
      )) }
      {
        process.env.NODE_ENV === 'production'
          ? (
            <script
              defer
              src={ `${assets.client.js}` }
            />
          )
          : (
            <script
              crossOrigin="true"
              defer
              src={ `${assets.client.js}` }
            />
          )
      }
      <link
        async
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900"
        rel="stylesheet"
      />

      { /* FOR preview.janlosert.com only, please remove :) */
        process.env.DUIK_BUILD && process.env.NODE_ENV === 'production' && (
          <React.Fragment>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=UA-127658620-1"
            />
            <script dangerouslySetInnerHTML={ createGtmMarkup() } /> {/* eslint-disable-line */ }
          </React.Fragment>
        )
      }
    </head>
    <body>
      <div id="root">
        {ssr ? (
          <Provider store={ store }>
            <StaticRouter
              context={ context }
              location={ req.url }
            >
              <App />
            </StaticRouter>
          </Provider>
        ) : null}
      </div>
    </body>
  </html>
)

Markup.defaultProps = {
  ssr: false,
}

export default Markup
