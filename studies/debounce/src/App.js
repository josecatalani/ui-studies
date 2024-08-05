import "./App.css";
import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  useEffect(() => {
    console.log("This will be triggered whenever the debounced value changes.", Math.random());
  }, [debouncedSearchTerm]);

  return (
    <div className="App">
      <form>
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </form>
      <p>The search term is {debouncedSearchTerm}</p>
    </div>
  );
}

export default App;
