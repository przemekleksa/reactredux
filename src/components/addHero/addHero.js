import React, { Component } from 'react'

export class AddHero extends Component {
    state = {
        name: null,
        color: null,
        occupation: null,
        // id: Math.random()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state)
        this.props.addHero({...this.state})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange}/>

                    <label htmlFor="color">Color:</label>
                    <input type="text" id="color" onChange={this.handleChange}/>

                    <label htmlFor="occupation">Occupation:</label>
                    <input type="text" id="occupation" onChange={this.handleChange}/>

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddHero
