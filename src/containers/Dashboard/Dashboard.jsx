import "./Dashboard.scss";

import { StatCard } from "../../components/atoms";

const Dashboard = () => {
    return <div>
        <div className="stat-cards">
            <StatCard stat="8" label="Total users" icon="user.png"/>
            <StatCard stat="5" label="Total countries" icon="europe.png"/>
            <StatCard stat="12" label="Total answers" icon="answer.png"/>
            <StatCard stat="3" label="Total case stories" icon="question.png"/>
        </div>
    </div>
}

export default Dashboard;