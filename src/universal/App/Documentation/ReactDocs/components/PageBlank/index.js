
/* eslint-disable max-len */
import React from 'react'

import {
  UikLayoutMain,
} from '@components'


import cls from './docs-page-blank.scss'
// @flow

type Props = {
  className?: string,
}
const DocsPageBlank = ({ className, ...rest }: Props) => (
  <UikLayoutMain
    className={ cls.wrapperInner }
    outerProps={ {
      className: cls.wrapperOuter,
    } }
    { ...rest }
  />
)

DocsPageBlank.defaultProps = {
  className: null,
}


export default DocsPageBlank
