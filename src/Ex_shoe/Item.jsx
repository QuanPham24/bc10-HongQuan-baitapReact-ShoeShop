import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    let {image,name} = this.props.data;
    return (
      <div className='col-3'>
        <img src={image} className="w-100" alt="" />
        <h5>{name}</h5>
        <button className='btn-success'>add</button>
        <button className='btn-dark' onClick={() => {
            this.props.handleClickView(this.props.data);
        }}>view</button>
      </div>
    )
  }
}
