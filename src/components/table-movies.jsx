import React from "react";
import Image64 from "./image-base64";

const TableMovies = ({ data }) => {

  return (
    <div className="container">
      {data.length === 0 ? (
        "There are no movies"
      ) : (
        <table className="table" id="testTable">
          <thead>
            <tr>
              <th scope="col">Poster</th>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Year</th>
              <th scope="col">Available</th>
            </tr>
          </thead>
          <tbody>
            {data.map(el => (
              <tr key={el.imdbID}>
                <td>
                  {el.Poster ? <Image64 data={el.Poster} /> : null}
                </td>
                <td>{el.imdbID}</td>
                <td style={{'fontWeight': 'bold'}}>{el.Title}</td>
                <td>{el.Year}</td>
                <td
                  style={{ 'color': el.Available ? '#000' : '#ff0000' }}>
                  {el.Available ? 'Yes' : 'No'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableMovies;