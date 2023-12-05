import "./TicketBody.css";

import ticket_icon from "../../../../../assets/ticket_icon.png";
import download_icon from "../../../../../assets/download_icon.png";

const TicketBody = () => {
	return (
		<div className="ticket_cont">
			<img src={ticket_icon} alt="ticket icon" className="ticket_img" />
			<div className="ticket_name" dir="rtl">
				<p>تذكرة رقم 45.pdf</p>
				<span>9mb . PDF</span>
			</div>
			<img src={download_icon} alt="download icon" className="donwload_img" />
		</div>
	);
};

export default TicketBody;
