import { Routes, Route } from "react-router-dom";

import React from "react";

import "./App.scss";

import { CountryDetails } from "./components/molecules";

import {
	CaseStory_Home,
	Home,
	Login,
	Register,
	Quiz,
	PageNotFound,
	Account,
	RequireAuth,
	Dashboard,
	AdminListing,
	EditCountry
} from "./containers";
import { Layout, AdminLayout } from "./layouts";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				{/* public routes */}
				<Route path="/" element={<Home />} />
				<Route path="quiz/:country" element={<CaseStory_Home />} />
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />

				{/* protected routes */}
				{/* connected routes */}
				<Route element={<RequireAuth allowedAccess="1" />}>
					<Route path="quiz/:country/:quiz" element={<Quiz />} />
					<Route path="my-account" element={<Account />} />
				</Route>

				{/* catch all */}
				<Route path="*" element={<PageNotFound />} />
			</Route>

			{/* administration routes */}
			<Route element={<RequireAuth allowedAccess="2" />}>
				<Route path="admin" element={<AdminLayout />}>
					<Route path="" element={<Dashboard />} />
					<Route
						path="countries"
						element={<AdminListing title="Countries" table="country" />}
					/>
					<Route path="country/edit" element={<EditCountry />} />
					<Route path="users" element={<AdminListing title="Users" table="user" />} />
					<Route path="answers" element={<AdminListing title="Answers" table="answer" />} />
					<Route
						path="case_stories"
						element={<AdminListing title="Case stories" table="case_story" />}
					/>
					<Route path="country/:country" element={<CountryDetails />} />
				</Route>
			</Route>
		</Routes>
	);
}

export default App;
