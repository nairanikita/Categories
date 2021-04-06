/* eslint-disable max-len */
import * as React from 'react'
import { Link } from 'react-router-dom'


import {
  UikWidgetContent,
  UikWidgetDoc,
  UikAvatar,
  UikLayoutMain,
} from '@components'

import * as images from '@exampleAssets'

import PropertyTable from '../../components/PropertyTable'
import ExampleTable from '../../components/ExampleTable'
import properties from '../../shared/properties'

const itemProps = [
  properties.className(),
  properties.Component({
    defaultValue: '"div"',
  }),
  properties.node({ prop: 'name' }),
  properties.node({ prop: 'status' }),
  {
    prop: 'imgUrl',
    propType: (
      <span>
        String&nbsp;|&nbsp;
        {'Array<String>'}
      </span>
    ),
    defaultValue: 'null',
    desc: 'Image url. You can provide up to 4 images to be displayed. See example',
  },
  {
    prop: 'avatarPlaceholder',
    propType: 'Object',
    defaultValue: 'null',
    desc: (
      <p>
        {'{ color: "red", content: "AJ" }, you can use for e.g. placeholders using initials. '}
        <Link to="/docs/react/colors">
          See more color options.
        </Link>
      </p>
    ),
  },
  {
    prop: 'highlighted',
    propType: 'Boolean',
    defaultValue: 'false',
    desc: 'Just makes the name bold',
  },
  properties.node({
    prop: 'textTop',
    desc: 'Text above the name',
  }),
  properties.node({
    prop: 'textBottom',
    desc: 'Text under the name',
  }),
  properties.node({
    prop: 'actionIcon',
    desc: 'Bottom element next to avatar, e.g. icon showing an action.',
  }),
  {
    prop: 'size',
    propType: 'String',
    defaultValue: 'null',
    desc: (
      <p>
        {'Default size is 38px.'}
        <br />
        {'"small" (28px), "large" (60px), "larger" (80px), "extraLarge" (100px), "jumbo" (120px)'}
      </p>
    ),
  },
  properties.rest({
    desc: 'Other properties are passed to the wrapping element.',
  }),
]

const examples = [
  {
    rendered: (
      <UikAvatar imgUrl={ images.a01 } />
    ),
    code: '<UikAvatar imgUrl={ images.a01 } />',
  },
  {
    rendered: (
      <UikAvatar
        imgUrl={ images.a01 }
        name="John Snow"
      />
    ),
    code: `<UikAvatar
  imgUrl={ images.a01 }
  name="John Snow"
/>`,
  },
  {
    rendered: (
      <UikAvatar
        highlighted
        imgUrl={ images.a01 }
        name="John Snow"
      />
    ),
    code: `<UikAvatar
  highlighted
  imgUrl={ images.a01 }
  name="John Snow"
/>`,
  },
  {
    rendered: (
      <UikAvatar
        highlighted
        imgUrl={ images.a21 }
        name="Natasha Special"
        textTop="Created by"
      />
    ),
    code: `<UikAvatar
  highlighted
  imgUrl={ images.a21 }
  name="Natasha Special"
  textTop="Created by"
/>`,
  },
  {
    rendered: (
      <UikAvatar
        highlighted
        imgUrl={ images.a21 }
        name="Natasha Special"
        textBottom="HR Specialist"
      />
    ),
    code: `<UikAvatar
  highlighted
  imgUrl={ images.a21 }
  name="Natasha Special"
  textBottom="HR Specialist"
/>`,
  },
  {
    rendered: (
      <UikAvatar
        avatarPlaceholder={ {
          content: 'AF',
          color: 'violet',
        } }
        name="Anna Frank"
      />
    ),
    code: `<UikAvatar
  avatarPlaceholder={ {
    content: 'AF',
    color: 'violet',
  } }
  name="Anna Frank"
/>`,
  },
  {
    rendered: (
      <UikAvatar
        imgUrl={ [
          images.a01,
          images.a05,
          images.a15,
        ] }
        name="Group conversation name"
      />
    ),
    code: `<UikAvatar
  imgUrl={ [
    images.a01,
    images.a05,
  ] }
  name="Group Chat"
/>`,
  },
  {
    rendered: (
      <UikAvatar
        imgUrl={ images.a11 }
        name="John Snow"
        size="small"
      />
    ),
    code: `<UikAvatar
  imgUrl={ images.a01 }
  name="John Snow"
  size="small"
/>`,
  },
  {
    rendered: (
      <UikAvatar
        imgUrl={ images.a23 }
        name="John Snow"
        size="large"
      />
    ),
    code: `<UikAvatar
  imgUrl={ images.a01 }
  name="John Snow"
  size="large"
/>`,
  },
  {
    rendered: (
      <UikAvatar
        imgUrl={ images.a19 }
        name="John Snow"
        size="larger"
      />
    ),
    code: `<UikAvatar
  imgUrl={ images.a01 }
  name="John Snow"
  size="larger"
/>`,
  },
  {
    rendered: (
      <UikAvatar
        imgUrl={ images.a18 }
        name="John Snow"
        size="extraLarge"
      />
    ),
    code: `<UikAvatar
  imgUrl={ images.a01 }
  name="John Snow"
  size="extraLarge"
/>`,
  },
  {
    rendered: (
      <UikAvatar
        imgUrl={ images.a13 }
        name="John Snow"
        size="jumbo"
      />
    ),
    code: `<UikAvatar
  imgUrl={ images.a01 }
  name="John Snow"
  size="jumbo"
/>`,
  },
  {
    rendered: (
      <UikAvatar
        actionIcon={ (
          <img
            alt="like"
            src={ images.ua02 }
          />
        ) }
        imgUrl={ images.a13 }
        name="John Snow"
      />
    ),
    code: `<UikAvatar
  actionIcon={ (
    <img
      alt="like"
      src={ images.ua02 }
    />
  ) }
  imgUrl={ images.a13 }
  name="John Snow"
/>`,
  },
]


const Avatar = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikAvatar
        </h1>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikAvatar Examples
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default Avatar
