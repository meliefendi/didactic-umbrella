

const ClientRoute = require("./Routes/client.route")


module.exports = function (app, io) {
    app.use('/Client', ClientRoute)
}
