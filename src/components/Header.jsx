import axios from "axios";
import { useState } from "react";
import {
	Nav,
	Navbar,
	Container,
	Button,
	Form,
	FormControl,
} from "react-bootstrap";

export default function Header({ setData }) {
	const [searchValue, setSearchValue] = useState("");

	function handleSearch(event) {
		event.preventDefault();
		console.log(`Searching for: ${searchValue}`);

		axios
			.get(
				`http://localhost:3000/files/list?fileName=${searchValue}`
			)
			.then((response) => {
				console.log(response.data);
				setData(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	return (
		<>
			<Navbar bg="rgba(22, 21, 21, 0.1)" variant="dark">
				<Container>
					<Navbar.Brand>React Test App</Navbar.Brand>
					<Nav className="w-100">
						<Form
							inline
							onSubmit={handleSearch}
							className="d-flex flex-row justify-content-center w-75 ">
							<FormControl
								type="text"
								placeholder="Search"
								className="mr-sm-2 w-75"
								value={searchValue}
								onChange={(event) =>
									setSearchValue(
										event.target.value
									)
								}
							/>
							<Button
								variant="outline-info"
								className=" w-25 mx-2"
								type="submit">
								Search
							</Button>
						</Form>
					</Nav>
				</Container>
			</Navbar>
			<br />
		</>
	);
}
