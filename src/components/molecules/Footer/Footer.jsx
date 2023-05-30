import "./Footer.scss";

const Footer = () => {
    return <footer className='App-footer'>
        <div className='footerPresentation'>
            <div className='Item footer1'>
                <div><a href="#">About</a></div>
                <div><a href="#">Business</a></div>
                <div><a href="#">Affilates</a></div>
                <div><a href="#">Careers</a></div>
                <div><a href="#">News</a></div>
            </div>

            <div className='Item footer2'>
                <div><a href="#">Legal issues</a></div>
                <div><a href="#">Term of use</a></div>
                <div><a href="#">Privacy</a></div>
                <div><a href="#">Copyright</a></div>
                <div><a href="#">Accessability</a></div>
                <div><a href="#">Other</a></div>
            </div>

            <div className='Item footer3'>
                <div><a href="#">Contact us</a></div>
                <div><a href="#">Teaching</a></div>
                <div><a href="#">Help centre</a></div>
                <div><a href="#">Editorial board</a></div>
                <div><a href="#">Reviews</a></div>
                <div><a href="#">Manual</a></div>
                <div><a href="#">Partners</a></div>
            </div>
        </div>
  </footer>
}

export default Footer;