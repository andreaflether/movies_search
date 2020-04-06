import React from 'react';

class SerieRow extends React.Component {
  viewSerie() {
    const url = "https://www.themoviedb.org/tv/" + this.props.serie.id
    window.location.href= url
  }

  render() {
    return <table key={this.props.serie.id}>
      <tbody>
        <tr>
          <td>
            <img alt="Poster" width="120" src={this.props.serie.poster_src} />
          </td>
          <td>
            <h3>{this.props.serie.title}</h3>
            <p>{this.props.serie.overview}</p>
            <input type="button" onClick={this.viewSerie.bind(this)} value="View" />
          </td>
        </tr>
      </tbody>
    </table>
  }
}

export default SerieRow;
