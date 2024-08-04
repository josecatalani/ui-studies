import { useState } from "react";
import "./AutoComplete.css";
import { useDebounce } from "../hooks/useDebounce";
import { fetchData } from "../services/data";

const DropDown = ({ items, query }) => {
  const insertUnderscore = (title) => {
    const regex = new RegExp(`(${query})`, "gi");
    return title.replace(regex, "<u>$1</u>");
  };
  return (
    items.length > 0 && (
      <ul id="dropdown">
        {items.map((item) => {
          return (
            <DropDownItem {...item} title={insertUnderscore(item.title)} />
          );
        })}
      </ul>
    )
  );
};

const DropDownItem = ({ id, title, year }) => {
  return (
    <li className="result-item">
      {title && <p dangerouslySetInnerHTML={{ __html: title }} />}
      {id && year && (
        <p>
          #{id} - {year}
        </p>
      )}
    </li>
  );
};

const SearchBar = ({ onChange, onSubmit, hasResults }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div id="searchbar" className={hasResults ? "has-results" : ""}>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} autoFocus />
      </form>
    </div>
  );
};

const AutoComplete = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  const doSearch = useDebounce(async (value) => {
    const albums = await fetchData(`/search?q=${value}`);
    setItems(albums);
  }, 500);

  const onChange = (value) => {
    if (value !== "") {
      setQuery(value);
      doSearch(value);
    } else {
      setItems([]);
    }
  };

  const hasResults = items.length;

  const onSubmit = async () => doSearch(query);

  return (
    <div id="container">
      <SearchBar
        onChange={onChange}
        onSubmit={onSubmit}
        hasResults={hasResults}
      />
      <DropDown items={items} query={query} />
    </div>
  );
};

export default AutoComplete;
