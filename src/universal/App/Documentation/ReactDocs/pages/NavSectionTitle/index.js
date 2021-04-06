/* eslint-disable max-len */
import * as React from 'react'


import {
  UikWidgetContent,
  UikWidgetDoc,
  UikNavLink,
  Uikon,
  UikNavSection,
  UikNavSectionTitle,
  UikLayoutMain,
} from '@components'


import PropertyTable from '../../components/PropertyTable'
import ExampleTable from '../../components/ExampleTable'
import properties from '../../shared/properties'

const itemProps = [
  properties.children(),
  properties.className(),
  properties.rest(),
]

const examples = [
  {
    rendered: (
      <UikNavSection>
        <UikNavSectionTitle>
          Section Name
        </UikNavSectionTitle>
        <UikNavLink
          className="active"
          highlighted
          icon={ (
            <Uikon>
              gallery_grid_view
            </Uikon>
          ) }
          rightEl={ 23 }
        >
          Some Link
        </UikNavLink>
        <UikNavLink
          highlighted
          icon={ (
            <Uikon>
              help
            </Uikon>
          ) }
          rightEl={ 23 }
        >
          Help
        </UikNavLink>
      </UikNavSection>
    ),
    code: `<UikNavSection>
  <UikNavSectionTitle>
    Section Name
  </UikNavSectionTitle>
  <UikNavLink
    className="active"
    highlighted
    icon={ (
      <Uikon>
        gallery_grid_view
      </Uikon>
    ) }
    rightEl={ 23 }
  >
    Some Link
  </UikNavLink>
  <UikNavLink
    highlighted
    icon={ (
      <Uikon>
        help
      </Uikon>
    ) }
    rightEl={ 23 }
  >
    Help
  </UikNavLink>
</UikNavSection>`,
  },
]


const DocsNavSectionTitle = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikNavSectionTitle
        </h1>
        <p>
          Just a wrapper for a section, adds some margins around
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikNavSectionTitle Examples
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsNavSectionTitle
