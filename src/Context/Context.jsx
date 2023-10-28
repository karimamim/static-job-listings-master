import { createContext, useContext, useEffect, useState } from "react";
import data from "../lib/data";

const context = createContext();

export function useLocalContext() {
	return useContext(context);
}

export default function ContextProvider({ children }) {
	const [jobItems, setJobItems] = useState([]);
	const [terms, setTerms] = useState([]);

	useEffect(() => {
		setJobItems(data);
	}, []);

	return (
		<context.Provider value={{ terms, setTerms, jobItems }}>
			{children}
		</context.Provider>
	);
}
