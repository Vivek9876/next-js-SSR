import React, { Component } from 'react';
import { concertData } from '../data/data';
export class Autocomplete extends Component {
    static propTypes = {};
    static defaultProperty = {
        suggestions: []
    };
    constructor(props) {
        super(props);
        this.state = {
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: ''
        };
    }

    onChange = (e) => {
        const { suggestions } = this.props;
        const userInput = e.currentTarget.value;

        const filteredSuggestions = suggestions.filter(
            (suggestion) =>
                suggestion.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        this.setState({
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value
        });
    };

    render() {
        const {
            onChange,
            onClick,
            onKeyDown,
            state: {
                filteredSuggestions,
                showSuggestions,
                userInput
            }
        } = this;
        let suggestionsListComponent;
        if (showSuggestions && userInput) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                    <div className="col-md-6">
                        {filteredSuggestions.map((suggestion, index) => {

                            return (
                                <section key={suggestion.name} className="search-result-item" onClick={onClick}  style={{backgroundColor:"#eee",marginLeft:"-8%"}}>
                                    <a class="image-link" href="#"><img src={suggestion.imageUrl} className="suggestion"/>
                                    </a>
                                     
                                     <div class="search-result-item-body">
                                         <div class="row"> 
                                    {/* <img src={suggestion.imageUrl} className="suggestion"/> */}
                                    {/* <div style={{ paddingTop: "0.2em", color: "rgba(255,255,255,1)" }} > */}
                                        <span>{suggestion.name}</span>
                                        <span>{suggestion.date}</span>
                                        <span>{suggestion.city}</span>
                                        <span>{suggestion.state}</span>
                                        <span>{suggestion.type}</span>
                                    </div>
                                    </div>
                                </section>
                            );
                        })}
                     </div>
                );
            } else {
                suggestionsListComponent = (
                    <div class="no-suggestions">
                        <em>No suggestions!</em>
                    </div>
                );
            }
        }
        return (
            <React.Fragment>
                <input
                    type="text"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={userInput}
                />
                {suggestionsListComponent}
            </React.Fragment>
        );
    };
}
export default Autocomplete;