import './Edit_Country.scss'
import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function Edit_Country() {
const schema = yup.object().shape({
    country: yup.string().required('Field void, please enter your country !'),
    description: yup.string().required('Field void, please enter your description !'),
    photo: yup.string().required('Field void, please put your photo !'),
    
})


const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    
  } 

  const handleClick = () => {
    // implementation details
  }

  
    const [previewSrc, setPreviewSrc] = useState('');
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];

      if (file) {
            const reader = new FileReader();
            reader.onload = () => {
            setPreviewSrc(reader.result);
            };
            reader.readAsDataURL(file);
            } 

      else {
               setPreviewSrc('');
            }
    };

  return (

         <header>
         <form onSubmit={handleSubmit(onSubmit)}>
          <div class="conss">
           
          <div className='lmj-Edit_Country-title'>
            <h2>Add Country :</h2>
            </div>

            <div className='lmj-Edit_Country-read'><p>Country :</p></div>
            <input className = "form-input"
            type="text" 
            name="country" 
            placeholder='Country'
            { ...register("country")}
      />
            {errors.country && <div className="error-message">{errors.country.message}</div>}
            
            <div className='lmj-Edit_Country-read'><p>Description :</p></div>
            <textarea className = "form-input"
            type="text" 
            name="description" 
            placeholder='Description'
            { ...register("description")}
      />
            {errors.description && <div className="error-message">{errors.description.message}</div>}
            
           
            <br></br>
            <br></br>
            
            <div className='lmj-Edit_Country-read'><p>Photo :</p></div>
            
            
            <label for="photo" class="lmj-Edit_Country-photo">
            <input type="file" 
            id="photo" 
            name="photo" 
            accept="image/*" 
            onChange={handleFileChange}
            required
            />
           
            {previewSrc && (
             <img  src={previewSrc} alt="Aperçu de la photo" style={{ display: 'block', height: '100px', width: '100px' }} />
            )}
            </label>
            
            
            
            <div>
        <button className="lmj-Edit_Country-button"type="submit"  id= "submit" onClick={handleClick}>
          Add country
        </button>
      </div>

           </div>
          </form>
        </header>
  )
}
export default Edit_Country;

