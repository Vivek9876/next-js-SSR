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
                    <ul class="suggestions">
                        {filteredSuggestions.map((suggestion, index) => {

                            return (
                                <li key={suggestion.name} onClick={onClick}>
                                    {suggestion.name}
                                    <img src={suggestion.imageUrl} />
                                    <div style={{ paddingTop: "0.2em", color: "rgba(255,255,255,1)" }} >
                                        {suggestion.name}
                                        {suggestion.date}
                                        {suggestion.city}
                                        {suggestion.state}
                                        {suggestion.type}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
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