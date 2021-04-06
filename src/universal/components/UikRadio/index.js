import * as React from 'react'

import UikCheckbox from '../UikCheckbox'

const UikToggle = ({
  ...rest
}) => (
  <UikCheckbox
    { ...rest }
    radio
    type="radio"
  />
)

export default UikToggle
