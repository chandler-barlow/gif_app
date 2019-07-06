/* Author: Chandler Barlow
 * Description: 
 * Component that renders the gif
 */
import React from 'react';

export class GifCard extends React.Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.props.viewGif(this.props.gif);
    }

    render(){
        return (<img src = {this.props.gif.media[0].gif.url} onClick = {this.handleClick}></img>)
    }
}