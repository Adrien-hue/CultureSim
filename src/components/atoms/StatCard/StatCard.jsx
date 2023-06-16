import "./StatCard.scss"

const StatCard = ({stat, label, icon, ...props}) => {
    return <div className="statcard">
        <img src={require(`../../../assets/${icon}`)} alt="stat icon" />

        <div>
            <h3>{stat}</h3>
            <span>{label}</span>
        </div>
    </div>
}

export default StatCard;