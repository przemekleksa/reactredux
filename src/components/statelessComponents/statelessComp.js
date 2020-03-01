import React from 'react'

// const StatelessComp = (props) => {
const StatelessComp = ({heroes}) => {
    
    // const {heroes} = props
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

export default StatelessComp
