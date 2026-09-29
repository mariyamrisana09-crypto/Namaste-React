// const heading = React.createElement('h1', { id : "heading"}, 'hellow world from react from another file !!!');

// nested structure

const parent = React.createElement('div', { id: 'parent' },
    [React.createElement('div', { id: 'child' },
        [
            React.createElement('h1', {}, 'i am an h1 tag !!!! '),
            React.createElement('h2', {}, 'i am an h2 tag !!!! ')
        ]
    ),
    React.createElement('div', { id: 'child' },
        [
            React.createElement('h1', {}, 'i am an h1 tag !!!! '),
            React.createElement('h2', {}, 'i am an h2 tag !!!! ')
        ]
    )
    ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

console.log(parent);


root.render(parent);



