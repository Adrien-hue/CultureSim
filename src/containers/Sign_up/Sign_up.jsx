import './Sign_up.scss'
import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function Sign_up() {
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('');

  const schema = yup.object().shape({
    email: yup.string().email().required('Please enter a valid adress !'),
    emailConfirmation: yup.string().oneOf([yup.ref("email")]).required('Yours adresses do not match !'),
    firstname: yup.string().required('Field void, please enter your firstname !'),
    lastname: yup.string().required('Field void, please enter your lastname !'),
    country: yup.string().required('Field void, please enter your country !'),
    city: yup.string().required('Field void, please enter your city !'),
    company: yup.string().required('Field void, please enter your company'),
    gender: yup.string().oneOf(['male', 'female', 'others']).required('Please select a gender !'),
    role: yup.string().oneOf(['student', 'teacher', 'professional', 'others']).required('Please select a role !')
    //password: yup.string().min(5).max(12).required('Veuillez entrer un mot de passe compris entre 5 et 12 caractères')
  });
  
    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
      
    } 

  // const handleChangeGender = (event) => {
  //   setGender(event.target.value);
  // };

  // const handleChangeRole = (event) => {
  //   setRole(event.target.value);
  // };
     
  const handleClick = () => {
    // implementation details
  }

  return (

    <header>
    <form onSubmit={handleSubmit(onSubmit)}>
     <div class="con">
      
        <div className='lmj-Sign_up-title'>
            <h2>Sign Up :</h2>
            </div>

    
      <div className='lmj-Sign_up-read'><p>E-mail :</p></div>
      <input className = "form-input"
        type="email" 
        name="email" 
        placeholder='Email'
        { ...register("email")}
      />
      {errors.email && <div className="error-message">{errors.email.message}</div>}

      
      <div className='lmj-Sign_up-read'><p>Confirm your email :</p></div>
      <input className = "form-input"
        type="text" 
        name="emailConfirmation" 
        placeholder='Confirm your email'
        { ...register("emailConfirmation")}
      />
      {errors.emailConfirmation && <div className="error-message">{errors.emailConfirmation.message}</div>}

    

      <div className='lmj-Sign_up-read'><p>First name :</p></div>
      <input className = "form-input"
        type="text" 
        name="firstname" 
        placeholder='First name'
        { ...register("firstname")}
      />
      {errors.firstname && <div className="error-message">{errors.firstname.message}</div>}

      

      <div className='lmj-Sign_up-read'><p>Last name :</p></div>
      <input className = "form-input"
        type="text" 
        name="lastname" 
        placeholder='Last name'
        { ...register("lastname")}
      />
      {errors.lastname && <div className="error-message">{errors.lastname.message}</div>}

      

      <div className='lmj-Sign_up-read'><p>City :</p></div>
        <input className = "form-input"
          type="text" 
          name="city" 
          placeholder='Enter the city you live'
          { ...register("city")}
        />
        {errors.city && <div className="error-message">{errors.city.message}</div>}

        

        <div className='lmj-Sign_up-read'><p>Country :</p></div>
        <input className='form-input'
          type="text" 
          name="country" 
          placeholder='Enter the country you live'
          { ...register("country")}
        />
        {errors.country && <div className="error-message">{errors.country.message}</div>}

        

        <div className='lmj-Sign_up-read'><p>Company / Institution:</p></div>
        <input className = "form-input"
          type="text" 
          name="company" 
          placeholder='Enter your institution or company'
          { ...register("company")}
        />
        {errors.company && <div className="error-message">{errors.company.message}</div>}

        
        
        <div className='lmj-Sign_up-read'><p>Gender Identity :</p></div>
        <br></br>
          <input 
            type="radio" 
            name="gender"  
            value="male" 
           // checked={gender === 'male'} 
            //onChange={handleChangeGender} 
            {...register("gender")}
          /> <span className = "lmj-Sign_up-check"> Male</span>{'\u00A0\u00A0'}

          <input 
            type="radio" 
            name="gender" 
            value="female" 
           // checked={gender === 'female'} 
           // onChange={handleChangeGender} 
            {...register("gender")}
          /> <span className = "lmj-Sign_up-check"> Female</span>{'\u00A0\u00A0'}

          <input 
            type="radio" 
            name="gender" 
            value="others" 
            //checked={gender === 'others'} 
            //onChange={handleChangeGender} 
            {...register("gender")}
          /><span className = "lmj-Sign_up-check"> Others</span>
          {errors.gender && <div className="error-message">{errors.gender.message}</div>}
        
        
          <div className='lmj-Sign_up-read'><p>Role :</p></div>
          <br></br>
          <input 
            type="radio" 
            name="role"  
            value="student" 
           // checked={role === 'student'} 
           // onChange={handleChangeRole} 
          {...register("role")}
          /><span className = "lmj-Sign_up-check"> Student </span>{'\u00A0\u00A0'}
      
          <input 
            type="radio" 
            name="role" 
            value="teacher" 
           // checked={role === 'teacher'} 
           // onChange={handleChangeRole} 
            {...register("role")}
          /> <span className = "lmj-Sign_up-check"> Teacher</span>{'\u00A0\u00A0'}

          <input 
            type="radio" 
            name="role" 
            value="professional" 
            //checked={role === 'professional'} 
            //onChange={handleChangeRole} 
            {...register("role")}
          /> <span className = "lmj-Sign_up-check"> Professional</span>{'\u00A0\u00A0'}

          <input 
            type="radio" 
            name="role" 
            value="others" 
            //checked={role === 'others'} 
            //onChange={handleChangeRole} 
            {...register("role")}
          /> <span className = "lmj-Sign_up-check"> Others</span>
          {errors.role && <div className="error-message">{errors.role.message}</div>}
        < br></br>
        <br></br>

      <div>
        <button className="lmj-Sign_up-button"type="submit"  id= "submit" onClick={handleClick}>
          Sign up
        </button>
      </div>
    </div>
  </form>
</header>
  )
}

export default Sign_up;