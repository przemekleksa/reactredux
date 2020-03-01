import React, { Component } from 'react'
import Basics from '../../components/basics/basics';
import Form from '../../components/forms/form';
import Props from '../../components/props/props';

export class Main extends Component {
    
    // hide = (e) =>{
    //     console.log(e)
    // }

    render() {
        return (
            <div>
                <Basics/>
                {/* <button onClick={this.hide}>hide component</button> */}
                <Form/>
                <Props name="Mario" color="red" occupation="plumber"/>
            </div>
        )
    }
}

export default Main
