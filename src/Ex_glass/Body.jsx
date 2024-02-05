import React, { Component } from 'react'
import "./style.css"
import { glassArr } from './data';
export default class Body extends Component {
    state = {
        name:`./imagesGlasses/glassesImage/v1.png`,
    };

    handleChangeGlass =(name) => {
        this.setState({
            name:name
        })
    }
    renderGlassList = () => {
        return glassArr.map((item) => {
            return(
                    <div className='card text-left col-1'>
                        <button onClick={() => {
                            this.handleChangeGlass(`${item.url}`)
                        }}>
                            <img className='card-img-top' src={item.url} alt="" />
                        </button>
                        <div className="card-body">
                            <h4 className='card-title'>{item.name}</h4>
                        </div>
                    </div>
            )

        })
    }
  render() {
    let url = this.state.name;
    return (
      <div className='container'>
        <div className='img-contain'>
            <img src="./imagesGlasses/glassesImage/model.jpg" alt="" className='img-center'/>
            <div>
                <img src={url} alt="glass" className='glass-img'></img> 
            </div>
            </div>
        <div className='row select-glass'>
            {this.renderGlassList()}
        </div>
      </div>
    )
  }
}
