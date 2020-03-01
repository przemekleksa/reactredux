import React, { Component } from 'react'
import Basics from '../../components/basics/basics';
import Form from '../../components/forms/form';
import Props from '../../components/props/props';
import Lists from '../../components/lists/lists';
import StatelessComp from '../../components/statelessComponents/statelessComp';

export class Main extends Component {

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
                {/* <Basics/>
                <Form/>
                <Props name="Mario" color="red" occupation="plumber"/>
                <Lists heroes={this.state.heroes}/> */}
                <StatelessComp heroes={this.state.heroes}/>
            </div>
        )
    }
}

export default Main
