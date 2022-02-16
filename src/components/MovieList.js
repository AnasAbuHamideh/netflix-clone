import { Card, CardGroup, Button } from 'react-bootstrap';
function MovieList(props){
    console.log(111,props);
  return(
      <>
    <CardGroup>
        {props.movies.map((movie) =>{
        return (
            <div>
              <Card>
                <Card.Img variant='top' src={movie.poster_path}/>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </div>
          )}
        )}
      </CardGroup>
      </>
  )
}

export default MovieList;