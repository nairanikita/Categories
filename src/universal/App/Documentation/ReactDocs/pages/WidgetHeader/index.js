/* eslint-disable max-len */
import * as React from 'react'

import {
  UikWidgetContent,
  UikWidgetDoc,
  UikWidget,
  UikWidgetHeader,
  UikButton,
  UikLayoutMain,
} from '@components'

import {
  UikCodeHighlight,
} from '@componentWrappers'


import PropertyTable from '../../components/PropertyTable'
import properties from '../../shared/properties'

const itemProps = [
  properties.className(),
  properties.children({
    desc: 'What is going to be rendered as title',
  }),
  properties.node({
    prop: 'rightEl',
  }),
  properties.Component({
    defaultValue: 'div',
  }),
  {
    prop: 'noDivider',
    propType: 'Boolean',
    required: false,
    desc: 'Hides bottom border if true',
  },
  properties.rest(),
]


const DocsWidget = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikWidgetHeader
        </h1>
        <p>
          {'Styled header for a widget - title and whatever you want on the right side, usually some action buttons'}
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
            UikWidgetHeader Examples
        </h2>
      </UikWidgetContent>
      <UikWidgetContent grey>
        <UikWidget>
          <UikWidgetHeader
            rightEl={ (
              <UikButton primary>
              CTA Here
              </UikButton>
            ) }
          >
            Click me
          </UikWidgetHeader>
          <UikWidgetContent>
            Some Content Here
          </UikWidgetContent>
        </UikWidget>
      </UikWidgetContent>
      <UikWidgetContent>
        <UikCodeHighlight
          code={ `<UikWidget>
  <UikWidgetHeader
    rightEl={ (
      <UikButton primary>
      CTA Here
      </UikButton>
    ) }
  >
    Click me
  </UikWidgetHeader>
  <UikWidgetContent>
    Some Content Here
  </UikWidgetContent>
</UikWidget>` }
          language="jsx"
        />
      </UikWidgetContent>
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsWidget
