import React, { Component } from 'react'

export default class extends Component {
  render () {
    const list = ['uno', 'dos', 'tres'];
    return (
      <div>
          {list.map((l, i) => <div key={i}>{l}</div>)}
      </div>
    )
  }
}