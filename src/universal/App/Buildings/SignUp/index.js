/* eslint-disable max-len */
import * as React from 'react'
import { Link } from 'react-router-dom'

import {
  UikWidgetContent,
  UikWidget,
  UikInput,
  UikFormInputGroup,
  UikHeadline,
  UikHeadlineDesc,
  UikDivider,
  UikButton,
  Uikon,
  UikAvatar,
} from '@components'


import * as images from '@exampleAssets'

import cls from './buildings-signup.scss'

import LoginCard from './components/Card'
import LoginCardContainer from './components/CardContainer'


const BuildingsSignUp = () => (
  <div className={ cls.pageWrapper }>
    <UikWidget
      className={ cls.widgetWrapper }
    >
      <div className={ cls.content }>
        <UikWidgetContent className={ cls.left }>
          <UikHeadline>
            Create Your Account
          </UikHeadline>
          <UikHeadlineDesc>
            Get started with Buildings and rent with love!
          </UikHeadlineDesc>
          <UikFormInputGroup>
            <UikFormInputGroup
              className={ cls.inputNameSurnameGroup }
              direction="horizontal"
            >
              <UikInput
                label="Name"
                name="name"
              />
              <UikInput
                label="Surname"
                name="surname"
              />
            </UikFormInputGroup>
            <UikInput
              label="E-mail address"
              name="email"
              placeholder="your@email.com"
            />
            <UikInput
              label="Password"
              name="password"
              placeholder="·····"
              type="password"
            />
          </UikFormInputGroup>
          <UikDivider margin />
          <h3 className={ cls.headline }>
            What are you looking for?
          </h3>
          <LoginCardContainer>
            <LoginCard isSelected>
              <Uikon>
                wallet
              </Uikon>
              <p>
                Rent
              </p>
            </LoginCard>
            <LoginCard>
              <Uikon>
                lightbulb
              </Uikon>
              <p>
                Co-work
              </p>
            </LoginCard>
            <LoginCard>
              <Uikon>
                rocket
              </Uikon>
              <p>
                Invest
              </p>
            </LoginCard>
          </LoginCardContainer>
          <UikButton
            className={ cls.btnAction }
            Component={ Link }
            success
            to="/buildings"
          >
            Get Started With Buildings!
          </UikButton>
        </UikWidgetContent>
        <div className={ cls.right }>
          <h3 className={ cls.headline }>
            <Uikon>
              building
            </Uikon>
            Buildings
          </h3>
          <p className={ cls.desc }>
            Architecture begins when you place two bricks carefully together.
          </p>
          <UikAvatar
            imgUrl={ images.a11 }
            name="Ludwig Mies van der Rohe"
            size="small"
          />
        </div>
      </div>
    </UikWidget>
    <p>
      Already on Buildings? Let us take you to
      {' '}
      <a>
        Sign In!
      </a>
    </p>
  </div>
)

export default BuildingsSignUp
