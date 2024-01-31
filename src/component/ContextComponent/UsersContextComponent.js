import React, {useState} from "react";

export let userContext = React.createContext();

function UsersContextComponent({children}) {
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

	return <userContext.Provider value={{users, setUsers}}>{children}</userContext.Provider>;
}

export default UsersContextComponent;
