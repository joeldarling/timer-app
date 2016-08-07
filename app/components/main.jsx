const React = require('react');

const Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <h1> Main.jsx Render </h1>
          { props.children }
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
