import './EditUser.scss'
import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const EditUser=()=> {
    const schema = yup.object().shape({
        name_user: yup.string().required('Field void, please enter your context !'),
        first_name_user: yup.string().required('Field void, please put your comment !'),
        username_user: yup.string().required('Field void, please put your comment !'),
        password_user: yup.string().min(8).required("Password has left blank!"),
        mail_user: yup.string().email().required('Field void, please put your comment !'),
        
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
      });
    
      const onSubmit = (data) => {
        
      } 

      return (

        <header>
        <form onSubmit={handleSubmit(onSubmit)}>
         <div class="cont">
          
         <div className='lmj-Edit_User-title'>
           <h2>Edit User :</h2>
           </div>

           <div className='lmj-Edit_User-read'><p>Name user :</p></div>
            <input className = "form-input"
            type="text" 
            name="name_user" 
            placeholder='Name user'
            { ...register("name_user")}
      />
            {errors.name_user && <div className="error-message">{errors.name_user.message}</div>}

            <div className='lmj-Edit_User-read'><p>First name user :</p></div>
            <input className = "form-input"
            type="text" 
            name="first_name_user" 
            placeholder='first name user'
            { ...register("first_name_user")}
      />
            {errors.first_name_user && <div className="error-message">{errors.first_name_user.message}</div>}

            <div className='lmj-Edit_User-read'><p>Username user :</p></div>
            <input className = "form-input"
            type="text" 
            name="username_user" 
            placeholder='Username user'
            { ...register("username_user")}
      />
            {errors.username_user && <div className="error-message">{errors.username_user.message}</div>}

            <div className='lmj-Edit_User-read'><p>Password user :</p></div>
            <input className = "form-input"
            type="password" 
            name="password_user" 
            placeholder='Password user'
            { ...register("password_user")}
      />
            {errors.password_user && <div className="error-message">{errors.password_user.message}</div>}

            <div className='lmj-Edit_User-read'><p>Access user:</p></div>
                 <select className="form-select">
                 <option value="0">User</option>
                 <option value="1">Editor</option>
                 <option value="2">Administrator</option>
                 </select>
             <br></br>

            <div className='lmj-Edit_User-read'><p>Mail user :</p></div>
            <input className = "form-input"
            type="email" 
            name="mail_user" 
            placeholder='Mail user'
            { ...register("mail_user")}
      />
            {errors.mail_user && <div className="error-message">{errors.mail_user.message}</div>}

          
            
             <div className="lmj-Edit_User-read"><p>Status User :</p></div>
		       
             <select className="form-select" name="status_user" >
                 <option value="0">Student</option>
                 <option value="1">Teacher</option>
                 <option value="2">Professional</option>
                 <option value="3">Others</option>
                 </select>
		      
		      
            <br></br>
            <button className="lmj-Edit_User-button"type="submit"  id= "submit">
          Edit User
        </button>

           </div>
          </form>
        </header>
  )
}
export default EditUser;