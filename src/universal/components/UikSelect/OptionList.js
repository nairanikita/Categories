/* eslint-disable max-len */
import * as React from 'react'
import classnames from 'classnames'

import Button from '../UikButton'
// cls
import cls from './select.scss'

// @flow
import type { UikSelectOptionValueType, UikSelectOptionType } from './flowTypes'

type OptionListProps = {
  selected: Array<UikSelectOptionType>,
  options: Array<UikSelectOptionType>,
  excluded?: Array<UikSelectOptionValueType>,
  optionClick: Function,
  position?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight',
  optionProps?: Object
}

class OptionList extends React.Component<OptionListProps> {
  static defaultProps = {
    excluded: [],
    position: 'bottomLeft',
    optionProps: {},
  }

  renderOptionWrapper = ({ label }) => (
    <div className={ cls.label }>
      {label}
    </div>
  )

  renderOptions() {
    const {
      options, optionClick, selected, excluded,
      optionProps: {
        className: optionClassName,
        ...optionPropsRest
      },
    } = this.props

    const filteredOptions = options.filter((option) => {
      if (excluded.indexOf(option.value) > -1) {
        return false
      }
      return true
    })

    return filteredOptions.map((i) => {
      const indexIsSelected = selected.find(k => i.value === k.value)
      const onClick = key => () => {
        optionClick(key)
      }
      return (
        <Button
          key={ i.value }
          className={ classnames(cls.option, optionClassName) }
          onClick={ onClick(i) }
          type="button"
          { ...optionPropsRest }
        >
          <div className={ cls.optionContent }>
            {this.renderOptionWrapper(i)}
            {indexIsSelected ? (
              <div className={ cls.check } />
            ) : null}
          </div>
        </Button>
      )
    })
  }

  render() {
    const { position } = this.props
    return (
      <div className={ classnames(cls.optionListWrapper, {
        [cls[position]]: position,
      }) }
      >
        <div className={ cls.optionList }>
          {this.renderOptions()}
        </div>
      </div>
    )
  }
}

export default OptionList
