/* eslint-disable max-len */
import * as React from 'react'


import {
  UikWidgetContent,
  UikWidgetDoc,
  Uikon,
  UikWidgetTable,
  UikLayoutMain,
} from '@components'

import cls from './docs-icons.scss'

import PropertyTable from '../../components/PropertyTable'
import ExampleTable from '../../components/ExampleTable'
import properties from '../../shared/properties'

const itemProps = [
  properties.className(),
  properties.children({
    propType: 'String',
    desc: 'Icon name literal',
  }),
  properties.rest(),
]

const examples = [
  {
    rendered: (
      <Uikon>
        help
      </Uikon>
    ),
    code: `<Uikon>
  help
</Uikon>`,
  },
]

const icons = [
  'arrow_left',
  'arrow_right',
  'plus_rounded',
  'pin_rounded_circle',
  'message_2',
  'calendar_2',
  'building_plan',
  'tap_click_force_touch',
  'ruler',
  'video_camera',
  'phone_two',
  'smile',
  'attachment',
  'picture',
  'view_simple',
  'lightbulb',
  'wallet',
  'view_grid',
  'view_list',
  'profile_card',
  'front_store',
  'rocket',
  'buildings',
  'building',
  'shopping_bag',
  'check',
  'more',
  'trending_down',
  'trending_up',
  'star',
  'star',
  'add',
  'help',
  'message',
  'send_round',
  'inbox_paper_round',
  'search_left',
  'settings',
  'love',
  'love',
  'edit',
  'multitasking',
  'gallery_grid_view',
  'home',
  'profile_round',
  'profile_plus_round',
  'clock',
  'container',
  'globe_network',
  'calendar',
  'stats',
  'money_round',
  'cloud_up',
  'image_picture',
  'camera',
  'desktop',
  'phone',
  'dropdown_arrow',
]

const DocsUikon = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          Uikon
        </h1>
        <p>
          {`Uikon has a icon class that imports packed icons in icon font supporting font ligature. 
          It's a plain <i> element with class "uikon". The font is loaded via css in ./src/App/App.scss`}
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          Uikon Example
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          List of Icons
        </h2>
      </UikWidgetContent>
      <UikWidgetTable>
        <div className={ cls.icons }>
          {
            icons
              .sort((a, b) => (`${a}`).localeCompare(`${b}`))
              .map(icon => (
                <div
                  key={ icon }
                  className={ cls.iconWrapper }
                >
                  <div className={ cls.icon }>
                    <Uikon style={ {
                      fontSize: '24px',
                    } }
                    >
                      {icon}
                    </Uikon>
                  </div>
                  <div className={ cls.ligature }>
                    {icon}
                  </div>
                </div>
              ))
          }
        </div>

      </UikWidgetTable>
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsUikon
