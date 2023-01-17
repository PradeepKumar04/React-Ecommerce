import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { DOMAIN, LOGIN } from '../API/APIConstants';
import PostCall from '../API/PostCall';
import userContext from '../Context/userContext';

const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigation = useNavigate();
  const user =useContext(userContext);


  const handleSubmit = async (e) => {
    e.preventDefault();
    // setEmail('');
    // setPassword('');
  let data= await PostCall(DOMAIN+LOGIN,{email:email,password:password})
  console.log(data);
  user.updateUserDetails({isAdmin:data.data.data.isAdmin,userId:data.data.data.userId,token:data.data.data.token});
    localStorage.setItem('token',data.data.data.token);
    navigation('/');
  }
  return (
    <div className='container'>
            <div className="row">
                <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <div className="card text-center" style={{"width": "18rem;"}}>
                    <div className="card-body">
                        <div className='row form-group m-4'>
                            <div className='col-6'>
                                <label htmlFor='email'>Email</label>
                            </div>
                            <div className='col-6'>
                                <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type='email' required className='form-control' name='email' />
                            </div>
                        </div>
                        <div className='row form-group m-4'>
                            <div className='col-6'>
                                <label htmlFor='password'>Password</label>
                            </div>
                            <div className='col-6'>
                                <input value={password } onChange={(e)=>{setPassword(e.target.value)}} required type='password' className='form-control' name='password' />
                            </div>
                        </div>
                        <button type='submit' className="btn btn-primary">Login</button>
                    </div>
                </div>

            </form>
            </div>
    </div>
  )
}

export default Login