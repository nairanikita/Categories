

import * as React from 'react'
import prism from 'prismjs'
import classnames from 'classnames'


import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-json'


import './atom-dark.scss'
// @flow
type UikCodeHighlightProps = {
  code?: React.Node,
  language?: String,
  className?: String,
}

class UikCodeHighlight extends React.Component<UikCodeHighlightProps> {
  static defaultProps = {
    code: null,
    language: null,
  };

  componentDidMount() {
    this.highlightCode()
  }

  componentDidUpdate() {
    this.highlightCode()
  }

  setRef = (ref) => {
    this.el = ref
  };

  highlightCode() {
    prism.highlightElement(this.el)
  }

  render() {
    const {
      language, code, className, ...rest
    } = this.props

    return (
      <pre
        ref={ this.setRef }
        className={ classnames('react-prism', `language-${language}`, className) }
        { ...rest }
      >
        <code>
          {code}
        </code>
      </pre>
    )
  }
}

UikCodeHighlight.defaultProps = {
  className: null,
}

export default UikCodeHighlight
