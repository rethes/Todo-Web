import * as httpMethods from "./common/httpMethods.js";

class categoryApi {
  static getAllCategories() {
    return httpMethods.get('/categories');
  }
}

export default categoryApi;
