import "./AdminLayout.scss";

import capire_logo from "../../assets/CAPIRE_logo_transparant.png";
import dashboard_logo from "../../assets/dashboard.png";
import user_logo from "../../assets/user.png";
import country_logo from "../../assets/europe.png";
import case_story_logo from "../../assets/question.png";
import answer_logo from "../../assets/answer.png";
import home_logo from "../../assets/home.png";
import menu_logo from "../../assets/menu.png";

import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleClickMenu = () => {
        setShowMenu(!showMenu);
    }

    return <div id="admin-layout">
            <nav id="admin-nav" className={showMenu ? "active" : ""}>
                <div className="logo">
                    <img src={capire_logo} alt="Capire logo" />
                    <h2>Culture Simulator</h2>
                </div>

                <div className="nav-links">
                    <Link to=""><img src={dashboard_logo} alt="Dashboard" />Dashboard</Link>
                    <Link to="users"><img src={user_logo} alt="Users" />Users</Link>
                    <Link to="countries"><img src={country_logo} alt="Countries" />Countries</Link>
                    <Link to="case_stories"><img src={case_story_logo} alt="Case stories" />Case stories</Link>
                    <Link to="answers"><img src={answer_logo} alt="Answers" />Answers</Link>
                    <Link to="/"><img src={home_logo} alt="Home" />Back to Home</Link>
                </div>
            </nav>

            <main id="interface">
                <div className="navigation">
                    <div>
                        <div id="menu-btn" onClick={() => handleClickMenu()}>
                            <img src={menu_logo} alt="Menu" />
                        </div>
                    </div>

                    <div className="profile">
                        <Link to={`/my-account`}>
                            <img src={user_logo} alt="Account image" />
                            Account
                        </Link>
                    </div>
                </div>

                <div className="content">
                    <Outlet />
                </div>
            </main>
        </div>
}

export default AdminLayout;