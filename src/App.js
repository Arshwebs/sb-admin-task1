import "./App.css";
import MainContent from "./component/MainContent";
import Sidebar from "./component/Sidebar";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import AddUser from "./component/AddUser";
import EditUser from "./component/EditUser";
import Profile from "./component/Profile";
import UsersContextComponent from "./component/ContextComponent/UsersContextComponent";

function App() {
	return (
		<div id="wrapper">
			<BrowserRouter>
				<Sidebar />
				<UsersContextComponent>
					<Routes>
						<Route path="/users" element={<MainContent />} />
						<Route path="/create-user" element={<AddUser />} />
						<Route path="/edit-user/:id" element={<EditUser />} />
						<Route path="/profile/:id" element={<Profile />} />

						<Route path="*" element={<Navigate to={"/users"} />} />
					</Routes>
				</UsersContextComponent>
			</BrowserRouter>
		</div>
	);
}

export default App;
