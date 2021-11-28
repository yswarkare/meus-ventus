import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
// import DefaultLayout from "./containers/DefaultLayout/DefaultLayout";
import DefaultHeader from "./containers/DefaultHeader/DefaultHeader";
import routes from "./routes";
import AuthValidator from "./components/AuthValidator/AuthValidator";
import DefaultFooter from "./containers/DefaultFooter/DefaultFooter";

const DefaultLayout = React.lazy(()=>import("./containers/DefaultLayout/DefaultLayout"));


function App(props) {
	return (
		<div className="App">
			<BrowserRouter >
				<DefaultHeader></DefaultHeader>
				<Suspense fallback={Loader}>
					<Routes>
						{/* <Route path="/home" element={<DefaultLayout />} /> */}
						{routes.map((route, index) => {
							return route?.component ? (
								<Route
									key={index}
									path={route.path}
									exact={route.exact}
									name={route.name}
									element={
										<AuthValidator
											authorizedcomponent={route.component}
											urlpath={route.path}
											routes={route.routes ? route.routes : []}
											{...props}
										/>
									}
								/>
							) : null;
						})}
					</Routes>
				</Suspense>
				<DefaultFooter></DefaultFooter>
			</BrowserRouter>
		</div>
	);
}

export default App;
