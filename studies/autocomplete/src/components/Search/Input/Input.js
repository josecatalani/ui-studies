import "./Input.css";

const Input = ({ onChange, value, isShowingResults, ...props }) => {
  return (
    <input
      id="search-input"
      name="query"
      type="text"
      role="combobox"
      onChange={onChange}
      value={value}
      className={isShowingResults ? "results-is-open" : ""}
      {...props}
    />
  );
};

export default Input;
