import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import Pagination from './common/pagination';
import {paginate} from '../utils/paginate' ;
import ListGroup from './common/listGroup';
import { getGenres } from '../services/fakeGenreService';
import { filter } from 'lodash';
import MoviesTable from './moviesTable';

class Movies extends Component {
    state = {  
        movies : [],
        genres : [],
        pageSize: 4,
        currentPage: 1
    };

    componentDidMount() {
        const genres = [{name:'All Genres'}, ...getGenres()];
        this.setState({movies : getMovies(), genres :genres });
    };

    handleDelete = (movie) => {
        const movies1 = this.state.movies.filter( m => m._id !== movie._id);
        this.setState({movies:movies1});
    };

    handleGenreSelect = genre =>{
      this.setState({selectedGenre : genre, currentPage: 1});
    };

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
    };

    handlePageChange = page =>{
        this.setState({currentPage: page});
    }

    render() { 
        const {length:count} = this.state.movies; 
        const {pageSize, selectedGenre, currentPage, movies : allMovies} = this.state;
        if(count===0) return <p>There is no movie in the database.</p>

        const filtered = selectedGenre && selectedGenre._id 
            ? allMovies.filter( m => m.genre._id === selectedGenre._id) 
            : allMovies ;


        const movies = paginate(filtered, currentPage, pageSize);
        return (
        <div className='row'>
            <div className="col-2">
            <ListGroup items={this.state.genres} 
                       selectedItem={this.state.selectedGenre}
                       onItemSelect={this.handleGenreSelect } 
            />
            </div> 
            <div className="col">
            <p>There is {filtered.length} movies in the database.</p>
            <MoviesTable movies={movies} 
                         onLike={this.handleLike} 
                         onDelete={this.handleDelete}
            />
            <Pagination 
                itemSize = {filtered.length} //can use object destructor {count}
                pageSize={pageSize}
                currentPage={currentPage} 
                onPageChange={this.handlePageChange} 
            />
            </div>
        </div>
        );
    }
}
 
export default Movies;