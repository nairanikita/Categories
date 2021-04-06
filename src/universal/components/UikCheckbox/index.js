import * as React from 'react'
import classnames from 'classnames'
import cls from './checkbox.scss'
import Check from './check'


// @flow
type UikCheckboxProps = {
  className?: ?String,
  label?: React.Node,
  description?: React.Node,
  toggle?: Boolean,
  radio?: Boolean,
  color?: 'green' | 'blue' | 'orange' | 'violet' | 'red',
}

const UikCheckbox = ({
  label,
  className,
  description,
  toggle,
  radio,
  name,
  color,
  ...rest
}: UikCheckboxProps) => (
  /* eslint-disable */
  <label
    className={ classnames(cls.wrapper, className, {
      [cls.toggle]: toggle,
      [cls.radio]: radio,
    }) }
  >
  {/* eslint-enable */}
    <input
      className={ cls.checkbox }
      name={ name }
      type="checkbox"
      { ...rest }
    />
    <div className={ classnames(cls.label, {
      [color]: color,
    }) }
    >
      {
        !toggle && !radio && (
          <Check />
        )
      }
      {label}
    </div>
    {
      description && (
        <p className={ cls.description }>
          {description}
        </p>
      )
    }
  </label>
)

UikCheckbox.defaultProps = {
  label: null,
  className: null,
  description: null,
  toggle: false,
  radio: false,
  color: 'green',
}

export default UikCheckbox
