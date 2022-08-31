const ClientRoute = require('./client.route');



module.exports = function (app, io) {
    app.use("/Client", ClientRoute);

};

// module.exports = function (app, io) {
//     app.use("/ById", ClientRoute);
// };

// module.exports = function (app, io) {
//     app.post("/SaveShema", ClientRoute)
// };

// module.exports = function (app, io) {
//     app.post("/Update", ClientRoute)
// };

// module.exports = function (app, io) {
//     app.post("/DeleteClient", ClientRoute);
// };

