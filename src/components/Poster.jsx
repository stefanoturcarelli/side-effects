import { useState, useEffect } from "react";

// Running asynchronous code in the useEffect Hook

function Poster() {
  const [movie, setMovie] = useState("");
  const [poster, setPoster] = useState("");
  const url = "https://www.omdbapi.com/";
  const API_KEY = "?apikey=3c118ac7";

  // https://www.omdbapi.com/?apikey=[your-api-key]&t=the-godfather
  // Replace '[your-api-key]' with your own API key

  // const updateMovie
  // get the movie slug
  // setMovie(movie-slug)

  const updateMovie = (event) => {
    event.preventDefault();
    setMovie(event.target.movie.value.trim());
    event.target.movie.value = "";
  };

  // useEffect
  // fetch the movie and print the poster
  // run it whenever 'movie' changes

  // Asynchronous function to fetch movie data
  useEffect(() => {
    // Defining a function inside useEffect
    const fetchData = async () => {
      try {
        const response = await fetch(`${url + API_KEY + "&t=" + movie}`);
        if (!response.ok) {
          throw new Error(`${response.statusText} (${response.status})`);
        }
        // Parsing the response as JSON
        const data = await response.json();

        // Check if the response contains the poster property
        if (data.Response === "True" && data.Poster) {
          setPoster(data.Poster);
        } else {
          setPoster("");
        }
      } catch (error) {
        setPoster("");
        console.log(error);
      }
    };

    // useEffect always runs when the component mounts
    if (movie.length > 0) fetchData();
  }, [movie]);

  const moviePoster = (
    <figure>
      <img src={poster} alt={poster} />
    </figure>
  );

  const notFound = <p>Movie not found</p>;

  return (
    <section>
      <div className="container">
        <h2>Running asynchronous code with useEffect</h2>
        <div className="form-container">
          <form onSubmit={updateMovie}>
            <input type="text" placeholder="Enter a movie title" name="movie" />
            <input type="submit" value="Get poster" />
          </form>
          {poster.length > 0 ? moviePoster : notFound}
        </div>
      </div>
    </section>
  );
}

export default Poster;
