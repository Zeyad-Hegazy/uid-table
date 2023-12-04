import "./CinemaBody.css";

const CinemaBody = (data) => {
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

export default CinemaBody;
