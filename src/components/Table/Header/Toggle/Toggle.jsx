import { useState } from "react";
import "./Toggle.css";

const Toggle = () => {
	const [isToggled, setisTettoggled] = useState(true);

	const handleToggle = () => setisTettoggled((prevState) => !prevState);

	return (
		<div className="toggle-cont">
			<p className="text">{isToggled ? "مفعلة" : "غير مفعلة"}</p>

			<div
				className={`toggle ${isToggled ? "toggled" : ""}`}
				onClick={handleToggle}
				dir="rtl"
			>
				<div className="circle" />
			</div>
		</div>
	);
};

export default Toggle;
