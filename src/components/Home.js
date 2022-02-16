import React,{ useEffect, useState } from "react";
import MovieList from './MovieList';
function Home(){
    const [movies,setmovies] = useState();
    
    const fetchData = async () =>{
    try{
        const response = await fetch('https://movies-anas.herokuapp.com/trending');
        console.log(response);
        const data= await response.json();
        console.log(data);
        setmovies(data);
    
}catch(error){
    console.log(error);
}
    }
        useEffect(() =>{
            fetchData();
        },[])
    return(
        <>
        <main>
            {movies &&
        <Container fluid className="main-container">
                        <Row className="flex-row">
                            <MovieList movies ={movies}  />
                        </Row>
        </Container>
}
       </main>
        </>
    )
}
export default Home;