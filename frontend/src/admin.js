import React, { useState , useEffect } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import './login.css';


function Login  (){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const navigate = useNavigate();
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // Check if the username and password match the manual user
        if (username === 'admin' && password === 'password') {
          // Perform login process with the server
          const response = await axios.post('http://localhost:5000/login', { username, password });
        
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        window.location.href = "/dashboard"; // Redirect to dashboard on successful login
      } else {
        setError('Invalid credentials. Please try again.');
      }
    }
    } catch (error) {
      console.error('Login Error:', error);
      setError('Login failed. Please try again.');
    }
  };

     // Function to create manual user "Aadmin" with password "password"
     const createManualUser = async () => {
      try {
          // Request to create manual user
          const response = await axios.post('http://localhost:5000/createUser', {
              username: 'admin',
              password: 'password'
          });
          console.log('Manual user created successfully:', response.data.message);
      } catch (error) {
          console.error('Failed to create manual user:', error);
      }
  };
           // Call createManualUser when component mounts (on initial render)
    useEffect(() => {
      createManualUser();
    }, []);

      

      
    

    return(
             <div className="Login-container d-flex justify-content-center">
            <div className="col-md-6 d-flex justify-content-cente mt-4">
          <form onSubmit={handleSubmit}>
            <h1 className="lead mb-4">LOGIN</h1>
            <div className="mb-3">
              <label htmlFor="userId" className="form-label">User ID:</label>
              <input
                type="text"
                id="userId"
                name="userId"
                style={{ width: "250px" }}
                onChange={(e)=>setUsername(e.target.value)}
                className="form-control"
              
              />
                
            </div>
            <div className="mb-3">
              <label htmlFor="Password" className="form-label">Password:</label>
              <input
                type="Password"
                id="  Password"
                name="Password"
                style={{ width: "250px" }}
                onChange={(e)=>setPassword(e.target.value)}
                className="form-control"
              />
               
            </div>
            
            <button type="submit" className="btn btn-primary">Login</button>
           
          </form>
          
        </div>
        </div>
    );
}

 export default Login;