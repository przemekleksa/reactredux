import React, { Component } from 'react'

export class Props extends Component {
    render() {
        return (
            <div>
                <h2>Hero</h2>
                <p>{this.props.name} has {this.props.color} clothes and he is a {this.props.occupation}</p>
            </div>
        )
    }
}

export default Props
