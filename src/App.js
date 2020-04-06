import React from 'react';
import './App.css';
import SerieRow from './SerieRow.js'
import $ from 'jquery'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.performSearch("")
  }

  performSearch(searchTerm) {
    console.log("Perform search using MovieDB")
    const urlString = "https://api.themoviedb.org/3/search/tv?api_key=c1a5fbe6d07b55e2a3778ea6191ed8ee&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully!")
        const results = searchResults.results

        var serieRows = []

        results.forEach((serie) => {
          serie.poster_src = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/" + serie.poster_path
          const serieRow = <SerieRow key={serie.id} serie={serie} />
          serieRows.push(serieRow)
        })
        this.setState({rows: serieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data.")
      }
    })
  }

  searchChangeHandler(event) {
    const searchTerm = event.target.value
    const boundObject = this
    this.performSearch(searchTerm)
  }

  render() {
    return (
      <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="App icon" width="50" src="green_app_icon.svg" />
              </td>
              <td width="10" />
              <td>
                <h1>TvShowsDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input placeholder="Enter search term..." onChange={this.searchChangeHandler.bind(this)} className="searchPlaceholder"/>
        {this.state.rows}
      </div>
    );
}
}


export default App;
