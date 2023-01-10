import { HttpClient } from "./httpClientInterceptor";


class Service extends HttpClient {
   static instance

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
  
   homeYear = (year) =>
  this.instance.post(`&s=${year }`, year);

   homeMovie  = (title) =>
  this.instance.post(`&s=${title ? title : "Pokemon"}`, title);

}

export default Service.getInstance();