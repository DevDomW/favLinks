import React from 'react';
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            favLinks: []
        }
    }
    removeLink = index => {
        //  Create a removeLink function in the LinkContainer 
        //  class that updates the state and removes an item from favLinks
        this.setState(({favLinks}) => ({
            favLinks: favLinks.filter((_,i) => i !== index)
        }));
    }

    removeCharacter = index => {
        this.setState(({favLinks}) => ({
            favLinks: favLinks.filter((_,i) => i !== index)
        }));
    }

    handleSubmit = favLink => {
        this.setState((state) => ({
            favLinks: state.favLinks.concat(favLink)
        }));
    }

    render() {

        const favLinks = this.state.favLinks;

        return (
            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>
                <Table linkData = {favLinks} removeLink = {this.removeCharacter}/>
                
                <br/>

                <h3>Add New</h3>
                <Form handleSubmit = {this.handleSubmit}/>
            </div>
        );
    }
}

export default LinkContainer;