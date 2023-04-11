import React, { useState } from "react";
import axios from "axios";
import "./LandingPage.css";
import { Input, Button, Form } from "semantic-ui-react";

function QuerySection({setSearchResults}) {
  const [searchText, setSearchText] = useState("");
  
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("handle search submit clicked");
    if (searchText) {
      console.log("search text entered:", searchText);
      axios
        .post("http://127.0.0.1:8000/search", { searchText })
        .then((response) => {
          const data = Array.isArray(response.data)
            ? response.data
            : [response.data];
          setSearchResults((prevResults) => [...prevResults, ...data]);
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <>
      <Form onSubmit={handleSearchSubmit}>
        <Input
          placeholder="Type Your Query here"
          value={searchText}
          onChange={handleSearchTextChange}
          className="Inputsize"
        />
        <Button floated="right" content="Search" type="submit" />
      </Form>
    </>
  );
}

export default QuerySection;
