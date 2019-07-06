/* Author: Chandler Barlow
 * Description: 
 * These functions are for interacting with the tenor api
 * they're used in the main component
 */
import React from 'react';

export class GifCard extends React.Component {
    render(){
        return (<img src = {this.props.gif.media[0].gif.url}></img>)
    }
}