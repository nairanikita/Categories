/* eslint-disable max-len */
import * as React from 'react'
import classnames from 'classnames'
import { withRouter } from 'react-router-dom'

import listOfBuildings from '../../../../../assets/listOfBuildings'

import * as images from '@exampleAssets'

import {
  UikContentTitle,
  Uikon,
  UikButton,
  UikInput,
  UikStarRating,
  UikAvatar,
  UikLayoutMain,
  UikContentItem,
} from '@components'


import cls from './buildings-detail.scss'


const properties = [
  {
    icon: 'building',
    prop: 'Property Type',
    val: 'Open Space',
  },
  {
    icon: 'ruler',
    prop: 'Office Size',
    val: '1400 m2',
  },
  {
    icon: 'profile_round',
    prop: 'Suitable for',
    val: '15 - 25 people',
  },
  {
    icon: 'tap_click_force_touch',
    prop: 'Meeting rooms',
    val: '2',
  },
]

const rating = [
  {
    prop: 'Accuracy',
    val: 5,
  },
  {
    prop: 'Location',
    val: 4,
  },
  {
    prop: 'Activity',
    val: 4,
  },
  {
    prop: 'Noise',
    val: 3,
  },
  {
    prop: 'Cleanliness',
    val: 4,
  },
  {
    prop: 'Value',
    val: 5,
  },
]

// @flow
type BuildingsListingMapProps = {
  className?: String,
  match: Object,
}
const BuildingsListingMap = ({
  className,
  match,
}: BuildingsListingMapProps) => {
  const pid = Number(match.params.property_id)
  const data = listOfBuildings.find(b => b.id === pid)

  return (
    <UikLayoutMain
      outerProps={ {
        className: classnames(cls.wrapper, className),
      } }
    >
      <UikContentItem>
        <div
          className={ cls.buildingsImage }
          style={ {
            backgroundImage: `url(${data.imgUrl}`,
          } }
        />
      </UikContentItem>
      <div className={ cls.detailWrapper }>
        <div className={ cls.detailMain }>
          <UikContentItem>
            <UikContentTitle>Luxury Offices</UikContentTitle>
            <h1 className={ cls.name }>{data.name}</h1>
            <p>164 S. Carson Court Newport News, VA 23601</p>
            <p className={ cls.description }>Each unit will be constructed to a high standard and will benefit from minimum 10m eaves, a mix of dock and level loading doors and integral office accommodation, as well as generous loading yards.</p>
            <p className={ cls.description }>The site is situated on Coldharbour Lane which is located to the south of the A13 dual carriageway in turn providing swift access proving to Junction 31 of motorway M25.</p>
          </UikContentItem>
          <UikContentItem>
            <div className={ cls.searchReviewsWrapper }>
              <span className={ cls.searchTotal }>165 Ratings</span>
              {' '}
              <UikInput
                icon={ <Uikon>search_left</Uikon> }
                iconPosition="right"
                placeholder="Search Ratings"
              />
            </div>
            <div className={ cls.ratingTable }>
              {
                rating.map(r => (
                  <div
                    key={ r.prop }
                    className={ cls.ratingItem }
                  >
                    <span className={ cls.ratingProperty }>{r.prop}</span>
                    <UikStarRating rating={ r.val } />
                  </div>
                ))
              }
            </div>
            <div className={ cls.userRatingContainer }>
              <div className={ cls.userRatingWrapper }>
                <div className={ cls.userRatingHeader }>
                  <UikAvatar
                    highlighted
                    imgUrl={ images.a21 }
                    name="Natasha Special"
                    textBottom="17th October 2018"
                  />
                  <UikStarRating rating={ 4 } />
                </div>
                <p>
                You are empowered to make decisions and choose your own goals/tasks. Every day you meet so many amazing entrepreneurs as well as continuously build these relationships. Inspiring and fun meetings, all-hands &amp; trips (Summer Camp &amp; Summit). Support system! Everyone cares for your well-being and become family.
                </p>
              </div>
            </div>
          </UikContentItem>
        </div>
        <div className={ cls.detailMisc }>
          <UikContentItem>
            <UikContentTitle>Property Features</UikContentTitle>
            <table className={ cls.propertyTable }>
              <tbody>
                {
                properties.map(item => (
                  <tr key={ item.prop }>
                    <td>
                      <Uikon>{item.icon}</Uikon>
                    </td>
                    <td>
                      {item.prop}
                    </td>
                    <td>
                      {item.val}
                    </td>
                  </tr>
                ))
              }

              </tbody>
            </table>
            <UikButton
              icon={ <Uikon>building_plan</Uikon> }
              isExpanded
              transparent
            >
              View a Floor Plan
            </UikButton>

          </UikContentItem>
          <UikContentItem className={ cls.sectionPhotos }>
            <UikContentTitle>All Property Photos</UikContentTitle>
            <div className={ cls.gallery }>

              {
              [
                images.b20,
                images.b21,
                images.b22,
                images.b23,
                images.b24,
                images.b25,
              ].map(img => (
                <div
                  key={ img }
                  className={ cls.galleryImage }
                  style={ {
                    backgroundImage: `url(${img})`,
                  } }
                />
              ))
            }
            </div>
          </UikContentItem>
        </div>
      </div>
    </UikLayoutMain>
  )
}

BuildingsListingMap.defaultProps = {
  className: null,
}

export default withRouter(BuildingsListingMap)
