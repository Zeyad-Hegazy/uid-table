import "./Table.css";
import { Button, Toggle, Search } from "./Header";

const Table = () => {
	return (
		<div className="table-cont">
			<div className="table-header">
				<div className="btn_toggle">
					<Button>حجز تذكرة جديدة</Button>
					<Toggle />
				</div>
				<Search />
			</div>

			{/* TODO */}
			{/* Write Table Component Here*/}
		</div>
	);
};

export default Table;
