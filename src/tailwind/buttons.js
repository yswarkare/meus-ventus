const defaults = {
    padding: '0.25rem 1.5rem',
}

const buttons = {
    '.btn': {
        padding: '0.25rem 1.5rem',
        borderRadius: '0.25rem',
        fontWeight: '600',
    },
    '.btn-primary': {
        ...defaults,
        color: '#fff',
        backgroundColor: '#20B716',
        borderColor: '#20B716',
        borderWidth: "0.125rem",
        borderRadius: "0.25rem",
        '&:hover': {
            backgroundColor: '#4FC546'
        },
    },
    '.btn-secondary': {
        ...defaults,
        color: '#20B716',
        backgroundColor: '#fff',
        borderColor: '#20B716',
        borderWidth: "0.125rem",
        borderRadius: "0.25rem",
        '&:hover': {
            backgroundColor: '#DDF0D6'
        },
    },
    '.btn-blue': {
        ...defaults,
        color: '#fff',
        backgroundColor: '#3490dc',
        borderColor: '#3490dc',
        borderWidth: "0.125rem",
        borderRadius: "0.25rem",
        '&:hover': {
            backgroundColor: '#2779bd'
        },
    },
    '.btn-red': {
        backgroundColor: '#e3342f',
        color: '#fff',
        padding: '0.25rem 1.5rem',
        borderColor: '#e3342f',
        borderWidth: "0.125rem",
        borderRadius: "0.25rem",
        '&:hover': {
            backgroundColor: '#cc1f1a'
        },
    },
    ".btn-angular": {
        "backgroundColor": "#125699",
        "color": "#eee",
        "border": "0.25rem solid #125699",
        "borderRadius": "0.5rem",
        "margin": "0.125rem",
        "padding": "0.5rem 1rem",
        "&:hover": {
            "color": "#eee",
            "backgroundColor": "#125699",
            "border": "0.25rem solid #125699",
            "transform": "translateY(-3px)",
            "boxShadow": "0 4px 13px #999fff",
        }
    },
}

module.exports = buttons;