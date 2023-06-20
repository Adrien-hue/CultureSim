import { useNavigate} from "react-router-dom";
import image401 from '../../assets/image401.png'
import '../PageNotFound/PageNotFound.scss'
import {BrowserRouter as Router, Link} from 'react-router-dom';


function PageUnauth(){
    const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}

    return(
        <div className='PageNotFound-container'>
            <div className='image401'>
                <img src={image401} alt="image401" />
            </div>
            <h2>401 Unauthorized</h2>
            <p>This page is not publically available.
                To access it please login first.</p>
            <div className="btn">
                <button className="back" onClick={goBack}><span>Back</span></button>	
                <Link to="/login">
                    <button><span>Login</span></button>
                </Link>
            </div>
    </div>
    )
} 
export default PageUnauth;