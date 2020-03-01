import React, { Component } from 'react'
import Basics from '../../components/basics/basics';
import Form from '../../components/forms/form';

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
            </div>
        )
    }
}

export default Main
