import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import PDFUpload from "./PDFUpload";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import ChatHeader from "./ChatHeader";

function Testing() {
	// ...
	return (
		<div>
			<Grid columns={2} divided>
				<Grid.Column width={2}>
					<ChatHeader
						chatTitle={chatTitle}
						handleNewChatClick={handleNewChatClick}
					/>
				</Grid.Column>
				<Grid.Column width={14}>
					<Grid stackable columns={2}>
						<Grid.Row>
							<Grid.Column>
								<PDFUpload
									handleSubmit={handleSubmit}
									handleFileChange={handleFileChange}
								/>
							</Grid.Column>
							<Grid.Column>
								<SearchResults searchResults={searchResults} />
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column width={16}>
								<SearchBar
									searchText={searchText}
									handleSearchSubmit={handleSearchSubmit}
									handleSearchTextChange={handleSearchTextChange}
								/>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Grid.Column>
			</Grid>
		</div>
	);
}

export default Testing;
