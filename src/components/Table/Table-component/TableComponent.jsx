import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { tableData } from "../table-config";
import "./TableComponent.css";

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
				<Column
					field="user"
					header="المستخدم"
					bodyStyle={{
						color: "#1C1C28",
						fontWeight: "400",
						fontFamily: "Neo Sans Arabic",
						padding: "15px",
						fontSize: "15px",
					}}
				/>
				<Column
					field="ticketNo"
					header="رقم التذكرة"
					bodyStyle={{
						color: "13.28px",
						fontWeight: "500",
						fontFamily: "Arial",
						padding: "15px",
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
						padding: "15px",
						fontSize: "13.28px",
					}}
				/>
				<Column
					field="cinams"
					header="السينمات"
					bodyStyle={{
						color: "#898995",
						fontWeight: "400",
						fontFamily: "Arial",
						padding: "15px",
					}}
				/>
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
