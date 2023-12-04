import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { tableData } from "../table-config";
import "./TableComponent.css";

import NameBody from "./cells-components/NameBody/NameBody";
import CinemaBody from "./cells-components/CinemaBody/CinemaBody";

const TableComponent = () => {
	return (
		<div className="table" dir="rtl">
			<DataTable value={tableData}>
				<Column
					field="id"
					header="#"
					bodyStyle={{
						color: "#898995",
						fontWeight: "400",
						fontFamily: "Arial",
						padding: "15px",
					}}
				/>
				<Column field="user" header="المستخدم" body={NameBody} />
				<Column
					field="ticketNo"
					header="رقم التذكرة"
					bodyStyle={{
						color: "13.28px",
						fontWeight: "500",
						fontFamily: "Arial",
						padding: "20px",
						fontSize: "13.28px",
					}}
				/>
				<Column
					field="ticketPrice"
					header="قيمة التذكرة"
					bodyStyle={{
						color: "13.28px",
						fontWeight: "500",
						fontFamily: "Arial",
						padding: "20px",
						fontSize: "13.28px",
					}}
				/>
				<Column field="cinams" header="السينمات" body={CinemaBody} />
				<Column
					field="numberOfpeople"
					header="عدد الاشخاص"
					bodyStyle={{
						color: "#898995",
						fontWeight: "400",
						fontFamily: "Arial",
						padding: "15px",
					}}
				/>
				<Column
					field="numberOfBought"
					header="عدد مرات الشراء"
					bodyStyle={{
						color: "#898995",
						fontWeight: "400",
						fontFamily: "Arial",
						padding: "15px",
					}}
				/>
			</DataTable>
		</div>
	);
};

export default TableComponent;
