Express in NodeJS - Templates and Template Engines
--------------------------------------------------

EJS is the Template Engine we will use.
npm install ejs --save

By default all views should be stored in 'views' folder.

If configured correctly, most view engines automatically hook to ExpressJS

we use the app.set() method to set the view engine.
app.set('view engine','ejs');

we use res.render(viewName, [Object model]) to render the response.
res.render('index');

