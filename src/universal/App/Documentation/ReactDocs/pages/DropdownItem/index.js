/* eslint-disable max-len */
import * as React from 'react'
import { Link } from 'react-router-dom'


import {
  UikWidgetContent,
  UikWidgetDoc,
  UikLayoutMain,
} from '@components'

const DocsDropdownItem = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikDropdownItem
        </h1>
        <p>
          {'Just a styled '}
          <Link to="/docs/react/button">
            UikButton
          </Link>
          .
        </p>
      </UikWidgetContent>
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsDropdownItem
