/* eslint-disable max-len */
import * as React from 'react'


import {
  UikWidgetContent,
  UikWidgetDoc,
  UikWidget,
  UikHeadline,
  UikHeadlineDesc,
  UikLayoutMain,
} from '@components'

import PropertyTable from '../../components/PropertyTable'
import ExampleTable from '../../components/ExampleTable'
import properties from '../../shared/properties'

const itemProps = [
  properties.className(),
  properties.children(),
  properties.Component({
    defaultValue: 'h2',
  }),
]

const examples = [
  {
    rendered: (
      <UikWidget padding>
        <UikHeadline>
          Some Headline
        </UikHeadline>
        <UikHeadlineDesc>
          Some description after headline
        </UikHeadlineDesc>
      </UikWidget>
    ),
    code: `<UikWidget padding>
  <UikHeadline>
    Some Headline
  </UikHeadline>
  <UikHeadlineDesc>
    Some description after headline
  </UikHeadlineDesc>
</UikWidget>`,
  },
]


const DocsHeadline = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikHeadline
        </h1>
        <p>
          Just a styled headline
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikHeadline Example
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsHeadline
