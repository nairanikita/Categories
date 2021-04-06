import * as React from 'react'
import { NavLink } from 'react-router-dom'


/* eslint-disable max-len */


import {
  UikInput,
  UikContainerVertical,
  UikScrollArea,
  UikTopBar,
  Uikon,
  UikAvatar,
  UikStatusDot,
} from '@components'

import cls from '../buildings-users.scss'

import users from '../assets/users'
// @flow

class BuildingsDashboard extends React.Component<{
}> {
  render() {
    return (
      <UikContainerVertical className={ cls.list }>
        <UikTopBar className={ cls.listTopBar }>
          <UikInput
            clear
            icon={ (
              <Uikon>search_left</Uikon>
                ) }
            iconPosition="right"
            placeholder="Search users"
          />
        </UikTopBar>
        <UikScrollArea>
          {
                users.map(group => (
                  <React.Fragment key={ group.letter }>
                    <div className={ cls.letter }>{group.letter}</div>
                    {
                      group.users.map(user => (
                        <NavLink
                          key={ user.name }
                          className={ cls.userItem }
                          to={ `/buildings/users/${user.id}` }
                        >

                          <UikAvatar
                            highlighted
                            imgUrl={ user.imgUrl }
                            name={ user.online ? (
                              <React.Fragment>
                                {`${user.name} `}
                                <UikStatusDot className={ cls.statusDot } />
                              </React.Fragment>) : user.name
                            }
                            textBottom={ user.textBottom }
                          />
                        </NavLink>
                      ))
                    }
                  </React.Fragment>
                ))
              }
        </UikScrollArea>
      </UikContainerVertical>
    )
  }
}

export default BuildingsDashboard
