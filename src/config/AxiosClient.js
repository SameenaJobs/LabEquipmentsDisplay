/**
* Axios Client Configuration
*/

import axios from "axios";

//*****************************************************************/
// Common base URL configuration for Axios Client
// baseURL points to respective backend.
//*****************************************************************/S
var axiosInstance = axios.create({
  baseURL: '',
  headers: {'Content-Type': 'application/json','Accept':'application/json'},
  responseType:'json',
});
export default axiosInstance;