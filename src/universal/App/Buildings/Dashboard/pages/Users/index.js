import * as React from 'react'
import classnames from 'classnames'


/* eslint-disable max-len */


import {
  UikContainerVertical,
  UikContainerHorizontal,
} from '@components'

import TopBar from './components/TopBar'
import UserList from './components/UserList'
import UserDetail from './components/UserDetail'

import cls from './buildings-users.scss'
// @flow

class BuildingsDashboard extends React.Component<{
  match: Object,
}> {
  render() {
    const { match: { params: { user_id } } } = this.props
    const isUser = !!user_id

    return (
      <UikContainerVertical className={ cls.page }>
        <TopBar />
        <UikContainerHorizontal className={ classnames(cls.container, {
          [cls.containerActiveUser]: isUser,
        }) }
        >
          <UserList />
          <UserDetail />
        </UikContainerHorizontal>
      </UikContainerVertical>
    )
  }
}

export default BuildingsDashboard
