import * as React from 'react'
import classnames from 'classnames'

/* eslint-disable max-len */

import {
  UikWidgetDoc,
  UikWidgetContent,
  UikTabContainer,
  UikTabItem,
  UikContainerVertical,
  UikContainerHorizontal,
  UikLayoutMain,
} from '@components'

import {
  UikCodeHighlightContainer,
} from '@componentWrappers'


import cls from './page-documentation.scss'

import code from './assets/code'

// components
import Header from '../components/Header'
import Navigation from './components/Navigation'

import DocTableExample from './DocTableExample'
import DocTableExample2 from './DocTableExample2'

class KnowledgeDocumentationPage extends React.PureComponent {
  state = {
    activeItem: 'doc',
  }

  toggleView = () => {
    const { activeItem } = this.state
    this.setState({
      activeItem: activeItem === 'doc' ? 'code' : 'doc',
    })
  }

  render() {
    const { activeItem } = this.state
    return (
      <UikContainerVertical className={ cls.wrapper }>
        <Header />
        <UikTabContainer>
          <UikTabItem
            active={ activeItem === 'doc' }
            onClick={ this.toggleView }
            size="small"
          >
            Overview
          </UikTabItem>
          <UikTabItem
            active={ activeItem === 'code' }
            onClick={ this.toggleView }
            size="small"
          >
            Code
          </UikTabItem>
        </UikTabContainer>
        <UikContainerHorizontal className={ cls.container }>
          <Navigation />
          <UikLayoutMain outerProps={ {
            className: classnames(cls.mainContent, {
              [cls.active]: activeItem === 'doc',
            }),
          } }
          >
            <UikWidgetDoc
              margin
            >
              <UikWidgetContent>
                <h1>
              Collections
                </h1>
                <p>
              Collections in Knowledge are groupings of Items and define the schema or structure of the custom data stored in those Items. A Knowledge site can have multiple attached Collections. A Collection’s fields define the structure of the Items within it.
                </p>
              </UikWidgetContent>
              <UikWidgetContent>
                <h2>
              Model
                </h2>
              </UikWidgetContent>
              <DocTableExample />
              <UikWidgetContent>
                <h3>
              Default Fields
                </h3>
                <p>
              Each collection has a number of fields that are always present. Some of these fields are editable and some of them cannot be changed by users.
                </p>
              </UikWidgetContent>
              <DocTableExample2 />
            </UikWidgetDoc>
          </UikLayoutMain>
          <UikCodeHighlightContainer
            className={ classnames(cls.codeContent, {
              [cls.active]: activeItem === 'code',
            }) }
            data={ code }
          />
        </UikContainerHorizontal>
      </UikContainerVertical>
    )
  }
}

export default KnowledgeDocumentationPage
