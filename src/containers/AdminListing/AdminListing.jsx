import "./AdminListing.scss";

import React from "react";
import { Link } from "react-router-dom";

import { Datatable } from "../../components/molecules";

const AdminListing = ({title, table, ...props}) => {

    return <div className="listing-container">
        <div className="listing-header">
            <h3>{title}</h3>

            <Link to={`../${table}/edit`} className="button">New</Link>
        </div>

        <Datatable table={table}/>
    </div>
}

export default AdminListing;