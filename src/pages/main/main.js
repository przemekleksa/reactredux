import React, { Component } from 'react'
import Basics from '../../components/basics/basics';
import Form from '../../components/forms/form';
import Props from '../../components/props/props';
import Lists from '../../components/lists/lists';

export class Main extends Component {
    
    // hide = (e) =>{
    //     console.log(e)
    // }
    state = {
        heroes : [
            { name: 'Mario', color: 'red', occupation: 'plumber', id: 1},
            { name: 'Luigi', color: 'green', occupation: 'plumber', id: 2},
            { name: 'Solid Snake', color: 'grey', occupation: 'spec ops', id: 3}
        ]
    }

    render() {
        return (
            <div>
                <Basics/>
                {/* <button onClick={this.hide}>hide component</button> */}
                <Form/>
                <Props name="Mario" color="red" occupation="plumber"/>
                <Lists heroes={this.state.heroes}/>
            </div>
        )
    }
}

export default Main
