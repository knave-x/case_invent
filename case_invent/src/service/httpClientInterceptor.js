import axios from "axios";



export  class HttpClient {
    instance;

   constructor(baseURL) {
    this.instance = axios.create({
      baseURL,
    });

    this._initializeResponseInterceptor();
  }

   _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError
    );
  };

   _handleResponse = ({ data }) => data;

   _handleError = (error) => {
    document.dispatchEvent(
      new CustomEvent("errorEvent", { detail: error.message })
    );
    return Promise.reject(error);
  };
}