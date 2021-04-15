import React from "react";

class SearchBar extends React.Component {
	state = { term: "" };

	onFomrSubmit = event => {
		event.preventDefault();

		this.props.onSubmit(this.state.term);
	};

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFomrSubmit} className="ui from">
					<div className="field">
						<label htmlFor="search-bar">Image Search </label>
						<input id="search-bar"
							type="text"
							value={this.state.term}
							onChange={e => this.setState({ term: e.target.value })}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
