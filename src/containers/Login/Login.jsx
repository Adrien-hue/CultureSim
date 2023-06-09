import "./Login.scss";
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';



function Login() {
  
  const schema = yup.object().shape({
    username: yup.string().required('Field void, please enter your username'),
    password: yup.string().min(5, 'Please enter a password beetween 5 and 12 character').max(12, 'Please enter a password beetween 5 and 12 character').required()
  });
  
    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
      console.log(data);
    } 
   // const [inputValue, setInputValue] = useState('')
    
   
  //  function handleInput(e) {
	//	setInputValue(e.target.value)
	//}

	
    return ( 
    <header>
    <form onSubmit={handleSubmit(onSubmit)}>
     <div class="con">
      
        <div className='lmj-Login-title'>
            <h2>Login :</h2>
            </div>
           
            
           
          <div >
                <div className='lmj-Login-read'><p>Username / e-mail:</p></div>
                    <input className="form-input"
                    type="text" 
                    name="username"
                    placeholder="Username"
                    { ...register("username")}
                    />
                    {errors.username && <div className="error-message">{errors.username.message}</div>}
                    
          </div>
           
              <div>
                    <div className="lmj-Login-read"> <p>Password :</p></div> 
                        <input className="form-input"
                        type="password" 
                        name="password"
                        placeholder="Password"
                        { ...register("password")}
                        />
                        {errors.password && <div className="error-message">{errors.password.message}</div>}
              </div><br></br>

                    <div ></div>
                        <input type="checkbox" name="remebername" id="Remembername"/> <label className="lmj-Login-check"   for="Remembername">Remember Username</label><br></br>
                    <div>
                    <br></br>

                    <div >
                      <button className="lmj-Login-button"
                            type="submit"
                            id="submit"
                            >Login</button>
                            </div>
                   
                        
                        
                    <div className="lmj-Login-read"><p>Not yet registered ? Create new account : </p></div>
                    
                    <div >
                      <button className="lmj-Login-button-sign"
                            type="submit"
                            id="submit"
                            >Sign up</button>
                            </div>
                    <div className="clear"></div>
                </div>
                 
            </div>
        </form>

     </header>
  
  );
  }
export default Login