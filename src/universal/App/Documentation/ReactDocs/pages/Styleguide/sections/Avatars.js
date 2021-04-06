
import React from 'react'

import {
  div,
  UikAvatar,
} from '@components'


import * as images from '@exampleAssets'


import SectionTitle from '../components/TopBar'
import Content from '../components/Content'
import ComponentTitle from '../components/ComponentTitle'
import TopBarTitle from '../components/TopBarTitle'

import cls from './styleguide-buttons.scss'

const DocsStyleguideAvatars = () => (
  <React.Fragment>
    <SectionTitle>
      <TopBarTitle
        name="UikAvatar"
        to="avatar"
      >
        Avatars
      </TopBarTitle>
        04
    </SectionTitle>
    <Content>
      <div className={ cls.groupDivider }>
        <div>
          <ComponentTitle>
            Picture Avatar
          </ComponentTitle>
          <div className={ cls.avatarGroup }>
            <div className={ cls.avatarWrapper }>
              <UikAvatar
                imgUrl={ images.a11 }
                size="extraLarge"
              />
              <p>
                100px
              </p>
            </div>
            <div className={ cls.avatarWrapper }>
              <UikAvatar
                imgUrl={ images.a08 }
                size="larger"
              />
              <p>
                80px
              </p>
            </div>
            <div className={ cls.avatarWrapper }>
              <UikAvatar
                imgUrl={ images.a15 }
                size="large"
              />
              <p>
                60px
              </p>
            </div>
            <div className={ cls.avatarWrapper }>
              <UikAvatar
                imgUrl={ images.a21 }
              />
              <p>
                38px
              </p>
            </div>
            <div className={ cls.avatarWrapper }>
              <UikAvatar
                imgUrl={ images.a01 }
                size="small"
              />
              <p>
                28px
              </p>
            </div>
          </div>

        </div>

        {/* placeholders */}
        <div>
          <ComponentTitle>
            Placeholder Avatar
          </ComponentTitle>
          <div className={ cls.avatarGroup }>
            <div className={ cls.avatarWrapper }>
              <UikAvatar
                avatarPlaceholder={ {
                  content: 'AF',
                  color: 'blue',
                } }
                size="extraLarge"
              />
              <p>
                100px
              </p>
            </div>
            <div className={ cls.avatarWrapper }>
              <UikAvatar
                avatarPlaceholder={ {
                  content: 'AF',
                  color: 'orange',
                } }
                size="larger"
              />
              <p>
                80px
              </p>
            </div>
            <div className={ cls.avatarWrapper }>
              <UikAvatar
                avatarPlaceholder={ {
                  content: 'AF',
                  color: 'green',
                } }
                size="large"
              />
              <p>
                60px
              </p>
            </div>
            <div className={ cls.avatarWrapper }>
              <UikAvatar
                avatarPlaceholder={ {
                  content: 'AF',
                  color: 'red',
                } }
              />
              <p>
                38px
              </p>
            </div>
            <div className={ cls.avatarWrapper }>
              <UikAvatar
                avatarPlaceholder={ {
                  content: 'AF',
                  color: 'violet',
                } }
                size="small"
              />
              <p>
                28px
              </p>
            </div>
          </div>

        </div>
      </div>
    </Content>
  </React.Fragment>
)


export default DocsStyleguideAvatars
