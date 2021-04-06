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
    prop: 'grey',
    propType: 'Boolean',
    defaultValue: 'false',
    desc: 'Set\'s the background to match the light grey app background',
  },
  properties.rest(),
]


const DocsWidgetContent = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikWidgetContent
        </h1>
        <p>
          {'UikWidgetContent is a basic element intended to be used inside a UikWidget. It adds 30px padding and if it\'s not a last child in the dom tree, at also adds 1px border between self and a next sibling element'}
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikWidget Example
        </h2>
      </UikWidgetContent>
      <UikWidgetContent grey>
        <UikWidget>
          <UikWidgetContent>
            <h2>
              This is a widget
            </h2>
            <p>
              This is a paragraph
            </p>
          </UikWidgetContent>
          <UikWidgetContent>
            <h2>
              Different Headline
            </h2>
            <p>
              This is a paragraph
            </p>
          </UikWidgetContent>
        </UikWidget>
      </UikWidgetContent>
      <UikCodeHighlight
        code={ `<UikWidget>
  <UikWidgetContent>
    <h2>
      This is a widget
    </h2>
    <p>
      This is a paragraph
    </p>
  </UikWidgetContent>
  <UikWidgetContent>
    <h2>
      Different Headline
    </h2>
    <p>
      This is a paragraph
    </p>
  </UikWidgetContent>
</UikWidget>` }
        language="jsx"
      />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsWidgetContent
