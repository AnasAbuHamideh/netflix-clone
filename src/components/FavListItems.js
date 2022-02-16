import { Button, Card, CardGroup } from "react-bootstrap";

function FavListItems(props){
    return(
        <>
        <CardGroup style={{ display: "flex" }}>
            {

                (props.favoriteList ?? []).map(movie => {
                    return (
                        <Card key={movie.id}>
                            <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w500${movie.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>
                                    {movie.caption}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })
            }


        </CardGroup>
        </>
    )
}

export default FavListItems;