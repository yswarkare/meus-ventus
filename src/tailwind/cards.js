
const cards = {
    ".ionic-material-card": {
        "borderWidth": "0rem",
        "borderRadius": "0.25rem",
        "background": "#fff",
        "boxShadow": "0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05)",
        "transition": ".3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12)",
        // "padding": "0.5rem 0.5rem 0.5rem 0.5rem",
        "cursor": "pointer",
        "&:hover":{
            "transform": "scale(1.05)",
            "boxShadow": "0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06)",
        }
    },
}

module.exports = cards;