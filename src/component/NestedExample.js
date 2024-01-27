import React from "react";
import {Outlet, Link} from "react-router-dom";
function NestedExample() {
	return (
		<div>
			<h1>Example of the Nested Route</h1>
			<ul>
				<Link to="profile">
					<li>Profile</li>
				</Link>
				<Link to="account">
					<li>Account</li>
				</Link>
				<Link to="/nestedexample">
					<li>NestedExample</li>
				</Link>
			</ul>
			<Outlet />
		</div>
	);
}

export default NestedExample;
