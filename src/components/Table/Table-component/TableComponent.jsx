import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { tableData } from "../table-config";
import "./TableComponent.css";

const nameBody = ({ user, img, phoneNumber }) => {
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

const cenmaBody = (data) => {
	let overloadCinamas;
	let cinams;

	if (data.cinams.length > 4) {
		overloadCinamas = data.cinams.slice(4, data.cinams.length);
		cinams = data.cinams.slice(0, 4);
	} else {
		cinams = data.cinams;
	}

	return (
		<>
			<div className="cenima">
				{overloadCinamas && (
					<span className="overloadCinamas">{overloadCinamas.join(" , ")}</span>
				)}
				<div className="tabel_cell">
					{cinams.join(" , ")} {overloadCinamas && <span>...</span>}
				</div>
			</div>
		</>
	);
};

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
				<Column field="user" header="المستخدم" body={nameBody} />
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
				<Column field="cinams" header="السينمات" body={cenmaBody} />
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
