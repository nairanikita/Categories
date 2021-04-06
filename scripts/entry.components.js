const path = require('path')

const components = [
  'UikDivider',
  'UikAvatar',
  'Uikon',
  'UikStarRating',
  'UikTag',
  'UikTagContainer',
  'UikProgressBar',
  'UikStatusDot',
  'UikNavBurger',
  'UikMessageBubble',
  'UikMessageContainer',
  'UikMessageSender',
  'UikMessageImage',
  'UikMessageImageContainer',
  'UikButton',
  'UikButtonGroup',
  'UikInput',
  'UikCheckbox',
  'UikSelect',
  'UikToggle',
  'UikRadio',
  'UikFormInputGroup',
  'UikMapPinCircle',
  'UikAvatarMenuContainer',
  'UikEmojiHeadline',
  'UikonText',
  'UikDropdown',
  'UikDropdownItem',
  'UikTopBar',
  'UikTopBarSection',
  'UikTopBarLink',
  'UikTopBarLinkContainer',
  'UikTopBarTitle',
  'UikTopBarMenuDivider',
  'UikNavLink',
  'UikNavLinkDark',
  'UikNavLinkTwo',
  'UikNavLinkSecondary',
  'UikNavLinkTwoContainer',
  'UikNavTitle',
  'UikNavSection',
  'UikNavSectionTitle',
  'UikNavUser',
  'UikTutorialList',
  'UikTutorialListItem',
  'UikHeadline',
  'UikHeadlineDesc',
  'UikContentTitle',
  'UikKnowledgeTopic',
  'UikonWrap',
  'UikSocialHeader',
  'UikSocialWidgetFriends',
  'UikSocialWidgetAbout',
  'UikWidget',
  'UikWidgetContainer',
  'UikWidgetBottomCta',
  'UikWidgetHeader',
  'UikWidgetLink',
  'UikWidgetVideoPreview',
  'UikWidgetVideoPreviewContainer',
  'UikWidgetContent',
  'UikWidgetDoc',
  'UikWidgetTable',
  'UikTabContainer',
  'UikTabItem',
  'UikContainerVertical',
  'UikContainerHorizontal',
  'UikContent',
  'UikContentItem',
  'UikLayoutMain',
  'UikNavPanel',
  'UikScrollArea',
  'UikOutsideClickHandler',

]

const entry = components.reduce((ac, item) => ({
  ...ac,
  [item]: path.resolve(__dirname, `../src/universal/components/${item}`),
}), {})

module.exports = entry