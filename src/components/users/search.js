import React, {Component} from 'react';

export class Search extends Component {
    state = {
        text: ''
    };

    onChange = (e) => {
        this.setState({ text: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();

    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className= "form">
                    <input type="text"
                           name="text"
                           placeholder="Search Users"
                            value={this.state.text}
                            onChange={this.onChange}/>
                    <input type="submit" value="search" className="btn btn-darn btn-block"/>
                </form>
            </div>
        );
    }
}

export default Search;