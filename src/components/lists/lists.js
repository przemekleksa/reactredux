import React, { Component } from 'react'

export class Lists extends Component {
    render() {
        const {heroes} = this.props
        const ninjaList = heroes.map((hero, key) => {
            return (
                <div className='hero' key={hero.id}>
                    <p>{hero.name} is {hero.color} and his occupation is {hero.occupation}</p>
                </div>  
            )
        })
        return (
            <div className="heroes">
                <h2>Heroes</h2>
                {ninjaList}
            </div>
        )
    }
}

export default Lists
