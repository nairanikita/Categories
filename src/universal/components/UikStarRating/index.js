import * as React from 'react'
import classnames from 'classnames'

import Uikon from '../Uikon'

import cls from './star-rating.scss'

const rates = [
  1,
  2,
  3,
  4,
  5,
]
// @flow
type UikStarRatingType = {
  rating?: 0 | 1 | 2 | 3 | 4 | 5,
  className?: String
}

const UikStarRating = ({
  rating = 5,
  className,
  ...rest
}: UikStarRatingType) => (
  <div
    className={ classnames(cls.wrapper, className) }
    { ...rest }
  >
    {
      rates.map(r => (r <= rating ? (
        <Uikon
          key={ r }
          className={ cls.fill }
        >
          star_fill
        </Uikon>
      ) : (
        <Uikon key={ r }>
          star
        </Uikon>
      )))
    }
  </div>
)


UikStarRating.defaultProps = {
  className: null,
  rating: 5,
}

export default UikStarRating
