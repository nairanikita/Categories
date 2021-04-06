/* eslint-disable max-len */
import * as React from 'react'
import * as images from '@exampleAssets'

import {
  UikWidgetContent,
  UikWidgetDoc,
  UikSelect,
  UikButton,
  UikLayoutMain,
} from '@components'


import PropertyTable from '../../components/PropertyTable'
import ExampleTable from '../../components/ExampleTable'
import properties from '../../shared/properties'


const itemProps = [
  properties.className(),
  properties.node({
    prop: 'placeholder',
    desc: 'Placeholder',
  }),
  properties.node({
    prop: 'label',
    desc: 'Label',
  }),
  {
    prop: 'name',
    defaultValue: 'null',
    propType: 'String',
    desc: 'If name is set, the component will also render hidden input(s)',
  },
  {
    prop: 'multi',
    defaultValue: 'false',
    propType: 'Boolean',
    desc: 'Allows multi select',
  },
  {
    prop: 'options',
    defaultValue: '[]',
    propType: 'Array<{value, label}>',
    desc: 'Array of objects with property value and label (display text)',
  },
  {
    prop: 'value',
    defaultValue: '[]',
    propType: 'Array<{value, label}>',
    desc: 'Array of objects with property value and label (display text). Use this if you want to control selected values from outside. Use this with onChange property',
  },
  {
    prop: 'defaultValue',
    defaultValue: '[]',
    propType: 'Array<value>',
    desc: 'Array of values. These are preselected items on render',
  },
  {
    prop: 'excluded',
    defaultValue: '[]',
    propType: 'Array<value>',
    desc: 'Array of values. These values are excluded from selection',
  },
  {
    prop: 'onChange',
    defaultValue: 'null',
    propType: 'Function',
    desc: 'Triggeres on change of the selection. First param is next selected items - Array<{value, label}',
  },
  {
    prop: 'position',
    defaultValue: 'bottomLeft',
    propType: 'one of \'topLeft\' | \'topRight\' | \'bottomLeft\' | \'bottomRight\'',
    desc: 'Position of the expanded options relative to the display button.',
  },
  {
    prop: 'disabled',
    defaultValue: 'false',
    propType: 'Boolean',
    desc: 'Disables the select',
  },
  properties.rest(),
]

const CustomDisplayComponent = ({ onClick }) => ( // eslint-disable-line
  <UikButton
    onClick={ onClick }
    primary
  >
    CustomDisplayComponent
  </UikButton>
)

const examples = [
  {
    rendered: (
      <UikSelect
        excluded={ [3] }
        options={ [
          {
            value: 1,
            label: 'Delete',
          },
          {
            value: 2,
            label: 'Something',
          },
          {
            value: 3,
            label: 'Here',
          },
        ] }
        placeholder="Action"
      />
    ),
    code: `<UikSelect
  excluded={ [3] }
  placeholder="Action"
  options={ [
    {
      value: 1,
      label: 'Delete',
    },
    {
      value: 2,
      label: 'Something',
    },
    {
      value: 3,
      label: 'Here',
    },
  ] }
/>`,
  },
  {
    rendered: (
      <UikSelect
        defaultValue={ [
          1,
          2,
        ] }
        excluded={ [3] }
        multi
        options={ [
          {
            value: 1,
            label: 'Delete',
          },
          {
            value: 2,
            label: 'Something',
          },
          {
            value: 3,
            label: 'Here',
          },
        ] }
        placeholder="Action"
      />
    ),
    code: `<UikSelect
  defaultValue={ [
    1,
    2,
  ] }
  excluded={ [3] }
  placeholder="Action"
  multi
  options={ [
    {
      value: 1,
      label: 'Delete',
    },
    {
      value: 2,
      label: 'Something',
    },
    {
      value: 3,
      label: 'Here',
    },
  ] }
/>`,
  },
  {
    rendered: (
      <UikSelect
        defaultValue={ [
          1,
        ] }
        label="Country"
        multi
        options={ [
          {
            value: 1,
            label: (
              <span>
                <img
                  alt="english"
                  src={ images.flag01 }
                  style={ {
                    marginRight: '10px',
                  } }
                />
                ENG
              </span>
            ),
          },
          {
            value: 2,
            label: 'Something',
          },
          {
            value: 3,
            label: 'Here',
          },
        ] }
        placeholder="Select Country"
      />
    ),
    code: `<UikSelect
  defaultValue={ [
    1,
    2,
  ] }
  placeholder="Select Country"
  multi
  label="Country"
  options={ [
    {
      value: 1,
      label: (
        <span>
          <img
            alt="english"
            src={ images.flag01 }
            style={ {
              marginRight: '10px',
            } }
          />
          ENG
        </span>
      ),
    },
    {
      value: 2,
      label: 'Something',
    },
    {
      value: 3,
      label: 'Here',
    },
  ] }
/>`,
  },
]


const DocsSelect = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikSelect
        </h1>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikSelect Examples
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsSelect
