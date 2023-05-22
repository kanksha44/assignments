import "./App.css";
import Searchbar from "./Component/SearchBar/Searchbar.jsx";

function App() {
  return (
    <div className="App">
      <div className="search-bar-container">
        <Searchbar />
        <h3>Search Results</h3>
      </div>
    </div>
  );
}

export default App;
