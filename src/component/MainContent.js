import React, {useContext} from "react";

import Table from "react-bootstrap/Table";
import {useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";

import {userContext} from "./ContextComponent/UsersContextComponent";

function MainContent() {
	let navigate = useNavigate();
	let context = useContext(userContext);

	function handleDelete(i) {
		let deleteUsers = [...context.users];
		deleteUsers.splice(i, 1);
		context.setUsers(deleteUsers);
	}

	return (
		<div id="content-wrapper" className="d-flex flex-column">
			{/* <!-- Main Content --> */}
			<div id="content">
				{/* <!-- Begin Page Content --> */}
				<div className="container-fluid">
					{/* <!-- Page Heading --> */}
					<br />
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
					</div>

					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h4 mb-0 text-gray-800">All Users:</h1>
					</div>

					<Table striped bordered hover>
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Email</th>
								<th>Mobile</th>
								<th>Batch</th>
								<th>Timing</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{context.users.map((e, i) => {
								return (
									<tr key={i}>
										<td>{i + 1}</td>
										<td>{e.name}</td>
										<td>{e.email}</td>
										<td>{e.mobile}</td>
										<td>{e.batch}</td>
										<td>{e.timing}</td>
										<td>
											<Button variant="secondary" onClick={() => navigate(`/profile/${i}`)}>
												view
											</Button>
											&nbsp; &nbsp;
											<Button variant="primary" onClick={() => navigate(`/edit-user/${i}`)}>
												Edit
											</Button>
											&nbsp; &nbsp;
											<Button variant="warning" onClick={() => handleDelete(i)}>
												Delete
											</Button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</Table>
				</div>
				{/* <!-- /.container-fluid --> */}
			</div>
			{/* <!-- End of Main Content --> */}
		</div>
	);
}

export default MainContent;
