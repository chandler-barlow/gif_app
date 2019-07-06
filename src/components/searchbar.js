/* Author: Chandler Barlow
 * Description: 
 * A search bar component
 */
import React from 'react';

export class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            'term': ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.search = this.search.bind(this);
    }
    
    handleChange(e){
        this.setState({'term': e.target.value});
    }

    search(e){
        // Preventing default action, really only important if I decide to change the search button to an anchor tag or something
        e.preventDefault();
        // !!! Right now null is an argument, but that should be replaced by number of gifs to return !!!
       this.props.search(this.state.term, null);
    }

    render(){
        return (
            <div className = "searchbar">
            <form>
            <input type = "text" placeholder = {this.props.placeholder} onChange = {this.handleChange}></input>
            <h1 className = "button" onClick = {this.search}>Search</h1>
            </form>
            </div>
        );
    }

}