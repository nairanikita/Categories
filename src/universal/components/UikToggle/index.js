import * as React from 'react'

import UikCheckbox from '../UikCheckbox'

const UikToggle = ({
  ...rest
}) => (
  <UikCheckbox
    { ...rest }
    toggle
  />
)

export default UikToggle
