const path = require('path');

module.exports = {
    entry: './styles/main.js', // Your entry file
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public'),
    },
    mode: 'development',
    watch: true,
};
