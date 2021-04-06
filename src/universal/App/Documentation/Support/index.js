/* eslint-disable max-len */
import * as React from 'react'

import {
  UikWidgetContent,
  UikWidgetDoc,
  UikLayoutMain,
} from '@components'


const DocsSupport = () => (
  <UikLayoutMain contentCenter>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          <strong>
            General Support
          </strong>
        </h2>
        <p>
          If you have any questions about the codebase or the implementation is still not clear, bugs and basically anything, let us know at
          {' '}
          <a href="mailto:team@janlosert.com">
            team@janlosert.com
          </a>
          ! :)
        </p>
      </UikWidgetContent>
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          <strong>
            In need of custom solution?
          </strong>
        </h2>
        <p>
Feel free to drop us an
          {' '}
          <a href="mailto:team@janlosert.com">
            email
          </a>
          {' '}
if you are interested in any custom solution and you are short with resources or you just simply trust our work as we do. We will get to you as soon as possible.
        </p>
      </UikWidgetContent>
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsSupport
