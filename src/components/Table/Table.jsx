import "./Table.css";
import { Button, Toggle, Search } from "./Header";
import TableComponent from "./Table-component/TableComponent";

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

			<TableComponent />
		</div>
	);
};

export default Table;
