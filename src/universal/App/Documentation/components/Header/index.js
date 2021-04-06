// Libraries
import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import classnames from 'classnames'
import * as actions from '@redux/docs/actions'

import {
  UikButton,
  UikFormInputGroup,
  UikTopBar,
  UikTopBarSection,
  Uikon,
  UikTopBarTitle,
  UikTopBarMenuDivider,
  UikSelect,
  UikNavBurger,
} from '@components'

import HeaderLinks from './HeaderLinks'


import cls from './docs-headerLinks.scss'
// @flow
class DocsTopBar extends React.Component<{
  location: Object,
  history: Object,
  toggleMenu: Function,
  isMenuOpen: Boolean
}> {
  render() {
    const {
      location,
      history,
      toggleMenu,
      isMenuOpen,
    } = this.props
    const path = location.pathname.split('/').splice(0, 3).join('/')
    const defaultSelectValue = path === '/docs' ? '/docs/start' : path

    return (
      <UikTopBar className={ cls.topBar }>
        <UikButton
          className={ classnames(cls.btnMenu, {
            [cls.hasMenu]: [
              '/docs/start',
              '/docs/react',
            ].indexOf(defaultSelectValue) > -1,
          }) }
          onClick={ toggleMenu }
        >
          <UikNavBurger isOpen={ isMenuOpen } />
        </UikButton>
        <UikTopBarSection>
          <UikTopBarTitle>
            <Uikon>
            help
            </Uikon>
            Documentation
          </UikTopBarTitle>
          <UikTopBarMenuDivider className={ cls.divider } />
          <HeaderLinks />
          <UikSelect
            activeValueProps={ {
              className: cls.select,
            } }
            className={ cls.selectWrapper }
            defaultValue={ defaultSelectValue }
            onChange={ (v) => { history.push(v.value) } }
            options={ [
              {
                value: '/docs/start',
                label: 'Getting Started',
              },
              {
                value: '/docs/react',
                label: 'React Docs',
              },
              {
                value: '/docs/support',
                label: 'Support',
              },
              {
                value: '/docs/changelog',
                label: 'Changelog',
              },
              {
                value: '/',
                label: 'Screen Previews',
              },
            ] }
            position="bottomRight"
          />
        </UikTopBarSection>

        <UikTopBarSection className={ cls.actions }>
          <UikFormInputGroup direction="horizontal">

            <UikButton
              className={ cls.btnPreviews }
              Component={ Link }
              to="/"
              transparent
            >
              Screen Previews
            </UikButton>
            <UikButton
              Component="a"
              href="https://janlosert.com/store/dashboard-ui-kit-3.html?from=preview"
              icon={ (
                <Uikon>
                rocket
                </Uikon>
            ) }
              primary
            >
        Download Kit
            </UikButton>
          </UikFormInputGroup>
        </UikTopBarSection>
      </UikTopBar>
    )
  }
}

export default withRouter(connect(
  store => ({
    isMenuOpen: store.docs.isMenuOpen,
  }),
  {
    toggleMenu: actions.toggleMenu,
  },
)(DocsTopBar))
