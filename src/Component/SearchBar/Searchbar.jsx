import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import "./searchbox.css";
import { BsFillMicFill } from "react-icons/bs";

const Searchbar = () => {
  const [searches, setSearch] = useState("");//it is used to hold the value of the search input field.
  const [states, setStates] = useState([]);//store the list of states fetched from the API.
  const [filteredStates, setFilteredStates] = useState([]);//used to hold the filtered list of states based on the search input.

  useEffect(() => {
    axios
      .get("http://cdn-api.co-vin.in/api/v2/admin/location/states")
      .then((res) => {
        setStates(res.data.states);
      })
      .catch((error) => {
        console.log(error, "Error");
      });
  }, []);

  const handleInput = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
    filterStates(searchValue);
  };

  const filterStates = (searchValue) => {
    const filtered = states.filter((state) =>
      state.state_name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredStates(filtered);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        type="text"
        placeholder="Search a state"
        value={searches}
        onChange={handleInput}
      />
      <BsFillMicFill id="mic-icon" />

      <ul>
        {filteredStates.map((state) => (
          <li key={state.state_id}>{state.state_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Searchbar;
