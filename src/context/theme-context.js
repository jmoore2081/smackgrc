import React from "react";
import PropTypes from "prop-types";

const defaultState = {
  color: "yellow",
  setColor: () => {}
};

const ThemeContext = React.createContext(defaultState);

class ThemeProvider extends React.Component {
  state = {
    color: "yellow"
  };

  componentDidMount() {}

  setColor = color => {
    this.setState({
      color
    });
  }

  render() {
    const { children } = this.props;
    const { color } = this.state;
    return (
      <ThemeContext.Provider
        value={{
          color,
          setColor: this.setColor
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}

ThemeContext.propTypes = {
  contents: PropTypes.array,
  checkoutInfo: PropTypes.object
};
export default ThemeContext;

export { ThemeProvider };
