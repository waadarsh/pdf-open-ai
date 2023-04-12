import { Message } from "semantic-ui-react";

function ResultSection({ searchResults }) {
  return (
    <>
      <Message style={{ height: "100%", overflowY: "scroll" }}>
        <Message.Header>Result Window</Message.Header>
        <Message.List>
          {searchResults
            .slice()
            .reverse()
            .map((result) => (
              <Message.Item>
                <h4>{result.input}</h4> <p>{result.response}</p>
                <br />
              </Message.Item>
            ))}
        </Message.List>
      </Message>
    </>
  );
}

export default ResultSection;
