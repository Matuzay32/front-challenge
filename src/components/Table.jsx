import Table from "react-bootstrap/Table";

export default function MyTable({ data }) {
	return (
		<Table className="myTable">
			<thead>
				<tr>
					<th>
						<h5>File Name</h5>
					</th>
					<th>
						<h5>Text</h5>
					</th>
					<th>
						<h5>Number</h5>
					</th>
					<th>
						<h5>Hex</h5>
					</th>
				</tr>
			</thead>
			<tbody>
				{data?.map((item, index) => {
					return item.lines.map((line, idx) => (
						<tr key={`${index}-${idx}`}>
							<td>{item?.file}</td>
							<td>{line?.text}</td>
							<td>{line?.number}</td>
							<td>{line?.hex}</td>
						</tr>
					));
				})}
			</tbody>
		</Table>
	);
}
