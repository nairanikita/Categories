import * as React from 'react'
import * as images from '@exampleAssets'


/* eslint-disable max-len */


import data from '../../../assets/listOfBuildings'

import ListingGridView from '../../components/ListingGridView'

import {
  Uikon, UikButton,
  UikContainerVertical,
  UikLayoutMain,
  UikContentItem,
} from '@components'


import TopBar from './components/TopBar'

import cls from './buildings-dashboard.scss'

const categories = [
  {
    name: 'New York',
    imgUrl: images.b104,
  },
  {
    name: 'London',
    imgUrl: images.b102,
  },
  {
    name: 'Bali',
    imgUrl: images.b103,
  },
  {
    name: 'Paris',
    imgUrl: images.b101,
  },
]

// @flow
class BuildingsDashboard extends React.Component<{
}> {
  render() {
    return (
      <UikContainerVertical className={ cls.page }>
        <TopBar />
        <UikLayoutMain className={ cls.wrapper }>
          <UikContentItem style={ { marginTop: '0.5rem' } }>

            <h2>Browse by the City</h2>
            <div className={ cls.categoriesWrapper }>
              {
                categories.map(cat => (
                  <div
                    key={ cat.name }
                    className={ cls.category }
                  >
                    <div
                      className={ cls.catImage }
                      style={ {
                        backgroundImage: `url(${cat.imgUrl})`,
                      } }
                    />
                    <span className={ cls.catName }>{cat.name}</span>
                  </div>
                ))
              }
            </div>
          </UikContentItem>
          <UikContentItem>
            <h2>Upgrade to Buldings Plus</h2>
            <div
              className={ cls.upgradeBanner }
              style={ {
                backgroundImage: `url(${images.b105})`,
              } }
            >
              <span className={ cls.upgradeName }>
                <Uikon>building</Uikon>
                <span>Buildings</span>
                <span className={ cls.pro }>Pro</span>
              </span>
              <h2 className={ cls.bannerTitle }>A new selection of Buildings verified for quality &amp; comfort.</h2>
              <UikButton>Explore Buildings Pro</UikButton>
            </div>
          </UikContentItem>
          <UikContentItem>
            <h2>Recommended Buildings</h2>
          </UikContentItem>
          <ListingGridView
            className={ cls.gridView }
            data={ data }
          />
        </UikLayoutMain>
      </UikContainerVertical>
    )
  }
}

export default BuildingsDashboard
