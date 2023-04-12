import React, { useState, useEffect } from 'react';
import { List } from 'semantic-ui-react';
import axios from 'axios';

function HistorySection() {
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    // Fetch search history from the Flask API
    axios.get('http://localhost:8000/history').then((response) => {
      console.log(response);
      setSearchHistory(response.data || []);
    });
  }, []);

  return (
    <>
      <h3>Search History</h3>
      <List>
        {searchHistory.map((search, index) => (
          // rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <List.Item key={index}>
            <List.Content>
              <List.Header>{search.input}</List.Header>
              {/* <List.Description>{search.response}</List.Description> */}
            </List.Content>
          </List.Item>
        ))}
      </List>
    </>
  );
}

export default HistorySection;
