import "./Results.css";

const ResultItem = ({ title, type }) => {
  return (
    <li>
      <p>
        <b>{title}</b>
      </p>
      {type && (
        <p>
          <small>{type}</small>
        </p>
      )}
    </li>
  );
};

const Results = ({ items }) => {
  return (
    <ul id="search-results">
      {items.map((item) => (
        <ResultItem {...item} />
      ))}
    </ul>
  );
};

export default Results;
