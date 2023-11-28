import "./Search.css";
import arrows from "../../../../assets/arrow-3.svg";
import filter from "../../../../assets/filter.svg";
import search from "../../../../assets/search.svg";

const Search = () => {
	return (
		<div className="search-cont">
			<div className="sort">
				<img src={arrows} alt="sort icon" />
			</div>
			<div className="filter">
				<img src={filter} alt="filter icon" />
			</div>
			<div className="search" dir="rtl">
				<div className="search_icon">
					<img src={search} alt="search icon" />
				</div>
				<input type="text" placeholder="بحث عن ...." />
			</div>
			<p className="sales">مبيعات التذاكر</p>
		</div>
	);
};

export default Search;
