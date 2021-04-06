import createSimpleComponent from '../createSimpleComponent'

import cls from './content-title.scss'

export default createSimpleComponent({
  displayName: 'ContentTitle',
  className: cls.wrapper,
  Component: 'span',
})
