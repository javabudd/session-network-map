import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import "./index.css";
import {Amplify} from "aws-amplify";
import outputs from "../amplify_outputs.json";
import App from "./App.tsx";
import HomePage from "./pages/HomePage.tsx";

Amplify.configure(outputs);

const router = createBrowserRouter([
	{
		path: '/',
		element: <App/>,
		children: [
			{
				path: "",
				element: <HomePage/>
			},
		]
	},
	{
		path: '*',
		element: <Navigate to="/"/>
	}
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>
);
