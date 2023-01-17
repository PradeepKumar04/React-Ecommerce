import axios from 'axios'

const PostCall = async (url,data) => {
  return await axios.post(url, data,{
    headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`}
  })
}

export default PostCall