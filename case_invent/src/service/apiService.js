import { HttpClient } from "./httpClientInterceptor";

class Service extends HttpClient {
  static instance;

  constructor() {
    super("http://www.omdbapi.com/?apikey=78e4c1ff&");
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Service();
      console.log("test saas:");
    }

    return this.instance;
  }

  getMoviesByFilter = (title, year, type, page = 1) =>
    this.instance.get(
      `&s=${title ? title : "Pokemon"}${year ? `&y=${year}` : ""}${
        type ? `&type=${type}` : ""
      }&page=${page}`
    );
  getMovieById = (id) => this.instance.get(`&i=${id ? id : ""}`);
}

export default Service.getInstance();
