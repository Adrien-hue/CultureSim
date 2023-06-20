import "./Switch.scss";

const Switch = ({ isOn, handleToggle, ...props }) => {
	return (
		<>
			<input
				checked={isOn}
				onChange={handleToggle}
				className="switch-checkbox"
				id={`switch-new`}
				type="checkbox"
			/>
			<label
				style={{ background: isOn && "#41AF55" }}
				className="switch-label"
				htmlFor={`switch-new`}
			>
				<span className={`switch-button`} />
			</label>
		</>
	);
};

export default Switch;
