import * as React from 'react'

import {
  UikContainerVertical,
  UikScrollArea,
  UikWidget,
  UikWidgetHeader,
  UikButton,
  Uikon,
  UikDropdown,
  UikDropdownItem,
  UikAvatar,
  UikTopBar,
  UikTopBarSection,
  UikTopBarTitle,
  UikButtonGroup,
} from '@components'


import Calendar from './components/Calendar'

import cls from './social-events.scss'


const SocialProfile = () => (
  <UikContainerVertical>
    <UikTopBar>
      <UikTopBarSection>
        <UikTopBarTitle>

          <UikAvatar
            avatarPlaceholder={ {
              content: (
                <span
                  role="img"
                  style={ { fontSize: '.785rem' } }
                >
                  {'✈️'}
                </span>
              ),
            } }
            className={ cls.titleIcon }
            style={ {
              marginRight: '15px',
            } }
          />
          Cheap Holidays
        </UikTopBarTitle>
      </UikTopBarSection>
      <UikTopBarSection>

        <div>
          <UikDropdown
            className={ cls.dropdownFilter }
            DisplayComponent={
                props => (
                  <UikButton
                    { ...props }
                    icon={ <Uikon>dropdown_arrow</Uikon> }
                    iconRight
                    transparent
                  >
                    Joined
                  </UikButton>
                )
              }
            position="bottomRight"
          >
            <UikDropdownItem>Something here</UikDropdownItem>
          </UikDropdown>
          <UikDropdown
            DisplayComponent={
              props => (
                <UikButton
                  { ...props }
                  icon={ <Uikon>dropdown_arrow</Uikon> }
                  iconRight
                  style={ {
                    marginLeft: '10px',
                  } }
                  transparent
                >
                  <Uikon style={ { marginRight: '10px' } }>send_round</Uikon>
                  <span
                    className={ cls.dropdownShareText }
                  >
                    Share
                  </span>
                </UikButton>
              )
            }
            position="bottomRight"
          >
            <UikDropdownItem>Send as message</UikDropdownItem>
            <UikDropdownItem>Share on sharestagram</UikDropdownItem>
          </UikDropdown>
        </div>
      </UikTopBarSection>
    </UikTopBar>
    <UikScrollArea className={ cls.mainContent }>
      <UikWidget className={ cls.widgetCalendar }>
        <UikWidgetHeader rightEl={ (
          <div>
            <UikButtonGroup>
              <UikButton
                icon={ <Uikon className={ cls.btnArrow }>arrow_left</Uikon> }
                iconOnly
                transparent
              />
              <UikButton
                icon={ <Uikon>dropdown_arrow</Uikon> }
                iconRight
                transparent
              >
                June 2018
              </UikButton>
              <UikButton
                icon={ <Uikon className={ cls.btnArrow }>arrow_right</Uikon> }
                iconOnly
                transparent
              />
            </UikButtonGroup>
            <UikButton
              className={ cls.addLg }
              primary
              style={ {
                marginLeft: '10px',
              } }
            >
              Create Event
            </UikButton>
            <UikButton
              className={ cls.addSm }
              icon={ <Uikon>add</Uikon> }
              iconOnly
              primary
              style={ {
                marginLeft: '10px',
              } }
            />
          </div>
          ) }
        >
          <span className={ cls.calendarTitle }>Calendar</span>
        </UikWidgetHeader>
        <Calendar />
      </UikWidget>
    </UikScrollArea>


  </UikContainerVertical>
)

export default SocialProfile
