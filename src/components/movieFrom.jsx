import React, { Component } from 'react';

const MovieFrom = ({match, history}) => {
    return (
    <div>
        <h1>MovieForm {match.params.id}</h1>
        <button className="btn btn-primary" onClick={()=>history.push('/movies')}>Save</button>
    </div>  
    );
}
 
export default MovieFrom;
  