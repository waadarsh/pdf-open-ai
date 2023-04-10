import React, { useState } from "react";
import { Form, Input, Button, Segment } from "semantic-ui-react";

function SearchBar({ handleSearchSubmit }) {
	const [searchText, setSearchText] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		handleSearchSubmit(searchText);
	};

	const handleSearchTextChange = (event) => {
		setSearchText(event.target.value);
	};

	return (
		<Segment>
			<Form onSubmit={handleSubmit}>
				<Input
					placeholder="Type Your Query here"
					value={searchText}
					onChange={handleSearchTextChange}
					className="Inputsize"
				/>
				<Button floated="right" content="Search" type="submit" />
			</Form>
		</Segment>
	);
}

export default SearchBar;
