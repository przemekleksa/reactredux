import React, { Component } from 'react'

export class Main extends Component {
    state = {
        name: 'Przemek',
        age: 34
    }

    handleClick = (e) => {
        this.setState({
            name: "Ela",
            age: 54
        })
        console.log(e.target)
        
    }

    handleMouseOver(e){
        console.log(e.target, e.pageX)
    }

    handleCopy(e){
        console.log(e, 'try being original for once!')
    }

    render() {
        return (
            <div>
                <h1>Hello
                </h1>
                <p>Random number: {Math.round(Math.random() * 10)}
                </p>
                <h2>My name is {this.state.name}. I'm {this.state.age} years old.</h2> 
                <button onClick={this.handleClick}>Change my name</button>
                <button onMouseOver={this.handleMouseOver}>Hover me</button>
                <p onCopy={this.handleCopy}>What we think, we become</p>
            </div>
        )
    }
}

export default Main
