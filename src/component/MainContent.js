import React, {useContext} from "react";
import CommonCard from "./cards/CommonCard";
import ProgressCard from "./cards/ProgressCard";
import Table from "react-bootstrap/Table";
import {useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {dashboardContext} from "./ContextComponent/DashboardContextComponent";
import {userContext} from "./ContextComponent/UsersContextComponent";

function MainContent() {
	let navigate = useNavigate();
	let context = useContext(userContext);
	let dashContext = useContext(dashboardContext);

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
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
						<a
							href="javascript(void)"
							className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
						>
							<i className="fas fa-download fa-sm text-white-50"></i> Generate Report
						</a>
					</div>
					{/* <!-- Content Row --> */}
					<div className="row">
						<CommonCard
							label="Earnings (Monthly)"
							border="border-left-primary"
							value={`${dashContext.data.earningsMonthly}`}
							icon="fa-calendar"
							textColor="text-primary"
						/>
						<CommonCard
							label="Earnings (Annual)"
							border="border-left-success"
							value={`${dashContext.data.earningsAnnual}`}
							icon="fa-dollar-sign"
							textColor="text-success"
						/>
						<ProgressCard
							label="Tasks"
							border="border-left-info"
							percentage={`${dashContext.data.tasks}`}
							icon="fa-clipboard-list"
							textColor="text-info"
						/>
						<CommonCard
							label="Pending Requests"
							border="card border-left-warning "
							value={`${dashContext.data.pendingRequests}`}
							icon="fa-comments"
							textColor="text-warning"
						/>
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
											<Button variant="primary" onClick={() => navigate(`/edituser/${i}`)}>
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
