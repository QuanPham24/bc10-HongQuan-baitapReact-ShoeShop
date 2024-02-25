import React, { Component } from 'react'
import Item from './Item'

export default class List extends Component {
    renderListShoe =() => {
        return this.props.shoeArr.map((item) => {
            return <Item 
            handleAddToCart = {this.props.handleAddToCart}
            handleClickView = {this.props.handleViewDetail}
            key={item.id} data ={item}/>
        })
    }
  render() {
    return (
      <div className='row'>
        {this.renderListShoe()}
      </div>
    )
  }
}
