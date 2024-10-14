import { Component } from "react";
import "./index.css";

class Home extends Component {
  state = {
    inputValue: "loading",
  };

  componentDidMount() {
    this.getLocalData();
  }

  getLocalData = () => {
    const stringifiedData = localStorage.getItem("myData");
    const normalData = JSON.parse(stringifiedData);
    this.setState({ inputValue: normalData });
  };

  onChangeText = (event) => {
    const { inputValue } = this.state;
    this.setState({ inputValue: event.target.value });
  };

  onSubmit = () => {
    const { inputValue } = this.state;
    localStorage.setItem("myData", JSON.stringify(inputValue));
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div className="home">
        <div className="body">
          <h1 className="main-heading">Share Your Thoughts Here</h1>
          <div>
            <textarea
              className="text-area"
              onChange={this.onChangeText}
              value={inputValue}
            />
            <br />
            <button
              onClick={this.onSubmit}
              className="save-button"
              type="button"
            >
              Save Note
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
