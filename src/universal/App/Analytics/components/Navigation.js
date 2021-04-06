import * as React from 'react'

import * as images from '@exampleAssets'

import {
  UikNavSection,
  UikNavLinkTwo,
  UikNavLinkTwoContainer,
  UikNavLink,

  UikNavSectionTitle,

  UikTopBar,
  UikTopBarSection,
  Uikon,
  UikNavUser,
  UikDivider,
  UikNavPanel,
  UikContainerVertical,
  UikScrollArea,
} from '@components'

const menuLinks = [
  {
    text: 'Dashboard',
    icon: (
      <Uikon>
        gallery_grid_view
      </Uikon>
    ),
  },
  {
    text: 'Calendar',
    icon: (
      <Uikon>
        calendar
      </Uikon>
    ),
  },
  {
    text: 'Inbox',
    icon: (
      <Uikon>
        inbox_paper_round
      </Uikon>
    ),
  },
  {
    text: 'Invoicing',
    icon: (
      <Uikon>
        money_round
      </Uikon>
    ),
  },
  {
    text: 'Lab / Experimental',
    icon: (
      <Uikon>
        container
      </Uikon>
    ),
  },
]


const AnalyticsNavigation = () => (
  <UikNavPanel>
    <UikContainerVertical>

      <UikTopBar center>
        <UikTopBarSection>
          <Uikon>
              home
          </Uikon>
        </UikTopBarSection>
      </UikTopBar>

      <UikScrollArea>
        <UikNavUser
          imgUrl={ images.a21 }
          name="Martha Blair"
          textTop="Art Director"
        />
        <UikDivider />
        <UikNavLinkTwoContainer>
          {
            menuLinks.map(link => (
              <UikNavLinkTwo
                key={ link.text }
                className={ link.text === 'Dashboard' ? 'active' : null }
                highlighted
                icon={ link.icon }
              >
                {link.text}
              </UikNavLinkTwo>
            ))
          }
        </UikNavLinkTwoContainer>

        <UikNavSection>
          <UikNavSectionTitle>
            Recently viewed
          </UikNavSectionTitle>
          <UikNavLink rightEl="→">
              Overall Performance
          </UikNavLink>
          <UikNavLink rightEl="→">
              Invoice #845
          </UikNavLink>
          <UikNavLink rightEl="→">
              Customer: Minerva Viewer
          </UikNavLink>
        </UikNavSection>
      </UikScrollArea>
    </UikContainerVertical>
  </UikNavPanel>

)

export default AnalyticsNavigation
