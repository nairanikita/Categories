import * as React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import cls from './buildings-grid-item.scss'

// @flow
type BuildingsListingGridItemProps = {
  imgUrl?: String,
  text?: React.Node,
  title?: React.Node,
  status?: React.Node,
  price?: React.Node,
  Component?: React.ElementType,
  id: Number,
}

const BuildingsListingGridItem = ({
  imgUrl,
  title,
  text,
  status,
  price,
  Component,
  id,
}: BuildingsListingGridItemProps) => (
  <Component
    className={ cls.wrapper }
    to={ `/buildings/listing/${id}` }
  >
    {/* Img */}
    {
      imgUrl ? (
        <div className={ cls.imageWrapper }>
          <div
            className={ cls.imageWrapperInner }
            style={ {
              backgroundImage: `url("${imgUrl}")`,
            } }
          />
        </div>
      ) : null
    }

    {/* Headline */}
    {
      title ? (
        <h2 className={ cls.title }>
          {title}
        </h2>
      ) : title
    }

    {/* Text */}
    {
      text ? (
        <div className={ cls.text }>
          {text}
        </div>
      ) : null
    }
    {
      status || price ? (
        <div className={ cls.footer }>
          {
            status ? (
              <div className={ cls.status }>
                {status}
              </div>
            ) : null
          }

          {
            price ? (
              <div className={ cls.price }>
                {price}
              </div>
            ) : null
          }
        </div>
      ) : null
    }
  </Component>
)

BuildingsListingGridItem.defaultProps = {
  imgUrl: null,
  title: null,
  text: null,
  status: null,
  price: null,
  Component: NavLink,
}

export default withRouter(BuildingsListingGridItem)
