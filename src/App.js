import "./App.css";
import MainContent from "./component/MainContent";
import Sidebar from "./component/Sidebar";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import AddUser from "./component/AddUser";
import EditUser from "./component/EditUser";
import NestedExample from "./component/NestedExample";
import Profile from "./component/nested components/Profile";
import Account from "./component/nested components/Account";
import React, {useState} from "react";
import UseReducer from "./component/nested components/UseReducer";
import UseRef from "./component/nested components/UseRef";

import UsersContextComponent from "./component/ContextComponent/UsersContextComponent";
import DashboardContextComponent from "./component/ContextComponent/DashboardContextComponent";

function App() {
	return (
		<div id="wrapper">
			<BrowserRouter>
				<Sidebar />

				<Routes>
					<Route
						path="/dashboard"
						element={
							<DashboardContextComponent>
								<UsersContextComponent>
									<MainContent />
								</UsersContextComponent>
							</DashboardContextComponent>
						}
					/>
					<Route
						path="/adduser"
						element={
							<UsersContextComponent>
								<AddUser />
							</UsersContextComponent>
						}
					/>
					<Route
						path="/edituser/:id"
						element={
							<UsersContextComponent>
								<EditUser />
							</UsersContextComponent>
						}
					/>
					<Route path="/nestedexample" element={<NestedExample />}>
						<Route path="profile" element={<Profile />} />
						<Route path="account" element={<Account />} />
						<Route path="useRef" element={<UseRef />} />
						<Route path="useReducer" element={<UseReducer />} />
					</Route>
					<Route path="*" element={<Navigate to={"/dashboard"} />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
