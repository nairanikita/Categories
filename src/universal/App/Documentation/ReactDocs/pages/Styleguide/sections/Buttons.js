
import React from 'react'


import {
  UikButton,
  div,
  Uikon,
} from '@components'

import SectionTitle from '../components/TopBar'
import Content from '../components/Content'
import ComponentTitle from '../components/ComponentTitle'
import TopBarTitle from '../components/TopBarTitle'

import cls from './styleguide-buttons.scss'

const DocsStyleguideButtons = () => (
  <React.Fragment>
    <SectionTitle>
      <TopBarTitle
        name="UikButton"
        to="button"
      >
        Buttons
      </TopBarTitle>
        03
    </SectionTitle>
    <Content>
      <div className={ cls.groupDivider }>
        <div>
          <ComponentTitle>
            With Border
          </ComponentTitle>
          <div className={ cls.btnGroup }>
            <UikButton>
              Click
            </UikButton>
            <UikButton transparent>
              Click
            </UikButton>
            <UikButton primary>
              Click
            </UikButton>
            <UikButton success>
              Click
            </UikButton>
            <UikButton error>
              Click
            </UikButton>
            <UikButton transparent>
              Click
            </UikButton>
          </div>
        </div>
        <div>
          <ComponentTitle>
            Without Border
          </ComponentTitle>
          <div className={ cls.btnGroup }>
            <UikButton
              dark
              noBorder
            >
              Click
            </UikButton>
            <UikButton
              noBorder
              primary
            >
              Click
            </UikButton>
            <UikButton
              noBorder
              success
            >
              Click
            </UikButton>
            <UikButton noBorder>
              Click
            </UikButton>
            <UikButton
              error
              noBorder
            >
              Click
            </UikButton>
          </div>
        </div>
        <div>
          <ComponentTitle>
            With Icon (Sample)
          </ComponentTitle>
          <div className={ cls.btnGroup }>
            <UikButton
              icon={ (
                <Uikon>
                  shopping_bag
                </Uikon>
              ) }
              primary
            >
              Add to cart
            </UikButton>
            <UikButton
              icon={ (
                <Uikon>
                  shopping_bag
                </Uikon>
              ) }
              success
            >
              Add to cart
            </UikButton>
          </div>
        </div>
      </div>
    </Content>
  </React.Fragment>
)


export default DocsStyleguideButtons
