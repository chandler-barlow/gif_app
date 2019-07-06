/* Author: Chandler Barlow
 * Description: 
 * Main component of gif app
 */

import React from 'react';
import Spinner from 'react-spinner-material';
import {getTrendingGifs, getGifByTerm} from '../util/tenor';
import {GifCard} from './gifcard';
import {SearchBar} from './searchbar';
import{FullGif} from './fullGif';
import './style.css';
export class Main extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            'gifs': null
        };
        this.search = this.search.bind(this);
        this.viewGif = this.viewGif.bind(this);
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
    
    viewGif(gif){
        console.log(gif);
    }


    render(){
        return (
            <div>
            <SearchBar placeholder = {'Search for a gif..'} search = {this.search}/>
            <FullGif/>
            {this.state.gifs === null ?
                <Spinner className = "spinner" size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true} />: 
                this.state.gifs.map(gif =>{
                    return <GifCard gif = {gif} viewGif = {this.viewGif}/>;
                })}
            </div>
        );
    }
}