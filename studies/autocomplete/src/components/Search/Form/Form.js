import "./Form.css"

const Form = ({ children, onSubmit }) => {
  return <form id="search-form" onSubmit={onSubmit}>{children}</form>;
};

export default Form;
