# Express in NodeJS - Static Files and Middleware
-----------------------------------------------

Middleware is the code that sits between two layers of software.

In  the case of Express, sitting between the request and response.

It is a good practice to put all static file in a folder named `public`.

When developing web apps it is common to use a bunch of static files like _CSS, JS, Images etc_.

Wouldn't it be better if we can point the path for these static resources at one place for all the requests in our app?

For accessing static files in Express we use the Express Middleware.
The `use()` method in Express takes a URL pattern and points it to a real physical directory/path using the `express.static(<path>) ` method. We can say that `express.static` is the middleware.

We can even create our own middleware. we use the `use()` method to map URL patterns to function (Middleware is usually a function). 
This midddleware function takes 3 parameters: `request`, `response`, `nextMiddleware`.

We invoke the `next()` method to continue execution with the next middleware.


