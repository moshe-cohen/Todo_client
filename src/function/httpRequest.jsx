import axios from 'axios';


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
    
    if (error.response) {
      
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      
      console.log(error.request);
    } else {
      
      console.log('Error', error.message);
    }
    throw error;
  }
};
export default httpRequest;
