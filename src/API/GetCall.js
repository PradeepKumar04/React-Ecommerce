import axios from 'axios';

const GetCall = async (url) => {
    return await axios.get(url,{
      headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`}
    })
  }

  export default GetCall;