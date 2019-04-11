import axios from 'axios';

const createUser = (data) =>{
  axios.post('https://reqres.in/api/users', { data }).then(response =>{
    console.log(response);
  })
    .catch(error=>{
      console.log(error);
    });
};

export default  createUser;






