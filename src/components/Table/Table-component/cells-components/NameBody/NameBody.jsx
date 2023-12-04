/* eslint-disable react/prop-types */
import "./NameBody.css"

const NameBody = ({ user, img, phoneNumber }) => {
	return (
		<div className="tabel_cell name">
			<div>
				<img src={img} alt="user image" />
			</div>
			<div className="name_label">
				<p>{user}</p>
				<span>{phoneNumber}</span>
			</div>
		</div>
	);
};

export default NameBody