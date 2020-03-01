import React, { Component } from 'react'

export class Form extends Component {

    state = {
        text: "Let's go"
    }

    handleChange = (e) => {
        // console.log(e)
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('form submitted', this.state.text)
    }

    render() {
        return (
            <div>
                <h2>{this.state.text}</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
