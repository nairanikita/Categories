import * as React from 'react'
import { Link } from 'react-router-dom'
import * as images from '@exampleAssets'

import {
  UikButton,
  Uikon,
  UikAvatar,
  UikDropdown,
  UikDropdownItem,
} from '@components'

import cls from './social-post-header.scss'

const SocialPostHeader = () => (
  <div className={ cls.wrapper }>

    <UikAvatar
      className={ cls.avatar }
      imgUrl={ images.a06 }
      name={ (
        <span className={ cls.nameText }>
          <Link to="/social/profile">
            <strong>Roxie Mills</strong>
          </Link>
          {' '}
          <span className={ cls.text }>
            {'is feeling excited '}
            <span
              aria-label="excited"
              role="img"
            >
              😳
            </span>
            {' with '}
          </span>
          <Link to="/social/profile">Patrick Rodriguez</Link>
        </span>
      ) }
      textBottom="December 28, 2018"
    />
    <UikDropdown
      DisplayComponent={
      props => (
        <UikButton
          clear
          icon={ <Uikon>more</Uikon> }
          iconOnly
          { ...props }
        />
      )
    }
      position="bottomRight"
    >
      <UikDropdownItem>
        Edit
      </UikDropdownItem>
      <UikDropdownItem>
        Delete
      </UikDropdownItem>
    </UikDropdown>
  </div>
)

export default SocialPostHeader
