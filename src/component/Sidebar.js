import React from "react";
import {Link} from "react-router-dom";

function Sidebar() {
	return (
		<>
			<ul
				className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
				id="accordionSidebar"
			>
				{/* <!-- Sidebar - Brand --> */}
				<a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
					<div className="sidebar-brand-icon rotate-n-15">
						<i className="fas fa-laugh-wink"></i>
					</div>
					<div className="sidebar-brand-text mx-3">
						SB Admin <sup>2</sup>
					</div>
				</a>

				{/* <!-- Divider --> */}
				<hr className="sidebar-divider my-0"></hr>

				{/* <!-- Nav Item - Dashboard --> */}
				<Link to="/dashboard">
					<li className="nav-item active">
						<div className="nav-link">
							<i className="fas fa-fw fa-tachometer-alt"></i>
							<span>Dashboard</span>
						</div>
					</li>
				</Link>

				{/* <!-- Divider --> */}
				<hr className="sidebar-divider"></hr>

				{/* <!-- Heading --> */}
				<div className="sidebar-heading">Interface</div>

				{/* <!-- Nav Item - Pages Collapse Menu --> */}
				<Link to="/adduser">
					<li className="nav-item">
						<div
							className="nav-link collapsed"
							href="javascript(void)"
							data-toggle="collapse"
							data-target="#collapseTwo"
							aria-expanded="true"
							aria-controls="collapseTwo"
						>
							<i className="fas fa-fw fa-cog"></i>
							<span>Add User</span>
						</div>
					</li>
				</Link>

				{/* <!-- Nav Item - Utilities Collapse Menu --> */}
				<Link to="/edituser">
					<li className="nav-item">
						<div
							className="nav-link collapsed"
							href="javascript(void)"
							data-toggle="collapse"
							data-target="#collapseUtilities"
							aria-expanded="true"
							aria-controls="collapseUtilities"
						>
							<i className="fas fa-fw fa-wrench"></i>
							<span>Edit User</span>
						</div>
					</li>
				</Link>

				<Link to="/nestedexample">
					<li className="nav-item">
						<div
							className="nav-link collapsed"
							href="javascript(void)"
							data-toggle="collapse"
							data-target="#collapseUtilities"
							aria-expanded="true"
							aria-controls="collapseUtilities"
						>
							<i className="fas fa-fw fa-wrench"></i>
							<span>Nested Example</span>
						</div>
					</li>
				</Link>

				{/* <!-- Divider --> */}
				<hr className="sidebar-divider d-none d-md-block"></hr>

				{/* <!-- Sidebar Toggler (Sidebar) --> */}
				<div className="text-center d-none d-md-inline">
					<button className="rounded-circle border-0" id="sidebarToggle"></button>
				</div>
			</ul>
		</>
	);
}

export default Sidebar;
