import './PageNotFound.scss'
import image404 from '../../assets/image404.png'
import { useNavigate} from "react-router-dom";

function PageNotFound(){
    const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}

    return(
        <div className='PageNotFound-container'>
            <h1>404</h1>
            <img src={image404} alt="image404" />
            <h2>Oops! Page Not Found</h2>
            <p>This page doesn't exist or was removed!<br/>
            We suggest you back to home.</p>
            <button onClick={goBack}><span>Back</span></button>	
        </div>
    )
} 
export default PageNotFound;
