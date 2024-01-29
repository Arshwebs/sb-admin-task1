import "./App.css";
import MainContent from "./component/MainContent";
import Sidebar from "./component/Sidebar";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import AddUser from "./component/AddUser";
import EditUser from "./component/EditUser";
import NestedExample from "./component/NestedExample";
import Profile from "./component/nested components/Profile";
import Account from "./component/nested components/Account";
import {useState} from "react";
const data = {
	earningsMonthly: "40,000",
	earningsAnnual: "2,15,000",
	tasks: "68",
	pendingRequests: "30",
};

function App() {
	let [users, setUsers] = useState([
		{
			name: "Arsath",
			email: "a@gmail.com",
			mobile: "24325436527",
			batch: "b28Wet",
			timing: "11am to 1pm",
		},
		{
			name: "Mubeena",
			email: "b@gmail.com",
			mobile: "78675875436527",
			batch: "b28Wet",
			timing: "11am to 1pm",
		},
		{
			name: "e",
			email: "w@gmail.com",
			mobile: "24325436527",
			batch: "b28Wet",
			timing: "11am to 1pm",
		},
		{
			name: "r",
			email: "rt@gmail.com",
			mobile: "24325436527",
			batch: "b28Wet",
			timing: "11am to 1pm",
		},
	]);
	console.log(users);

	return (
		<div id="wrapper">
			<BrowserRouter>
				<Sidebar />
				<Routes>
					<Route
						path="/dashboard"
						element={<MainContent data={data} users={users} setStudents={setUsers} />}
					/>
					<Route path="/adduser" element={<AddUser users={users} setUsers={setUsers} />} />
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
