const height = {
    ".full-h": {
        height: "100%",
        minHeight: "100%",
        height: "-moz-available",          /* WebKit-based browsers will ignore this. */
        height: "-webkit-fill-available",  /* Mozilla-based browsers will ignore this. */
        height: "stretch",
    },
}

module.exports = height;