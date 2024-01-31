import React from "react";

const data = {
	earningsMonthly: "40,000",
	earningsAnnual: "2,15,000",
	tasks: "68",
	pendingRequests: "30",
};
export let dashboardContext = React.createContext();
function DashboardContextComponent({children}) {
	return <dashboardContext.Provider value={{data}}>{children}</dashboardContext.Provider>;
}

export default DashboardContextComponent;
