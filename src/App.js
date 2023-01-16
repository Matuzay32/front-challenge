import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import MyTable from "./components/Table";

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3000/files/data")
			.then((response) => {
				console.log(response.data);
				setData(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<>
			<Header setData={setData}></Header>
			<MyTable data={data} />
		</>
	);
}

export default App;
