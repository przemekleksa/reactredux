import React, { Component } from 'react'
import Basics from '../../components/basics/basics';
import Form from '../../components/forms/form';
import Props from '../../components/props/props';
import Lists from '../../components/lists/lists';
import StatelessComp from '../../components/statelessComponents/statelessComp';
import AddHero from '../../components/addHero/addHero';
import './style.css'

export class Main extends Component {

    state = {
        heroes : [
            { name: 'Mario', color: 'red', occupation: 'plumber', id: 1},
            { name: 'Luigi', color: 'green', occupation: 'plumber', id: 2},
            { name: 'Solid Snake', color: 'grey', occupation: 'spec ops', id: 3}
        ]
    }

    addHero = (newHero) => {
        newHero.id = Math.random()*10;
        console.log(newHero)
        let heroes = [...this.state.heroes, newHero]
        this.setState({
            heroes: heroes
        })
    }

    deleteHero = (id) => {
        console.log(id)
        let heroes = this.state.heroes.filter((hero)=>{
            return hero.id !== id
        })
        this.setState({
            heroes: heroes
        })
    }

    render() {
        return (
            <div>
                {/* <Basics/>
                <Form/>
                <Props name="Mario" color="red" occupation="plumber"/>
                <Lists heroes={this.state.heroes}/> */}
                <StatelessComp heroes={this.state.heroes} deleteHero={this.deleteHero}/>
                <AddHero addHero={this.addHero} />
            </div>
        )
    }
}

export default Main
