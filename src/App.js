import "./App.css";
import MainContent from "./component/MainContent";
import Sidebar from "./component/Sidebar";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import AddUser from "./component/AddUser";
import EditUser from "./component/EditUser";

const data = {
	earningsMonthly: "40,000",
	earningsAnnual: "2,15,000",
	tasks: "68",
	pendingRequests: "30",
};

function App() {
	return (
		<div id="wrapper">
			<BrowserRouter>
				<Sidebar />
				<Routes>
					<Route path="/" element={<MainContent data={data} />} />
					<Route path="/dashboard" element={<MainContent data={data} />} />
					<Route path="/adduser" element={<AddUser />} />
					<Route path="/edituser" element={<EditUser />} />
					<Route path="*" element={<Navigate to={"/dashboard"} />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
