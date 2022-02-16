import { Card, CardGroup, Button } from 'react-bootstrap';
import { useState } from 'react';
import ModalMovie from './ModalMovie';
function MovieList(props){
    console.log(111,props);
    const [showMovie, setShowModal] = useState(false);
    const [movie, setMovie] = useState();
  return(
      <>
    <CardGroup >
                {
                    props.movies.map(movie => {
                        return <div key={movie.id}>
                            <Card key={movie.id} >
                                <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w500${movie.poster_path}`} />
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text>
                                        {movie.overview ? movie.topText : "No text"}
                                    </Card.Text>
                                    <Card.Text>
                                        {movie.caption ? movie.caption : "No Caption Added"}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => { setMovie(movie); setShowModal(true) }} >Show Modal</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    })
                }
            </CardGroup>
            {showMovie && <ModalMovie show={showMovie} movie={movie} handleColse={() => { setShowModal(false) }} updateCaption={props.updateCaption} />}
      </>
  )
}

export default MovieList;

