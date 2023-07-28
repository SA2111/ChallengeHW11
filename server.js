// express depencency
const express = require('express');
// route dependency for html
const dependentHTMLR = require('./routes/htmlR')
// api dependency
const dependentApi = require('./routes/api1')
// port dependency
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// iniciattes api route dependency
app.use(dependentApi)
// iniciattes html route dependency
app.use(dependentHTMLR)
// server iniciation
app.listen(PORT, () => {
    console.log(`Server link: http://localhost:${PORT}`);
});

