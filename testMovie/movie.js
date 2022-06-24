const APIKEY = "2eb66ef66d2925adb4cad7a59e86b60a";

const url =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=" +
  APIKEY +
  "&language=en-US&page=1";

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  }); //fetch의 인자는 url이고 응답으로 돌아온 response obj을 json formatt으로 파싱
