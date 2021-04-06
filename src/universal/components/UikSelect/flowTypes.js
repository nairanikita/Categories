import * as React from 'react'
// @flow
export type UikSelectOptionValueType = String | Number

export type UikSelectOptionType = {
  label?: React.Node,
  value: UikSelectOptionValueType
}
