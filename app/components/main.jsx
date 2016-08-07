const React = require('react');

const Nav = require('Nav');

const Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <Nav/>
          <h1> Main.jsx Render </h1>
          { props.children }
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
