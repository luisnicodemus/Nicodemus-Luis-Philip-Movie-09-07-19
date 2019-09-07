// Whatever you want here...
$(function(){
    var movieList = $('#movie-list');

    const getMovie = async () => {
        try{ 
            const getMovie = await MOVIE_SERVICE.getMovie();
            await getMovie.forEach(function(res) {
               console.log(res);
               MovieList(res.title, res.poster, res.plot, res.genres);
            });          
        }
        catch(ersr){
            console.log(err);
        }
    }
    function MovieList(title, poster, plot, genres){
        if(poster) {
             var Description = `<li>
                                        <a href="">
                                            <img src="${poster}"></img>
                                        </a>
                                    <h3>${title}</h3>
                                    <h3>${plot}</h3>
                                    <h3>${genres}</h3>
                                    </li>`                                
        }     
        movieList.append(Description);
    }
    getMovie();
})