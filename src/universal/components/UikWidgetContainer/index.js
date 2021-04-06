import createSimpleComponent from '../createSimpleComponent'

import cls from './widget.scss'

export default createSimpleComponent({
  displayName: 'UikWidgetContainer',
  className: cls.container,
  Component: 'div',
})
