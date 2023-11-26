import "./Card.css";

import trash from "../../assets/trash.svg";
import copy from "../../assets/copy.svg";
import QR from "../../assets/QR.svg";
import share from "../../assets/share.svg";

const Card = () => {
	return (
		<div className="card">
			<div className="masked-lines" />
			<img src={trash} alt="trash icon" className="trash" />
			<div className="top-card">
				<p className="card-title">عرض التذكرة الخاصة بالفيلم</p>
				<div className="copy-cont">
					<img src={copy} alt="copy icon" />
					<p>www.tazkty.com/473847</p>
				</div>
				<p className="ticket-date">فعال حتي 15 يوليو 2023</p>
			</div>
			<div className="dashed-line" />
			<div className="bottom-card">
				<img src={QR} alt="Qr code" className="qr" />
				<div className="share_and_sale">
					<div className="share_btn">
						<span>مشاركة</span>
						<img src={share} alt="share icon" />
					</div>
					<div className="sale">
						<p>خصم</p>
						<span>25%</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
