import axios from 'axios';

/**
 * Generic function to make HTTP requests
 * @param {string} method - The HTTP method
 * @param {string} url - The URL for the request
 * @param {object} [data=null] - The data for the request
 * @param {object} [headers=null] - Any additional headers
 * @return {Promise} - The resulting Promise
 */
const httpRequest = async (method, url, data = null, headers =  {
  'Content-Type': 'application/json',
}) => {
  
  try {
    
    const response = await axios({
      method,
      url,
      data,
      headers
    });
    return response.data;
  } catch (error) {
    // Handle error response accordingly
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    throw error;
  }
};
export default httpRequest;
