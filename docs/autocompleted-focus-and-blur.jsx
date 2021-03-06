/* eslint no-alert:0 no-console: 0 */

import React from 'react'
import {Autocompleted} from '../src'
import suggests from './mock_suggests'

const EMPTY_SUGGESTS = []

export default class AutocompletedWithFocusAndBlur extends React.Component {
  constructor () {
    super()
    this.state = {suggests: EMPTY_SUGGESTS}
    this.handleSelect = this.handleSelect.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleChange (string) {
    if (string) {
      this.setState({
        suggests: suggests.filter(suggest => suggest.content.includes(string))
      })
    } else {
      this.setState({suggests: EMPTY_SUGGESTS})
    }
  }

  handleSelect (suggest) {
    console.log(suggest)
    alert(`Selected item: ${suggest.content}`) // eslint-disable-line no-alert, no-undef
    this.setState({suggests: EMPTY_SUGGESTS})
  }

  handleFocus () {
    console.log('Focus')
  }

  handleBlur () {
    console.log('Blur')
  }

  render () {
    return (
      <Autocompleted
        placeholder='Autocomplete With Focus and Blur'
        handleChange={this.handleChange}
        handleFocus={this.handleFocus}
        handleBlur={this.handleBlur}
        handleSelect={this.handleSelect}
        suggests={this.state.suggests} />
    )
  }
}
