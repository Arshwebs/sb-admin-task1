import "./App.css";
import MainContent from "./component/MainContent";
import Sidebar from "./component/Sidebar";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import AddUser from "./component/AddUser";
import EditUser from "./component/EditUser";
import NestedExample from "./component/NestedExample";
import Profile from "./component/nested components/Profile";
import Account from "./component/nested components/Account";
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
					<Route path="/edituser/:id" element={<EditUser />} />
					<Route path="/nestedexample" element={<NestedExample />}>
						<Route path="profile" element={<Profile />} />
						<Route path="account" element={<Account />} />
					</Route>
					<Route path="*" element={<Navigate to={"/dashboard"} />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
