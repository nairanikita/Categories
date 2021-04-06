/* eslint-disable max-len */
import * as React from 'react'

import {
  UikWidgetContent,
  UikWidgetDoc,
  UikWidget,
  UikLayoutMain,
} from '@components'

import {
  UikCodeHighlight,
} from '@componentWrappers'


import PropertyTable from '../../components/PropertyTable'
import properties from '../../shared/properties'

const itemProps = [
  properties.className(),
  properties.children(),
  properties.Component({
    defaultValue: 'div',
  }),
  {
    prop: 'padding',
    propType: 'Boolean',
    defaultValue: 'false',
    desc: 'Adds internal 30px padding',
  },
  {
    prop: 'margin',
    propType: 'Boolean',
    defaultValue: 'false',
    desc: 'Adds outer 15px margin',
  },
  properties.rest(),
]


const DocsWidget = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikWidget
        </h1>
        <p>
          {'Widget is a basic element for building your app. It\'s a container with border and white background.'}
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikWidget Examples
        </h2>
      </UikWidgetContent>
      <UikWidgetContent grey>
        <UikWidget padding>
          <h2>
            This is a widget
          </h2>
        </UikWidget>
      </UikWidgetContent>
      <UikWidgetContent>
        <UikCodeHighlight
          code={ `<UikWidget padding>
  <h2>
    This is a widget
  </h2>
</UikWidget>` }
          language="jsx"
        />
      </UikWidgetContent>
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsWidget
