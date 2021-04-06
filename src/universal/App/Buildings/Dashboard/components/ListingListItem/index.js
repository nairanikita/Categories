import * as React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import cls from './buildings-list-item.scss'

// @flow
type BuildingsListItemProps = {
  imgUrl?: String,
  text?: React.Node,
  title?: React.Node,
  status?: React.Node,
  price?: React.Node,
  Component?: React.ElementType,
  match: Object,
  id: Number,
}

const BuildingsListItem = ({
  imgUrl,
  title,
  text,
  status,
  price,
  Component,
  match,
  id,
}: BuildingsListItemProps) => (
  <Component
    className={ cls.wrapper }
    to={ `${match.path}/${id}` }
  >
    {/* Img */}
    {
      imgUrl ? (
        <div
          className={ cls.imageWrapper }
          style={ {
            backgroundImage: `url("${imgUrl}")`,
          } }
        />
      ) : null
    }
    <div className={ cls.content }>
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
    </div>
  </Component>
)

BuildingsListItem.defaultProps = {
  imgUrl: null,
  title: null,
  text: null,
  status: null,
  price: null,
  Component: NavLink,
}

export default withRouter(BuildingsListItem)
