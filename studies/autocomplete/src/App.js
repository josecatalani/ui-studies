import { useState } from "react";
import "./App.css";
import * as Search from "./components/Search";
import SearchAPI from "./services/search";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState("");

  const onFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await SearchAPI.doQuery(query);
      setResults(response);
      setShowResults(true);
      setError("");
    } catch (error) {
      setError(error.message);
      setResults([]);
      setShowResults(false);
    }
  };

  const onInputChange = (e) => {
    const { value } = e.target;

    if (value === "") setShowResults(false);

    setQuery(value);
  };

  return (
    <main id="main">
      <Search.Wrapper>
        <Search.Form onSubmit={onFormSubmit}>
          <Search.Input
            onChange={onInputChange}
            value={query}
            isShowingResults={showResults}
          />
          {showResults && results.length > 0 && (
            <Search.Results items={results} />
          )}
          {error && <p>Error, please retry in a few minutes.</p>}
        </Search.Form>
      </Search.Wrapper>
    </main>
  );
}

export default App;
