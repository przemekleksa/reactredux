import React from 'react'

// const StatelessComp = (props) => {
const StatelessComp = ({heroes, deleteHero}) => {
    
    // const {heroes} = props
    const heroesList = heroes.map(hero => {
        return hero.id > 1 ? ((
            <div className='hero' key={hero.id}>
                <p>{hero.name} is {hero.color} and his occupation is a {hero.occupation}</p>
                <button onClick={() => {deleteHero(hero.id)}}>Delete</button>
            </div>
        )) : null
    })
    
    return (
        <div className="heroes">
            <h2>Heroes</h2>
            {heroesList}
        </div>
    )
    
}

export default StatelessComp
