import "./Modal.css";

const Mask = (props) => {
  return <div id="mask" {...props} />;
};

const Wrapper = (props) => {
  return <div id="wrapper" {...props} />;
};

const Header = (props) => {
  return <header {...props} />;
};

const Container = (props) => {
  return (
    <div
      id="container"
      className={props.isVisible ? "fade-in" : ""}
      {...props}
    />
  );
};

const Content = (props) => {
  return <div id="content" {...props} />;
};

const Footer = (props) => {
  return <footer {...props} />;
};

export { Mask, Wrapper, Header, Container, Content, Footer };
