/* eslint-disable max-len */
import * as React from 'react'


import {
  UikWidgetContent,
  UikWidgetDoc,
  UikButton,
  Uikon,
  UikLayoutMain,
} from '@components'


import PropertyTable from '../../components/PropertyTable'
import ExampleTable from '../../components/ExampleTable'
import properties from '../../shared/properties'

const itemProps = [
  properties.children(),
  properties.className(),
  properties.className({
    prop: 'contentClassName',
    desc: 'classname for content wrapper inside button',
  }),
  properties.Component({
    defaultValue: '"button"',
  }),
  {
    prop: 'type',
    propType: 'String',
    required: false,
    defaultValue: '"button"',
    desc: 'Applicable for button',
  },
  {
    prop: 'isExpanded',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'Applies width: 100% and extra styling cases when used with icons etc.',
  },
  {
    prop: 'xs',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'Renders smaller button with height 30px',
  },
  {
    prop: 'lg',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'Renders larger button with height 50px',
  },
  {
    prop: 'primary',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'Has blue color',
  },
  {
    prop: 'error',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'Has red color',
  },
  {
    prop: 'success',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'Has green color',
  },
  {
    prop: 'dark',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'Has dark color',
  },
  {
    prop: 'clear',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'White with light shadow.',
  },
  {
    prop: 'transparent',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'Button background is transparent with borders.',
  },
  {
    prop: 'isLoading',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'Will render loading state',
  },
  // icon properties
  {
    prop: 'icon',
    propType: 'React.Node',
    required: false,
    defaultValue: 'null',
    desc: 'Renders icon on left side by default',
  },
  {
    prop: 'iconRight',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'Renders icon on right side',
  },
  {
    prop: 'iconOnly',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'Renders a squared button with centered icon',
  },
  {
    prop: '...rest',
    propType: 'Object',
    required: false,
    desc: 'Other properties are passed down to the root element',
  },
]

const examples = [
  {
    rendered: (
      <UikButton>
        Example
      </UikButton>
    ),
    code: `<UikButton>
  Example
</UikButton>`,
  },
  {
    rendered: (
      <UikButton success>
        Example
      </UikButton>
    ),
    code: `<UikButton success>
  Example
</UikButton>`,
  },
  {
    rendered: (
      <UikButton primary>
        Example
      </UikButton>
    ),
    code: `<UikButton primary>
  Example
</UikButton>`,
  },
  {
    rendered: (
      <UikButton transparent>
        Example
      </UikButton>
    ),
    code: `<UikButton transparent>
  Example
</UikButton>`,
  },
  {
    rendered: (
      <UikButton error>
        Example
      </UikButton>
    ),
    code: `<UikButton error>
  Example
</UikButton>`,
  },
  {
    rendered: (
      <UikButton dark>
        Example
      </UikButton>
    ),
    code: `<UikButton dark>
  Example
</UikButton>`,
  },
  {
    rendered: (
      <UikButton clear>
        Example
      </UikButton>
    ),
    code: `<UikButton clear>
  Example
</UikButton>`,
  },
  {
    rendered: (
      <UikButton
        primary
        xs
      >
        Example
      </UikButton>
    ),
    code: `<UikButton primary xs>
  Example
</UikButton>`,
  },
  {
    rendered: (
      <UikButton
        lg
        primary
      >
        Example
      </UikButton>
    ),
    code: `<UikButton primary lg>
  Example
</UikButton>`,
  },
  {
    rendered: (
      <UikButton
        isExpanded
        lg
        primary
      >
        Example
      </UikButton>
    ),
    code: `<UikButton isExpanded primary lg>
  Example
</UikButton>`,
  },
  {
    rendered: (
      <UikButton
        isLoading
        primary
      >
        Example
      </UikButton>
    ),
    code: `<UikButton primary isLoading>
  Example
</UikButton>`,
  },
  {
    rendered: (
      <UikButton
        icon={ (
          <Uikon>
            search_left
          </Uikon>
        ) }
      >
        Search
      </UikButton>
    ),
    code: `<UikButton
  icon={ (
    <Uikon>
      search_left
    </Uikon>
  ) }
>
  Example
</UikButton>`,
  },
  {
    rendered: (
      <UikButton
        icon={ (
          <span>
            →
          </span>
        ) }
        iconRight
      >
        Example
      </UikButton>
    ),
    code: `<UikButton
  icon={ (
    <span>
      →
    </span>
  ) }
  iconRight
>
  Example
</UikButton>`,
  },
  {
    rendered: (
      <UikButton
        Component="a"
        primary
      >
        Example
      </UikButton>
    ),
    code: `// rendered as <a ...>Example</a>
// you can use your components, e.g. MyCustomComponent
// and pass it as a Component prop.
<UikButton Component="a" primary>
  Example
</UikButton>`,
  },
  {
    rendered: (
      <UikButton
        error
        icon={ <Uikon>building</Uikon> }
        iconOnly
      />
    ),
    code: `<UikButton
  error
  icon={ <Uikon>building</Uikon> }
  iconOnly
/>`,
  },
  {
    rendered: (
      <UikButton
        clear
        error
        icon={ <Uikon>building</Uikon> }
        iconOnly
      />
    ),
    code: `<UikButton
  clear
  error
  icon={ <Uikon>building</Uikon> }
  iconOnly
/>`,
  },
]


const DocsButton = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikButton
        </h1>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikButton Examples
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsButton
