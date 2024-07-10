const Helmet = (props) => {
  // Set document title with a default value if props.title is not provided
  document.title = "Pizza Time! - " + props.title;
  // Render all pages inside a div with full width 100%
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
