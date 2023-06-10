import "./Footer.scss";

const Footer = () => {
    return <footer className="app-footer">
        <section className="footer-sections">
            <section>
                <menu>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Business</a></li>
                        <li><a href="#">Affilates</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">News</a></li>
                    </ul>
                </menu>
            </section>

            <section>
                <menu>
                    <ul>
                        <li><a href="#">Legal issues</a></li>
                        <li><a href="#">Term of use</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Copyright</a></li>
                        <li><a href="#">Accessability</a></li>
                        <li><a href="#">Other</a></li>
                    </ul>
                </menu>
            </section>

            <section>
                <menu>
                    <ul>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Teaching</a></li>
                        <li><a href="#">Help centre</a></li>
                        <li><a href="#">Editorial board</a></li>
                        <li><a href="#">Reviews</a></li>
                        <li><a href="#">Manual</a></li>
                        <li><a href="#">Partners</a></li>
                    </ul>
                </menu>
            </section>
        </section>

        <section className="footer-bottom">
            @Developed at ESIEE Paris
        </section>
  </footer>
}

export default Footer;