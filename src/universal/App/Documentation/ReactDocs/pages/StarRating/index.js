/* eslint-disable max-len */
import * as React from 'react'
import { Link } from 'react-router-dom'

import {
  UikWidgetContent,
  UikWidgetDoc,
  UikStarRating,
  UikLayoutMain,
} from '@components'


import PropertyTable from '../../components/PropertyTable'
import ExampleTable from '../../components/ExampleTable'
import properties from '../../shared/properties'

const itemProps = [
  properties.className(),
  {
    prop: 'rating',
    desc: 'rating from 0 to 5',
    propType: 'Number',
    defaultValue: 5,
  },
  properties.rest(),
]

const examples = [
  {
    rendered: (
      <UikStarRating rating={ 2 } />
    ),
    code: '<UikStarRating rating={ 2 } />',
  },
  {
    rendered: (
      <UikStarRating rating={ 5 } />
    ),
    code: '<UikStarRating rating={ 5 } />',
  },
]


const DocsNavLink = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikStarRating
        </h1>
        <p>
          Displays stars filled and outlined based on a rating prop. This component uses
          {' '}
          <Link to="/Uikon">
            Uikon
          </Link>
          {' '}
          to render values
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikStarRating Examples
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsNavLink
