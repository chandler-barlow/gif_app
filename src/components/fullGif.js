import React from 'react';

export class FullGif extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            'style': {
                'visibility': 'hidden'}
            };
            this.closeView = this.closeView.bind(this);
    }
    closeView(){
        this.setState({'style': {'visibility': 'hidden'}});
    }
    render(){

        return (<div className = "fullGif" style = {this.state.style}>
                <h1 className = "close" onClick = {this.closeView}>X</h1>
                <img></img>
                <h1>Url:</h1>
                </div>);
    }
}