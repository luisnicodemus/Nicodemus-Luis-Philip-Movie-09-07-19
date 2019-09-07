const MOVIE_SERVICE = {
    getMovie : (function () {
        return $.ajax({
            type : 'get',
            url : 'https://pelec4.herokuapp.com/movies'
        })
    })
}