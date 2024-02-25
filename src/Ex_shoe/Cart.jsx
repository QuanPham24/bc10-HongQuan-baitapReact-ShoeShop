import React, { Component } from 'react'

export default class Cart extends Component {
  render() {
    return (
      <div className='col-12'>
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Image</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {this.props.cart.map((item) => {
                    
                    return (
                    <tr key ={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price * item.amount}</td>
                    <td>
                        <button className='btn-dark' onClick={() => {
                            this.props.handleDecrease(item.id)
                        }}>-</button>

                        <strong  style={{ fontSize: '1.5em' }}>{item.amount}</strong>

                        <button className='btn-warining' onClick={() => {
                            this.props.handleIncrease(item.id)
                        }}>+</button>
                    </td>
                    <td><img src={item.image} alt="" style={{width:80,}} /></td>
                    <td><button className='btn-danger' onClick={() => {
                        this.props.handleDelete(item.id)
                    }}>X</button></td>
                </tr>
                )
                })}
            </tbody>
        </table>
      </div>
    )
  }
}
