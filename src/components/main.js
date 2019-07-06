/* Author: Chandler Barlow
 * Description: 
 * These functions are for interacting with the tenor api
 * they're used in the main component
 */

import React from 'react';
import Spinner from 'react-spinner-material';
import {getTrendingGifs, getGifByTerm} from '../util/tenor';
import {GifCard} from './gifcard';
import {SearchBar} from './searchbar';
import './style.css';
export class Main extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            'gifs': null
        };
        this.search = this.search.bind(this);
    }
    
    // When component mounts an empty search is performed
    componentDidMount(){
        getGifByTerm('', null)
        .then( gif => {
            this.setState({'gifs': gif});
        });
    }
    
    search(term, amount){
        this.setState({'gifs': null});
        getGifByTerm(term, amount)
        .then( gif => {
            this.setState({'gifs': gif});
        });
    }  
    

    render(){
        return (
            <div>
            <SearchBar search = {this.search}/>
            {this.state.gifs === null ?
                <Spinner className = "spinner" size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true} />: 
                this.state.gifs.map(gif =>{
                    return <GifCard gif = {gif}/>;
                })}
            </div>
        );
    }
}