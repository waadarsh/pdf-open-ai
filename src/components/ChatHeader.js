import React from "react";
import { Segment, Button, Icon } from "semantic-ui-react";

function ChatHeader({ title, onNewChatClick }) {
	return (
		<Segment>
			{title && (
				<>
					<h4>{title}</h4>
					<Button
						icon
						labelPosition="right"
						onClick={onNewChatClick}
						style={{ marginTop: "5px" }}
					>
						New Chat
						<Icon name="delete" />
					</Button>
				</>
			)}
		</Segment>
	);
}

export default ChatHeader;
