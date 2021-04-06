import * as React from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'
import {
  UikNavPanel,
} from '@components'

import cls from './docs-nav-wrapper.scss'
// @flow
const DocsMenu = ({
  className,
  isMenuOpen,
  children,
}: { className?: String, children?: React.Node, isMenuOpen: Boolean }) => (
  <UikNavPanel
    className={ classnames(cls.wrapper, className, {
      [cls.isMenuOpen]: isMenuOpen,
    }) }
  >
    {children}

  </UikNavPanel>
)

DocsMenu.defaultProps = {
  className: null,
  children: null,
}

export default connect(
  store => ({
    isMenuOpen: store.docs.isMenuOpen,
  }),
)(DocsMenu)
