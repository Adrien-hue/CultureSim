import "./Datatable.scss";

import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo_capire from "../../../assets/CAPIRE_logo_transparant.png";

function Datatable({ table, ...props }) {
	const [ isLoading, setIsLoading ] = useState(true);
	const [ columns, setColumns ] = useState();
	const [ records, setRecords ] = useState();

	const handleDeleteClick = (id) => {
		const url = `http://localhost:8888/capire_api/public/API/${table}/delete`;

		const data = {
			[`id_${table}`]: id 
		}

		fetch(url, {
            method: "POST",
			body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((response) => {
			alert(response.message);

			if(response.error === 0) {
				setRecords(records.filter((el) => el[`id_${table}`] !== id));
			}
		})
		.catch((err) => {
            
        });
	}

	useEffect(() => {
        const url = `http://localhost:8888/capire_api/public/API/${table}/all`;

        const headers = {
            "Accept": "application/json",
            "Content-type": "application/json",
        };

        fetch(url, {
            method: "GET",
            headers: headers,
        })
        .then((response) => response.json())
        .then((response) => {
			if(JSON.stringify(records) !== JSON.stringify(response.data)){
				setColumns(response.columns);
				setRecords(response.data);

				setIsLoading(false);
			}
        })
        .catch((err) => {
            
        });
    }, [table, records])

	return (
		<table className="datatable">
			{isLoading
				? <tbody className="datatable-tbody">
					<tr className="tbody-row">
						<td className="tbody-cell datatable-loader">
							<img src={logo_capire} alt="Logo Capire" />
							<p>Loading...</p>
						</td>
					</tr>
				</tbody>
				: <React.Fragment>
					<thead className="datatable-thead">
						<tr className="thead-row">
							{Object.keys(columns).map((key) => {
								if (columns[key].display) {
									return (
										<th key={key} className="thead-cell">
											{columns[key].name}
										</th>
									);
								} else {
									return null;
								}
							})}
							<th className="thead-cell"> Action </th>
						</tr>
					</thead>
					<tbody className="datatable-tbody">
						{records.map((record, index) => (
							<tr className="tbody-row" key={`${table}-${index}`}>
								{Object.keys(columns).map((key) => {
									if (columns[key].display) {
										if(columns[key].type === 'text' || columns[key].type === 'bool'){
											return (
												<td className="tbody-cell" key={key}>
													{record[key]}
												</td>
											);
										} else if(columns[key].type === 'img') {
											return (
												<td className="tbody-cell" key={key}>
													<img src={record[key]} alt="Dynamically loaded" />
												</td>
											);
										} else {
											return null;
										}
									} else {
										return null;
									}
								})}

								<td className="tbody-cell">
									<div className="tbody-action_cell">
										<Link to={`../${table}/edit/${record[`id_${table}`]}`} className="button modify-button">
											Modifier
										</Link>

										<button className="button delete-button" type="button" onClick={() => handleDeleteClick(record[`id_${table}`])}>
											Supprimer
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</React.Fragment>
			}
		</table>
	);
}

export default Datatable;
