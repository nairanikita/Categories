import * as React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import * as actions from '@redux/buildings/actions'
import * as images from '@exampleAssets'

import {
  UikTopBar,
  UikTopBarSection,
  Uikon,
  UikInput,
  UikSelect,
  UikDivider,
  UikButton,
  UikNavBurger,
} from '@components'

import cls from './buildings-top-bar.scss'


// @flow
type BuildingsTopBarProps = {
  children?: React.Node,
  toggleMenu: Function,
  className?: Boolean,
  isMenuOpen: Boolean,
  rightEl?: React.node,
}

const BuildingsTopBar = ({
  children,
  toggleMenu,
  className,
  isMenuOpen,
  rightEl,
}: BuildingsTopBarProps) => (
  <UikTopBar
    className={ classnames(cls.wrapper, className) }
  >
    <UikButton
      className={ cls.menuButton }
      onClick={ toggleMenu }
      transparent
    >
      <UikNavBurger isOpen={ isMenuOpen } />
    </UikButton>
    {children}
    <UikTopBarSection className={ cls.actions }>
      {
        rightEl || (
          <UikInput
            icon={ (
              <Uikon>
              search_left
              </Uikon>
          ) }
            placeholder="Type to search..."
          />
        )
      }
      <UikDivider
        className={ cls.actionMobileHidden }
        direction="vertical"
        margin
      />
      <UikSelect
        className={ cls.actionMobileHidden }
        defaultValue={ ['czech'] }
        options={ [
          {
            value: 'czech',
            label: (
              <span>
                <img
                  alt="english"
                  className={ cls.selectFlag }
                  src={ images.fCzechia }
                />
                CZE
              </span>
            ),
          },
          {
            value: 'tuvalu',
            label: (
              <span>
                <img
                  alt="tuvalu"
                  className={ cls.selectFlag }
                  src={ images.fTuvalu }
                />
                TUV
              </span>
            ),
          },
          {
            value: 'norway',
            label: (
              <span>
                <img
                  alt="norway"
                  className={ cls.selectFlag }
                  src={ images.fNorway }
                />
                NOR
              </span>
            ),
          },
        ] }
        placeholder="Action"
        position="bottomRight"
      />
    </UikTopBarSection>
  </UikTopBar>
)

BuildingsTopBar.defaultProps = {
  children: null,
  className: null,
  rightEl: null,
}

export default connect(
  store => ({
    isMenuOpen: store.buildings.isMenuOpen,
  }),
  {
    toggleMenu: actions.toggleMenu,
  },
)(BuildingsTopBar)
