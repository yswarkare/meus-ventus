const defaults = {
	/* Default */
	color: "blue",
	/* Unvisited links */
	"&:link": {
		color: "blue",
	},
	/* Visited links */
	"&:visited": {
		color: "purple",
	},
	/* Hover state */
	"&:hover": {
		color: "red",
	},
	/* Focused state */
	"&:focus": {
		color: "orange",
	},
	/* Activated state */
	"&:active": {
		color: "green",
	},
	"&:link:hover": {
		color: "green",
	},
	"&:visited:hover": {
		color: "red",
	},
};

const links = {
	".link": {
        ...defaults,
	},
	".link-blue": {
		color: "#3490dc",
		fontWeight: "600",
		"&:hover": {
			color: "#2779bd",
		},
	},
	".link-red": {
		color: "#e3342f",
		fontWeight: "600",
		"&:hover": {
			color: "#cc1f1a",
		},
	},
	".link-btn": {
		/* Default */
		color: "blue",
		backgroundColor: "",
		borderRadius: "0.25rem",
		borderWidth: "0px",
		/* Unvisited links */
		"&:link": {
			color: "blue",
		},
		/* Visited links */
		"&:visited": {
			color: "purple",
		},
		/* Hover state */
		"&:hover": {
			color: "red",
		},
		/* Focused state */
		"&:focus": {
			color: "orange",
		},
		/* Activated state */
		"&:active": {
			color: "green",
		},
		"&:link:hover": {
			color: "green",
		},
		"&:visited:hover": {
			color: "red",
		},
	},
};

module.exports = links;
