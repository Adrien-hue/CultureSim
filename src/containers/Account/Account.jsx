import "./Account.scss";

import { useEffect, useState } from "react";

import { useAuth } from "../../hooks";

const Account = () => {

    const {auth} = useAuth();

    const [user_data, setUser_data] = useState([]);

    useEffect(() => {
        const url = `http://localhost:8888/capire_api/public/API/user/${auth.username}`;

        const headers = {
            "Accept": "application/json",
            "Content-type": "application/json",
        };

        fetch(url, {
            method: "GET",
            headers: headers,
        })
        .then((response) => response.json())
        .then((response) => {
			setUser_data(response);
        })
        .catch((err) => {
            
        });
    }, [])

	return (
		<div>
			<div className="details-container">
				<h1 className="details-title">My account</h1>

				<div className="details">
					<div className="details-row">
						<div className="details-label">First name :</div>
						<div className="details-text">{user_data.first_name_user}</div>
					</div>

					<div className="details-row">
						<div className="details-label">Last name :</div>
						<div className="details-text">{user_data.name_user}</div>
					</div>

					<div className="details-row">
						<div className="details-label">Username :</div>
						<div className="details-text">{user_data.username_user}</div>
					</div>

					<div className="details-row">
						<div className="details-label">Email :</div>
						<div className="details-text">{user_data.mail_user}</div>
					</div>

					<div className="details-row">
						<div className="details-label">Status :</div>
						<div className="details-text">{user_data.status_user}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Account;
