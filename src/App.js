import React, { Component } from 'react';
import InputField from './Components/Input';
import Checkbox from './Components/Checkbox';
import searchMedia from './Services/searchMedia';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      includeImages: true,
      includeVideos: false,
      results: []
    }
  }

  handleChange = event => {

    const fieldName = event.target.name;
    this.setState({
      [fieldName]: event.target.value
    }, () => {
      const { searchInput, includeImages, includeVideos } = this.state;
      searchMedia(searchInput, includeImages, includeVideos).then(data => {
        this.setState({results: data});
      })
    });
    
  }

  handleCheckbox = event => {
    const fieldName = event.target.name; 
    this.setState({
      [fieldName]: !this.state[fieldName]
    }, () => {
      const { searchInput, includeImages, includeVideos } = this.state;
      searchMedia(searchInput, includeImages, includeVideos).then(data => {
        this.setState({results: data});
      })
    });
  }

  render() {
    const { searchInput, includeImages, includeVideos, results } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <InputField name="searchInput" value={searchInput} type="text" onChange={this.handleChange} />
          <Checkbox label="Images" name="includeImages" onChange={this.handleCheckbox} checked={includeImages} />
          <Checkbox label="Videos" name="includeVideos" onChange={this.handleCheckbox} checked={includeVideos} />
          {results.map(result => <div>{result.title}</div>)}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
