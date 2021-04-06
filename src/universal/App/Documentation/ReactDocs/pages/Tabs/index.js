/* eslint-disable max-len */
import * as React from 'react'

import {
  UikWidgetContent,
  UikWidgetDoc,
  UikWidget,
  UikTabContainer,
  UikTabItem,
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
    prop: 'active',
    propType: 'Boolean',
    defaultValue: 'false',
    desc: 'Highlights the Tab Item. You can also use className="active" instead.',
  },
  {
    prop: 'extra',
    propType: 'React.Node',
    defaultValue: 'null',
    desc: 'Adds extra element on the right of the main content.',
  },
  properties.rest(),
]


const DocsWidget = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikTabContainer
        </h2>
        <p>
          {'A simple container with some styled properties. It is not required to be present when using UikTabItem.'}
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ [
        properties.className(),
        properties.children(),
        properties.Component({
          defaultValue: 'div',
        }),
        properties.rest(),
      ] }
      />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikTabItem
        </h2>
        <p>
          {'Tab components to create basic tab panel. The tabs doesn\'t have any logic. The active tab property should be controlled by developer.'}
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          Tabs Examples
        </h2>
      </UikWidgetContent>
      <UikWidgetContent grey>
        <UikWidget>
          <UikTabContainer>
            <UikTabItem
              active
              extra={ 123 }
            >
              Friends
            </UikTabItem>
            <UikTabItem extra={ 43 }>
              Photos
            </UikTabItem>
            <UikTabItem>
              Events Today
            </UikTabItem>
          </UikTabContainer>
          <UikWidgetContent>
            Something here
          </UikWidgetContent>
        </UikWidget>
      </UikWidgetContent>
      <UikWidgetContent>
        <UikCodeHighlight
          code={ `<UikWidget>
  <UikTabContainer>
    <UikTabItem
      active
      extra={ 123 }
    >
      Friends
    </UikTabItem>
    <UikTabItem extra={ 43 }>
      Photos
    </UikTabItem>
    <UikTabItem>
      Events Today
    </UikTabItem>
  </UikTabContainer>
  <UikWidgetContent>
    Something here
  </UikWidgetContent>
</UikWidget>` }
          language="jsx"
        />
      </UikWidgetContent>
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsWidget
