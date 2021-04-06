/* eslint-disable max-len */
import * as React from 'react'

import {
  UikWidgetContent,
  UikWidgetDoc,
  UikLayoutMain,
} from '@components'

import {
  UikCodeHighlight,
} from '@componentWrappers'

import * as components from '@components' // eslint-disable-line
import * as componentWrappers from '@componentWrappers' // eslint-disable-line

const ReactCompiled = () => (
  <UikLayoutMain contentLeft>

    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          Components not included
        </h2>
        <p>
          {'This is because these components are dependant on some large libraries and we don\'t want to include it in the compiled lib.js file. Feel free to copy the source code from /repo/src/universal/componentWrappers'}
        </p>

        <ol>
          {
            Object.keys(componentWrappers)
              .sort((a, b) => (`${a}`).localeCompare(`${b}`))
              .map(item => (
                <li key={ item }>
                  {item}
                </li>
              ))
          }
        </ol>
      </UikWidgetContent>
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          Available components in the bundle
        </h2>

        <ol>
          {
            [
              ...Object.keys(components),
              // /* Basic */
              // 'UikDivider',
              // 'UikAvatar',
              // 'Uikon',
              // 'UikStarRating',
              // 'UikTag',
              // 'UikTagContainer',
              // 'UikProgressBar',

              // 'UikStatusDot',
              // 'UikNavBurger',

              // 'UikMessageBubble',
              // 'UikMessageContainer',
              // 'UikMessageSender',
              // 'UikMessageImage',
              // 'UikMessageImageContainer',

              // 'UikButton',
              // 'UikButtonGroup',
              // 'UikInput',
              // 'UikCheckbox',
              // 'UikSelect',
              // 'UikToggle',
              // 'UikRadio',
              // 'UikFormInputGroup',

              // 'UikMapPinCircle',

              // 'UikAvatarMenuContainer',
              // 'UikEmojiHeadline',
              // 'UikonText',

              // /* Drop down */
              // 'UikDropdown',
              // 'UikDropdownItem',

              // /* Top Bar */
              // 'UikTopBar',
              // 'UikTopBarSection',
              // 'UikTopBarLink',
              // 'UikTopBarLinkContainer',
              // 'UikTopBarTitle',
              // 'UikTopBarMenuDivider',

              // /* Navigation */
              // 'UikNavLink',
              // 'UikNavLinkDark',
              // 'UikNavLinkTwo',
              // 'UikNavLinkSecondary',
              // 'UikNavLinkTwoContainer',
              // 'UikNavTitle',
              // 'UikNavSection',
              // 'UikNavSectionTitle',
              // 'UikNavUser',

              // /* Composed Tutorial */
              // 'UikTutorialList',
              // 'UikTutorialListItem',


              // /* HEADLINES */

              // 'UikHeadline',
              // 'UikHeadlineDesc',
              // 'UikContentTitle',

              // /* Composed Knowledge */

              // 'UikKnowledgeTopic',
              // 'UikonWrap',


              // /* Composed Social */
              // 'UikSocialHeader',
              // 'UikSocialWidgetFriends',
              // 'UikSocialWidgetAbout',
              // 'UikWidget',
              // 'UikWidgetContainer',
              // 'UikWidgetBottomCta',
              // 'UikWidgetHeader',
              // 'UikWidgetLink',
              // 'UikWidgetVideoPreview',
              // 'UikWidgetVideoPreviewContainer',
              // 'UikWidgetContent',
              // 'UikWidgetDoc',
              // 'UikWidgetTable',

              // /* Tabs */
              // 'UikTabContainer',
              // 'UikTabItem',

              // // containers
              // 'UikContainerVertical',
              // 'UikContainerHorizontal',
              // 'UikContent',
              // 'UikContentItem',


              // 'UikLayoutMain',
              // 'UikNavPanel',
              // 'UikScrollArea',

            ]
              .sort((a, b) => (`${a}`).localeCompare(`${b}`))
              .map(item => (
                <li key={ item }>
                  {item}
                </li>
              ))
          }
        </ol>

      </UikWidgetContent>
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default ReactCompiled
