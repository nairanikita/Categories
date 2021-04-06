/* eslint-disable max-len */
import * as React from 'react'

import {
  UikWidgetContent,
  UikWidgetDoc,
  UikWidget,
  UikWidgetBottomCta,
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
    defaultValue: 'a',
  }),
  properties.rest(),
]


const DocsWidgetBottomCta = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikWidgetBottomCta
        </h1>
        <p>
          {'Call to Action button styled to be positioned on the bottom of a Widget.'}
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
            UikWidgetBottomCta Examples
        </h2>
      </UikWidgetContent>
      <UikWidgetContent grey>
        <UikWidget>
          <UikWidgetContent>
            <h2>
            This is a widget
            </h2>
          </UikWidgetContent>
          <UikWidgetBottomCta>
            Click me
          </UikWidgetBottomCta>
        </UikWidget>
      </UikWidgetContent>
      <UikWidgetContent>
        <UikCodeHighlight
          code={ `<UikWidget>
  <UikWidgetContent>
    <h2>
    This is a widget
    </h2>
  </UikWidgetContent>
  <UikWidgetBottomCta>
    Click me
  </UikWidgetBottomCta>
</UikWidget>` }
          language="jsx"
        />
      </UikWidgetContent>
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsWidgetBottomCta
