import React, { useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import MovieList from './MovieList';

function Home() {
    const [movies, setMovie] = useState();
    
    const fetchData = async () => {
        
        try {
            
            const response = await fetch(`https://movies-anas.herokuapp.com/trending`)
           console.log(response);
           
            const data = await response.json();
            console.log(data);
            setMovie(data);
        } catch (error) {
            console.log("error", error);
        }
    };

    const updateCaptions = (data, id) => {
        let updatedMovies = movies.map(movie => {
            if (movie.id == id) {
                movie.caption = data.userCaption;
                return movie;
            }
            else return movie
        })
        setMovie(updatedMovies);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <h1>Home Page</h1>
            <main>
                {movies && (
                    <Container fluid className="main-container">
                        <Row className="flex-row">
                            <MovieList movies={movies} updateCaption={updateCaptions} />
                        </Row>
                    </Container>
                )}
            </main>
        </>
    )
}

export default Home;
