import React, { Component } from 'react'

export class Props extends Component {
    
    render() {
        const {name, color, occupation} = this.props
        return (
            <div>
                <h2>Hero</h2>
                {/* // hardcode props */}
                <p>{this.props.name} has {this.props.color} clothes and he is a {this.props.occupation}</p>

                {/* // reusable props (Better ones) */}
                <p>{name} has {color} clothes and he is a {occupation}</p>
            </div>
        )
    }
}

export default Props
