import { Routes, Route } from "react-router-dom";

import React from "react";

import "./App.scss";

import { CountryDetails } from "./components/molecules";

import {
	CaseStoryHome,
	Home,
	Login,
	Register,
	Quiz,
	PageNotFound,
	Account,
	RequireAuth,
	Dashboard,
	AdminListing,
	EditCountry,
	EditAnswer,
	EditUser,
	EditCaseStory,
} from "./containers";
import { Layout, AdminLayout } from "./layouts";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				{/* public routes */}
				<Route path="/" element={<Home />} />
				<Route path="quiz/:id_country" element={<CaseStoryHome />} />
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
					
					{/* Country routes */}
					<Route path="countries" element={<AdminListing title="Countries" table="country" />} />
					<Route path="country/edit" element={<EditCountry />} />
					<Route path="country/edit/:id_country" element={<EditCountry />} />
					<Route path="country/:country" element={<CountryDetails />} />
					
					{/* User routes */}
					<Route path="users" element={<AdminListing title="Users" table="user" />} />
					<Route path="user/edit" element={<EditUser />} />
					<Route path="user/edit/:id_user" element={<EditUser />} />
					
					{/* Answer routes */}
					<Route path="answers" element={<AdminListing title="Answers" table="answer" />} />
					<Route path="answer/edit" element={<EditAnswer />} />
					<Route path="answer/edit/:id_answer" element={<EditAnswer />} />
					
					{/* Case story routes */}
					<Route path="case_stories" element={<AdminListing title="Case stories" table="case_story" />} />
					<Route path="case_story/edit" element={<EditCaseStory />} />
					<Route path="case_story/edit/:id_case_story" element={<EditCaseStory />} />

					{/* Quiz routes */}
					<Route path="quiz" element={<AdminListing title="Quiz" table="quiz" />} />
				</Route>
			</Route>
		</Routes>
	);
}

export default App;
