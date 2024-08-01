const TemperatureBox = ({ label, value, onChange }) => {
  const onChangeHandler = (event) => {
    const value = event.target.value;
    onChange(label, value);
  };

  return (
    <div className="temperature-box">
      <input
        type="text"
        className="temperature-box-value"
        onChange={onChangeHandler}
        value={value}
      />
      <div className="temperature-box-header">{label}</div>
    </div>
  );
};

export default TemperatureBox;
