import React from "react";

//* Links Paths

export const link_HomePage = `/`;
export const link_MyFavorites = `/my-favorites`

//* Link Names

export const linkName_HomePage = `Home`;
export const linkName_MyFavorites = `My Favorites`;

//* Components

const Homepage = React.lazy(() => import("./pages/HomePage"));
const MyFavorites = React.lazy(() => import("./pages/MyFavorites"));

const routes = [
	{
		path: link_HomePage,
		name: linkName_HomePage,
		component: Homepage,
		element: Homepage,
		routes: [],
	},
    {
		path: link_MyFavorites,
		exact: true,
		name: linkName_MyFavorites,
		component: MyFavorites,
		element: MyFavorites,
		routes: [],
	},
]

export default routes;