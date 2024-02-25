import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    let {image,name} = this.props.shoe;
    return (
      <div>
        <img src={image} alt="" className='w-75'/>
        <h3>{name}</h3>
      </div>
    )
  }
}
