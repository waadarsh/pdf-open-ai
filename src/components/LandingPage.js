import React, { useState } from "react";
import { Grid, Segment } from "semantic-ui-react";
import "./LandingPage.css";
import UploadSection from "./UploadSection";
import ResultSection from "./ResultSection";
import QuerySection from "./QuerySection";
import HistorySection from "./HistorySection";

function LandingPage() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div>
      <Segment>
        <Grid columns={2} divided>
          <Grid.Column width={2}>
            <HistorySection></HistorySection>
          </Grid.Column>
          <Grid.Column width={14}>
            <Grid stackable columns={2}>
              <Grid.Row>
                <Grid.Column>
                  <Segment className="child-height">
                    <UploadSection></UploadSection>
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment className="child-height">
                    <ResultSection
                      searchResults={searchResults}
                    ></ResultSection>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={16}>
                  <Segment>
                    <QuerySection
                      searchResults={searchResults}
                      setSearchResults={setSearchResults}
                    ></QuerySection>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
}

export default LandingPage;
