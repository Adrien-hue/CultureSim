import './Edit_CaseStory.scss'
import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function Edit_CaseStory() {
const schema = yup.object().shape({
    context: yup.string().required('Field void, please enter your context !'),
    commentaire1: yup.string().required('Field void, please put your comment !'),
    commentaire2: yup.string().required('Field void, please put your comment !'),
    commentaire3: yup.string().required('Field void, please put your comment !'),
    commentaire4: yup.string().required('Field void, please put your comment !'),
    commentairefinal: yup.string().required('Field void, please put your comment !'),
    interpretation1: yup.string().required('Field void, please put your answer !'),
    interpretation2: yup.string().required('Field void, please put your answer !'),
    interpretation3: yup.string().required('Field void, please put your answer !'),
    interpretation4: yup.string().required('Field void, please put your answer !'),
    question: yup.string().required('Field void, please put your question !'),
    good_answer: yup.string().oneOf(['good_answerA', 'good_answerB', 'good_answerC', 'good_answerD']).required('Please select a good answer !')
})


const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    
  } 

  const handleClick = () => {
    // implementation details
  }


  return (

         <header>
         <form onSubmit={handleSubmit(onSubmit)}>
          <div class="cont">
           
          <div className='lmj-Edit_CaseStory-title'>
            <h2>Add Situation :</h2>
            </div>

           
            <div className='lmj-Edit_CaseStory-read'><p>Context :</p></div>
            <textarea className = "form-input"
            type="text" 
            name="context" 
            placeholder='Context'
            { ...register("context")}
      />
            {errors.context && <div className="error-message">{errors.context.message}</div>}
            
            <div className='lmj-Edit_CaseStory-read'><p>Question :</p></div>
            <textarea className = "form-input"
            type="text" 
            name="question" 
            placeholder='Question'
            { ...register("question")}
      />
            {errors.question && <div className="error-message">{errors.question.message}</div>}
          
          
            <div className='lmj-Edit_CaseStory-answer-check'><p>Answer A :</p>

            <input 
            type="radio" 
            name="good_answer"  
            value="good_answerA" 
          {...register("good_answer")}
          /> <label for="good_answerA">Good Answer</label>
            </div>
          

            <textarea className = "form-input"
            type="text" 
            name="interpretation1" 
            placeholder='Answer A'
            { ...register("interpretation1")}
      />
            {errors.interpretation1 && <div className="error-message">{errors.interpretation1.message}</div>}
           
           

            <div className='lmj-Edit_CaseStory-read'><p>Comment A :</p></div>
            <textarea className = "form-input"
            type="text" 
            name="commentaire1" 
            placeholder='Comment A'
            { ...register("commentaire1")}
      />
            {errors.commentaire1 && <div className="error-message">{errors.commentaire1.message}</div>}
          
            <div className='lmj-Edit_CaseStory-answer-check'><p>Answer B :</p>
            <input 
            type="radio" 
            name="good_answer" 
            value="good_answerB" 
            {...register("good_answer")}
          /> <label for="good_answerB">Good Answer</label>
          </div>

            <textarea className = "form-input"
            type="text" 
            name="interpretation2" 
            placeholder='Answer B'
            { ...register("interpretation2")}
      />
            {errors.interpretation2 && <div className="error-message">{errors.interpretation2.message}</div>}

            

            <div className='lmj-Edit_CaseStory-read'><p>Comment B :</p></div>
            <textarea className = "form-input"
            type="text" 
            name="commentaire2" 
            placeholder='Comment B'
            { ...register("commentaire2")}
      />
            {errors.commentaire2 && <div className="error-message">{errors.commentaire2.message}</div>}

            <div className='lmj-Edit_CaseStory-answer-check'><p>Answer C :</p>
            <input 
            type="radio" 
            name="good_answer" 
            value="good_answerC" 
            {...register("good_answer")}
          /> <label for="good_answerC">Good Answer</label>
          </div>


            <textarea className = "form-input"
            type="text" 
            name="interpretation3" 
            placeholder='Answer C'
            { ...register("interpretation3")}
    
      />
            {errors.interpretation3 && <div className="error-message">{errors.interpretation3.message}</div>}
          
           

            <div className='lmj-Edit_CaseStory-read'><p>Comment C :</p></div>
            <textarea className = "form-input"
            type="text" 
            name="commentaire3" 
            placeholder='Comment C'
            { ...register("commentaire3")}
      />
            {errors.commentaire2 && <div className="error-message">{errors.commentaire3.message}</div>}

            <div className='lmj-Edit_CaseStory-answer-check'><p>Answer D :</p>
            <input 
            type="radio" 
            name="good_answer" 
            value="good_answerD" 
            {...register("good_answer")}
          /> <label for="good_answerD">Good Answer</label>
          </div>

          {errors.good_answer && <div className="error-message">{errors.good_answer.message}</div>}

            <textarea className = "form-input"
            type="text" 
            name="interpretation4" 
            placeholder='Answer D'
            { ...register("interpretation4")}
      />
            {errors.interpretation4 && <div className="error-message">{errors.interpretation4.message}</div>}
          
           
            <div className='lmj-Edit_CaseStory-read'><p>Comment D :</p></div>
            <textarea className = "form-input"
            type="text" 
            name="commentaire4" 
            placeholder='Comment D' 
            { ...register("commentaire4")}
      />
            {errors.commentaire4 && <div className="error-message">{errors.commentaire4.message}</div>}

            
            <div className='lmj-Edit_CaseStory-read'><p>Final Comment :</p></div>
            <textarea className = "form-input"
            type="text" 
            name="commentairefinal" 
            placeholder='Final Comment'
            { ...register("commentairefinal")}
      />
            {errors.commentairefinal && <div className="error-message">{errors.commentairefinal.message}</div>}
            
            
            <br></br>
            <button className="lmj-Edit_CaseStory-button"type="submit"  id= "submit" onClick={handleClick}>
          Add Situation
        </button>
           </div>
          </form>
        </header>
  )
}
export default Edit_CaseStory;