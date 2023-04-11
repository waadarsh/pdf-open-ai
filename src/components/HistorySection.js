import { Grid, Segment } from "semantic-ui-react";

function HistorySection() {
  return (
    <>
      <Grid.Row>
        <Segment textAlign="center">New Chat</Segment>
      </Grid.Row>
      <Grid.Row>
        <Segment textAlign="center">Chat Archives</Segment>
      </Grid.Row>
    </>
  );
}

export default HistorySection;
