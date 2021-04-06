import * as React from 'react'
import { NavLink } from 'react-router-dom'
import * as images from '@exampleAssets'


/* eslint-disable max-len */


import {
  UikWidget,
  UikWidgetContent,
  UikSelect,
  UikDivider,
  UikNavLinkDark,
  UikNavSection,
  UikFormInputGroup,
  UikInput,
  UikButton,
  UikCheckbox,
  UikWidgetContainer,
  UikContainerVertical,
  UikLayoutMain,
  UikProgressBar,
} from '@components'


import TopBar from './components/TopBar'

import cls from './buildings-user.scss'

import ImgUserProfile from './assets/profilePic.jpg'


const links = [
  {
    text: 'Account Settings',
    to: '/settings',
  },
  {
    text: 'Teams',
    to: '/teams',
  },
  {
    text: 'Password',
    to: '/password',
  },
  {
    text: 'Invoices',
    to: '/invoices',
  },
  {
    text: 'Integrations',
    to: '/integrations',
  },
  {
    text: 'Privacy',
    to: '/privacy',
  },
]
// @flow

class BuildingsDashboard extends React.Component<{
}> {
  render() {
    return (
      <UikContainerVertical className={ cls.page }>
        <TopBar rightEl={ (
          <div className={ cls.progress }>
            <p>Profile Completeness: 70%</p>
            <UikProgressBar
              className={ cls.progressBar }
              fill={ 0.7 }
            />
          </div>
          ) }
        />
        <UikLayoutMain>
          <div className={ cls.splitContent }>
            <UikWidgetContainer className={ cls.subNav }>
              <UikWidget>
                <div
                  className={ cls.profilePic }
                  style={ { backgroundImage: `url("${ImgUserProfile}")` } }
                />
                <UikWidgetContent className={ cls.userMeta }>
                  <h2>Ethel Harvey</h2>
                  <p>
                    {'Caracas, Venezuela'}
                    <br />
                    {'Your time: 4:32 PM (GMT-4)'}
                  </p>
                </UikWidgetContent>
                <UikDivider />
                <div className={ cls.userMenu }>
                  <UikNavSection>
                    {
                      links.map(link => (
                        <UikNavLinkDark
                          key={ link.to }
                          Component={ NavLink }
                          to={ `/buildings/user${link.to}` }
                        >
                          {link.text}
                        </UikNavLinkDark>
                      ))
                    }
                  </UikNavSection>
                </div>
              </UikWidget>
            </UikWidgetContainer>
            <UikWidgetContainer>
              <UikWidget>
                <UikWidgetContent>
                  <h3>Basic Profile</h3>
                  <p>This information can be edited from your profile page.</p>
                </UikWidgetContent>
                <UikDivider />
                <form onSubmit={ () => {} }>
                  <UikWidgetContent>
                    <UikFormInputGroup>
                      <UikFormInputGroup direction="horizontal">
                        <UikInput
                          defaultValue="Ethel"
                          label="First Name"
                          name="first_name"
                        />
                        <UikInput
                          defaultValue="Harvey"
                          label="Last Name"
                          name="last_name"
                        />
                      </UikFormInputGroup>
                      <UikFormInputGroup horizontal>
                        <UikInput
                          defaultValue="ethel.harvey@janlosert.com"
                          label="Email Address"
                          name="email"
                        />
                        <UikInput
                          label="Phone Number"
                          name="phone"
                          placeholder="+1-000-000-0000"
                        />
                      </UikFormInputGroup>
                      <UikFormInputGroup horizontal>
                        <UikSelect
                          defaultValue={ ['czech'] }
                          label="Country"
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
                                  Czech Republic
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
                                  Tuvalu
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
                                  Norway
                                </span>
                              ),
                            },
                          ] }
                          placeholder="Action"
                          position="bottomRight"
                        />
                        <UikSelect
                          defaultValue={ ['Prague'] }
                          label="City"
                          options={ [
                            {
                              value: 'Prague',
                              label: 'Prague',
                            },
                            {
                              value: 'Brno',
                              label: 'Brno',
                            },
                            {
                              value: 'Ostrava',
                              label: 'Ostrava',
                            },
                          ] }
                          placeholder="Action"
                          position="bottomRight"
                        />
                      </UikFormInputGroup>
                    </UikFormInputGroup>
                  </UikWidgetContent>
                  <UikWidgetContent>
                    <UikButton success>Save Settings</UikButton>
                  </UikWidgetContent>
                </form>
              </UikWidget>
              <UikWidget>
                <UikWidgetContent>
                  <h3>Notifications</h3>
                  <p>Receive notifications, requests to write a review, pricing notices, and other reminders related to your activities on Building platform.</p>
                </UikWidgetContent>
                <form onSubmit={ () => {} }>
                  <UikDivider />
                  <UikWidgetContent>
                    <UikFormInputGroup horizontal>
                      <UikFormInputGroup>
                        <h4>Promotions</h4>
                        <UikCheckbox
                          defaultChecked
                          label="Email"
                          name="[promotions]email"
                        />
                        <UikCheckbox
                          description="For your mobile or tablet device"
                          label="Push Notifications"
                          name="[promotions]push"
                        />
                        <UikCheckbox
                          label="Text Messages"
                          name="[promotions]text"
                        />
                        <UikCheckbox
                          label="Phone Calls"
                          name="[promotions]phone"
                        />
                      </UikFormInputGroup>
                      <UikFormInputGroup>
                        <h4>Messages</h4>
                        <UikCheckbox
                          label="Email"
                          name="[messages]email"
                        />
                        <UikCheckbox
                          defaultChecked
                          description="For your mobile or tablet device"
                          label="Push Notifications"
                          name="[messages]push"
                        />
                        <UikCheckbox
                          label="Text Messages"
                          name="[messages]text"
                        />
                      </UikFormInputGroup>
                    </UikFormInputGroup>
                  </UikWidgetContent>
                  <UikWidgetContent>
                    <UikButton transparent>Save Settings</UikButton>
                  </UikWidgetContent>
                </form>
              </UikWidget>
            </UikWidgetContainer>
          </div>
        </UikLayoutMain>
      </UikContainerVertical>
    )
  }
}

export default BuildingsDashboard
