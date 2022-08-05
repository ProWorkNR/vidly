import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';

class Movies extends Component {
    state = {  
        movies : getMovies(),
    } ;

    handleDelete = (movie) => {
        const movies1 = this.state.movies.filter( m => m._id !== movie._id);
        this.setState({movies:movies1});
    }
    render() { 
        if(this.state.movies.length===0) return <p>There is no movie in the database.</p>

        return (
            <><p>There is {this.state.movies.length} movies in the database.</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                    </tr>
                </thead>
                {this.state.movies.map(movie => (
                    <tr key={(movie._id)}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><button onClick={() => { this.handleDelete(movie); } } className="btn btn-danger btn-sm"> Delete </button></td>
                    </tr>
                ))}

            </table></>
        );
    }
}
 
export default Movies;