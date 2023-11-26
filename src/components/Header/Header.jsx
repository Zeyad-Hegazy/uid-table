import "./Header.css";

import edit from "../../assets/edit.svg";
import arrow from "../../assets/arrow-right.svg";

const Header = () => {
	return (
		<header className="header">
			<div className="edit-btn">
				<span>تعديل</span>
				<img src={edit} alt="edit button" />
			</div>
			<div className="back-btn">
				<p className="ticket-id">تذكرة رقم #2342</p>
				<div className="arrow-cont">
					<img src={arrow} alt="arrow points to right" className="arrow" />
				</div>
			</div>
		</header>
	);
};

export default Header;
