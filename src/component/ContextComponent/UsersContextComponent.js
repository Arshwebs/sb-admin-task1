import React, {useState, useReducer} from "react";

export const userContext = React.createContext();

const intialValue = {name: "", mobile: "", email: "", batch: "", timing: ""};

const userReducer = (state, action) => {
	switch (action.type) {
		case "name":
			return {...state, name: action.value};
		case "mobile":
			return {...state, mobile: action.value};
		case "email":
			return {...state, email: action.value};
		case "batch":
			return {...state, batch: action.value};
		case "timing":
			return {...state, timing: action.value};
		case "reset":
			return (state = intialValue);
		default:
			throw new Error("Error( file: userContextComponent): UserReducer Failed");
	}
};

function UsersContextComponent({children}) {
	const [state, dispatch] = useReducer(userReducer, intialValue);
	let [users, setUsers] = useState([
		{
			name: "John",
			email: "a@gmail.com",
			mobile: "24325436527",
			batch: "b28Wet",
			timing: "11am to 1pm",
		},
		{
			name: "Leo",
			email: "b@gmail.com",
			mobile: "78675875436527",
			batch: "b28Wet",
			timing: "11am to 1pm",
		},
		{
			name: "Abu",
			email: "w@gmail.com",
			mobile: "24325436527",
			batch: "b28Wet",
			timing: "11am to 1pm",
		},
		{
			name: "Hendry",
			email: "rt@gmail.com",
			mobile: "24325436527",
			batch: "b28Wet",
			timing: "11am to 1pm",
		},
	]);

	return (
		<userContext.Provider value={{users, setUsers, state, dispatch}}>{children}</userContext.Provider>
	);
}

export default UsersContextComponent;
