import './App.css';
import Car from './Car/Car'
import React, {Component} from 'react';

export  default class App extends Component {
  
  state = {
    cars: [
      {name: 'Mercedes', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda', year: 1999},
    ],
    pageTitle: 'React Components',
    showCars: false
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  onChangeName(name, index) {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({cars})
  }

  deleteHandler(index) {
    const cars = [...this.state.cars]
    cars.splice(index, 1)
    this.setState({cars})
  }


  render() {
    const divStyle = {
      textAlign: 'center'
    }

    let cars = null;

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car 
            key={index}
            name={car.name} 
            year={car.year}
            onDelete={this.deleteHandler.bind(this, index)}
            onChangeName={event => this.onChangeName(event.target.value, index)}
          />
        )
      })
    }

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>
        
        <button 
        onClick={this.toggleCarsHandler}
        >Toggle cars</button>

        <div style={{
          width: 400,
          margin: 'auto',
          padding: '20px'
        }}>
          { cars }
        </div>
     
      </div>
    );
  }

}

