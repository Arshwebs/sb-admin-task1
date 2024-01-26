import React from "react";
import CommonCard from "./cards/CommonCard";
import ProgressCard from "./cards/ProgressCard";

function MainContent({data}) {
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
							value={`${data.earningsMonthly}`}
							icon="fa-calendar"
							textColor="text-primary"
						/>
						<CommonCard
							label="Earnings (Annual)"
							border="border-left-success"
							value={`${data.earningsAnnual}`}
							icon="fa-dollar-sign"
							textColor="text-success"
						/>
						<ProgressCard
							label="Tasks"
							border="border-left-info"
							percentage={`${data.tasks}`}
							icon="fa-clipboard-list"
							textColor="text-info"
						/>
						<CommonCard
							label="Pending Requests"
							border="card border-left-warning "
							value={`${data.pendingRequests}`}
							icon="fa-comments"
							textColor="text-warning"
						/>
					</div>
				</div>
				{/* <!-- /.container-fluid --> */}
			</div>
			{/* <!-- End of Main Content --> */}
		</div>
	);
}

export default MainContent;
