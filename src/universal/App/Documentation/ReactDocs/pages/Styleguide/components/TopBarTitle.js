import * as React from 'react'
// @flow
import {
  UikTopBarTitle,
} from '@components'
import { Link } from 'react-router-dom'
import camelToSnake from '@lib/camelToSnake'

import cls from './styleguide.scss'

const StyleguideTopBarTitle = ({
  to,
  children,
  name,
  ...rest
}: {
  to?: String,
  children?: React.Node,
  name?: String
}) => (to ? (

  <Link
    className={ cls.link }
    to={ to ? `/docs/react/${camelToSnake(to)}` : '#' }
  >
    <UikTopBarTitle
      className={ cls.topBarTitle }
      { ...rest }
    >
      {children}
      {
        name && (
          <span className={ cls.StyleguideTopBarTitleName }>
            {`<${name} />`}
          </span>
        )
      }
    </UikTopBarTitle>
  </Link>
) : (

  <UikTopBarTitle
    className={ cls.topBarTitle }
    { ...rest }
  >
    {children}
    {
    name && (
      <span className={ cls.StyleguideTopBarTitleName }>
        {`<${name} />`}
      </span>
    )
  }
  </UikTopBarTitle>
)
)

StyleguideTopBarTitle.defaultProps = {
  to: null,
  children: null,
  name: null,
}

export default StyleguideTopBarTitle
