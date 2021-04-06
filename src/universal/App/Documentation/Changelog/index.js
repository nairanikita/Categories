/* eslint-disable max-len */
import * as React from 'react'
import { Link } from 'react-router-dom'

import {
  UikWidgetContent,
  UikWidgetDoc,
  UikLayoutMain,
} from '@components'


const DocsChangelog = () => (
  <UikLayoutMain contentCenter>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          <strong>
          Release 3.1 - 15th screen!
          </strong>
        </h1>
      </UikWidgetContent>
      <UikWidgetContent>
        <h3>
        New Components
        </h3>
        <ul>
          <li>
            <Link to="/docs/react/button-group">
              UikButtonGroup
            </Link>
            {' - Added new component'}
          </li>
        </ul>
        <h3>
          Component Updates
        </h3>
        <ul>
          <li>
            <Link to="/docs/react/avatar">
              UikAvatar
            </Link>
            {' - added "Component" property'}
          </li>
          <li>
            Many microadjustment fixes and pixel peeping
          </li>
        </ul>
        <h3>
          Component Updates
        </h3>
        <ul>
          <li>
            {'Updated information about '}
            <Link to="/docs/start/compiled">importing compiled bundle</Link>
            {' into your project.'}

          </li>
          <li>
            Dynamic component counters
          </li>
        </ul>
        <h3>
        Example Updates
        </h3>
        <ul>
          <li>
            {'Added '}
            <Link to="/social/events">
              Social - Events
            </Link>
            {' page (responsive)'}
          </li>
          <li>
            {'Added '}
            <Link to="/social">
              Social - Homefeed
            </Link>
            {' page (responsive)'}
          </li>
        </ul>
      </UikWidgetContent>
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          <strong>
            Release 3.0 - Yay Buildings!
          </strong>
        </h1>
      </UikWidgetContent>
      <UikWidgetContent>
        <h3>
          New Components
        </h3>
        <ul>
          <li>
            <Link to="/docs/react/content-title">
              UikContentTitle
            </Link>
            {' - Added new component'}
          </li>
        </ul>
        <h3>
          Component Updates
        </h3>
        <ul>
          <li>
            <Link to="/docs/react/uikon">
              Uikon
            </Link>
            {' '}
            - added new icons to support new buildings app screens
          </li>
          <li>
            <Link to="/docs/react/select">
              UikSelect
            </Link>
            {' - '}
            <strong style={ { color: 'red' } }>BREAKING</strong>
            {' - ! "label" property has been changed to "placeholder" (wrongly named) and "label" property has been reused properly as a label'}
          </li>
          <li>
            <Link to="/docs/react/button">
              UikButton
            </Link>
            {' - Added "isExpanded" property'}
          </li>
          <li>
            <Link to="/docs/react/checkbox">
              UikCheckbox
            </Link>
            {' - added color options.'}
          </li>
          <li>
            {'Added new '}
            <Link to="/docs/react/tag">
              UikTag
            </Link>
            {' component'}
          </li>
          <li>
            Many microadjustment fixes and pixel peeping
          </li>
        </ul>
        <h3>
          Documentation Updates
        </h3>
        <ul>
          <li>
            {'⚡️ Added '}
            <em>
              <Link to="/docs/start/cra">
            create-react-app
              </Link>

            </em>
            {' integration guide.'}
          </li>
          <li>
            {'Docs and example usage of '}
            <Link to="/docs/react/top-bar">
              UikTopBar
            </Link>
          </li>
          <li>
            {'Better clarification on '}
            <Link to="/docs/start/compiled">
              how to import compiled files
            </Link>
            {' and how to handle eslint errors.'}
          </li>
        </ul>
        <h3>
          Example Updates
        </h3>
        <ul>
          <li>
            {'Added '}
            <Link to="/buildings/listing/1">
              Buildings - Detail
            </Link>
            {' page (responsive)'}
          </li>
          <li>
            {'Added '}
            <Link to="/buildings/performance">
              Buildings - Analytics
            </Link>
            {' page (responsive)'}
          </li>
          <li>
            {'Added '}
            <Link to="/buildings">
              Buildings - Dashboard
            </Link>
            {' page (responsive)'}
          </li>
          <li>
            {'Added '}
            <Link to="/buildings/user/settings">
              Buildings - User Settings
            </Link>
            {' page (responsive)'}
          </li>
          <li>
            {'Added '}
            <Link to="/buildings/conversations/1">
              Buildings - Conversations
            </Link>
            {' page (responsive)'}
          </li>
          <li>
            {'Added '}
            <Link to="/buildings/users/1">
              Buildings - Users
            </Link>
            {' page (responsive)'}
          </li>
        </ul>
        <h3>
          Project Structure Update
        </h3>
        <ul>
          <li>
            src/containers have been merged with src/components
          </li>
        </ul>
      </UikWidgetContent>
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          <strong>
            Release 2.0 - Responsive
          </strong>
        </h1>
        <p>
          Despite the release number, this version is backwards compatible. Primarily the focus was on delivering responsive examples and 2 screens from buildings conceptual app. Some code was updated or extended and partial (will be completed in next release)
          {' '}
          <Link to="/docs/react/styleguide">
Styleguide
          </Link>
          {' '}
for quick component overview has been created.
        </p>
      </UikWidgetContent>
      <UikWidgetContent>
        <h3>
          New Components
        </h3>
        <ul>
          <li>
            <Link to="/docs/react/form-input-group">
              UikFormInputGroup
            </Link>
            {' - Added new component'}
          </li>
          <li>
            <Link to="/docs/react/nav-link-dark">
              UikNavLinkDark
            </Link>
            {' - Added new component'}
          </li>
          <li>
            <Link to="/docs/react/map-pin-circle">
              UikMapPinCircle
            </Link>
            {' - Added new component'}
          </li>
          <li>
            <Link to="/docs/react/toggle">
              UikToggle
            </Link>
            {' - Added new component'}
          </li>
          <li>
            <Link to="/docs/react/radio">
              UikRadio
            </Link>
            {' - Added new component'}
          </li>
          <li>
            <Link to="/docs/react/nav-burger">
              UikNavBurger
            </Link>
            {' - Added new component'}
          </li>
        </ul>
        <h3>
          Component Updates
        </h3>
        <ul>
          <li>
            <Link to="/docs/react/uikon">
              Uikon
            </Link>
            {' '}
            - added new icons to support buildings app
          </li>
          <li>
            <Link to="/docs/react/button">
              UikButton
            </Link>
            {' - added extra "iconOnly" property to render the icon in the center. Content is now also centered. Fixed button height. Updated colors.'}
          </li>
          <li>
            <Link to="/docs/react/button">
              UikAvatar
            </Link>
            {' - Adjusted font size for placeholder avatars.'}
          </li>
          <li>
            <Link to="/docs/react/divider">
              UikDivider
            </Link>
            {' - added extra "margin" property'}
          </li>
          <li>
            <Link to="/docs/react/checkbox">
              UikCheckbox
            </Link>
            {' - fixed styling when there was no label. Updated check icon. Added description property.'}
          </li>
          <li>
            <Link to="/docs/react/input">
              UikInput
            </Link>
            {' - Updated docs with more examples, new properties (iconPosition & errorMessage)'}
          </li>
          <li>
            <Link to="/docs/react/outside-click-handler">
              UikOutsideClickHandler
            </Link>
            {' - Added support for Component property'}
          </li>
        </ul>
        <h3>
          Documentation Updates
        </h3>
        <ul>
          <li>
            <Link to="/docs/react/styleguide">
              Styleguide Page
            </Link>
            {' - Added Styleguide page for a better overview of components (not complete)'}
          </li>
          <li>
            <Link to="/docs/react/component-property">
              {'"Component" Property Guide'}
            </Link>
            {' - Added guide about how to use Component property'}
          </li>
          <li>
            <Link to="/docs/react/widget-bottom-cta">
              UikWidgetBottomCta
            </Link>
            {' - added to docs'}
          </li>
          <li>
            <Link to="/docs/react/widget-header">
              UikWidgetHeader
            </Link>
            {' - added to docs'}
          </li>
          <li>
            <Link to="/docs/react/star-rating">
              UikStarRating
            </Link>
            {' - added to docs'}
          </li>
          <li>
            <Link to="/docs/react/tabs">
              UikTabContainer &amp; UikTabItem
            </Link>
            {' - added to docs'}
          </li>
        </ul>
        <h3>
          Example Updates
        </h3>
        <ul>
          <li>
            {'Updated - responsive '}
            <Link to="/social/profile">
              Social - Profile
            </Link>
          </li>
          <li>
            {'Updated - responsive '}
            <Link to="/knowledge">
              Knowledge - Overview
            </Link>
          </li>
          <li>
            {'Updated - responsive '}
            <Link to="/knowledge/doc">
              Knowledge - Documentation
            </Link>
          </li>
          <li>
            {'Updated - responsive '}
            <Link to="/tutorials">
              Tutorials Page
            </Link>
          </li>
          <li>
            {'Updated - responsive '}
            <Link to="/tutorials">
              Tutorials Page
            </Link>
          </li>
          <li>
            {'Updated - responsive '}
            <Link to="/analytics">
              Analytics - Overview
            </Link>
          </li>
          <li>
            {'Added '}
            <Link to="/buildings/listing">
            Buildings - Listing
            </Link>
            {' page (responsive)'}
          </li>
          <li>
            {'Added '}
            <Link to="/buildings/sign-up">
            Buildings - Sign Up
            </Link>
            {' page (responsive)'}
          </li>
        </ul>
        <h3>
          Stack Updates
        </h3>
        <ul>
          <li>
            {'Fix hot module replacement which wasn\'t triggered correctly'}
          </li>
          <li>
            {'Distribution build now builds components separately as well.'}
          </li>
        </ul>

      </UikWidgetContent>
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          Patch Release 1.0.1
        </h1>
        <p>
          First minor release, mostly updating some styles and improved SSR codebase. All components compatible so no worries :)
        </p>
      </UikWidgetContent>
      <UikWidgetContent>
        <ul>
          <li>
            Updated css styles for buttons
          </li>
          <li>
            Updated css styles for dropdowns
          </li>
          <li>
            Fixed UikCodeHighlight on SSR, updated documentation
          </li>
          <li>
            Nicer code for SSR
          </li>
          <li>
            Added OG Tags
          </li>
          <li>
            Added changelog :)
          </li>
        </ul>
      </UikWidgetContent>
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsChangelog
