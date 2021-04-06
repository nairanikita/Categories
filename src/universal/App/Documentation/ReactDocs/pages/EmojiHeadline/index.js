/* eslint-disable max-len */
import * as React from 'react'


import {
  UikWidgetContent,
  UikWidgetDoc,
  UikEmojiHeadline,
  UikLayoutMain,
} from '@components'


import PropertyTable from '../../components/PropertyTable'
import ExampleTable from '../../components/ExampleTable'
import properties from '../../shared/properties'

const itemProps = [
  properties.className(),
  properties.node({
    prop: 'emoji',
    desc: 'Unicode emoji. Or any other react node, such as icon etc..',
  }),
  properties.node({
    prop: 'title',
    desc: 'title',
  }),
  properties.node({
    prop: 'description',
    desc: 'description',
  }),
  properties.rest(),
]

const examples = [
  {
    rendered: (
      <UikEmojiHeadline
        description="Some description"
        emoji="🏃🏻"
        title="Animations Tutorials"
      />
    ),
    code: `<UikEmojiHeadline
  description="Some description"
  emoji="🏃🏻"
  title="Animations Tutorials"
/>`,
  },
]


const DocsEmojiHeadline = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikEmojiHeadline
        </h1>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikEmojiHeadline Examples
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsEmojiHeadline
