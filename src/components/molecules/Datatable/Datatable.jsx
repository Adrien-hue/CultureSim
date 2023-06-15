import "./Datatable.scss";
import React from "react";
import { useState } from "react";

function Datatable({ json, ...props }) {
	let columns = json.columns;
	let data = json.data;

	const [users] = useState(data);

	return (
		<table className="datatable">
			<thead className="datatable-thead">
				<tr className="thead-row">
					{Object.keys(columns).map((key) => {
						if (columns[key].display) {
							return (
								<th key={key} className="thead-cell">
									{columns[key].name}
								</th>
							);
						}
					})}
					<th className="thead-cell"> Action </th>
				</tr>
			</thead>
			<tbody className="datatable-tbody">
				{users.map((user) => (
					<tr className="tbody-row" key={user.id}>
						{Object.keys(columns).map((key) => {
							if (columns[key].display) {
								return (
									<td className="tbody-cell" key={key}>
										{user[key]}
									</td>
								);
							}
						})}

						<td className="tbody-cell tbody-action_cell">
							<button className="button modify-button">
								Modifier
							</button>

							<button className="button delete-button">
								Supprimer
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default Datatable;
