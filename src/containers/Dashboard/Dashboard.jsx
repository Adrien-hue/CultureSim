import "./Dashboard.scss";

import { StatCard } from "../../components/atoms";
import { useEffect, useState } from "react";

const Dashboard = () => {
	const [countUser, setCountUser] = useState();
	const [countCountry, setCountCountry] = useState();
	const [countAnswer, setCountAnswer] = useState();
	const [countCaseStory, setCountCaseStory] = useState();

	useEffect(() => {
		fetch(`http://localhost:8888/capire_api/public/API/country/all`, {
			method: "GET",
		})
        .then((response) => response.json())
        .then((response) => {
            setCountCountry(response.data.length);
        })
        .catch((err) => {});
        
		fetch(`http://localhost:8888/capire_api/public/API/user/all`, {
			method: "GET",
		})
        .then((response) => response.json())
        .then((response) => {
            setCountUser(response.data.length);
        })
        .catch((err) => {});

		fetch(`http://localhost:8888/capire_api/public/API/answer/all`, {
			method: "GET",
		})
        .then((response) => response.json())
        .then((response) => {
            setCountAnswer(response.data.length);
        })
        .catch((err) => {});

		fetch(`http://localhost:8888/capire_api/public/API/case_story/all`, {
			method: "GET",
		})
        .then((response) => response.json())
        .then((response) => {
            setCountCaseStory(response.data.length);
        })
        .catch((err) => {});
	});
	return (
		<div>
			<div className="stat-cards">
				<StatCard
					stat={countUser}
					label="Total users"
					icon="user.png"
				/>
				<StatCard
					stat={countCountry}
					label="Total countries"
					icon="europe.png"
				/>
				<StatCard
					stat={countAnswer}
					label="Total answers"
					icon="answer.png"
				/>
				<StatCard
					stat={countCaseStory}
					label="Total case stories"
					icon="question.png"
				/>
			</div>
		</div>
	);
};

export default Dashboard;
