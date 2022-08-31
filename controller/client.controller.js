const ClientService = require('../service/client.service');


module.exports.Get = (req, res) => {
    ClientService.getAll().then((error, result) => {
        res.json({ error, result })
    });
};

module.exports.GetById = (req, res) => {
    ClientService.getById().then((error, result) => {
        res.json({ error, result })
    })
};

module.exports.SaveShema = (req, res) => {
    ClientService.saveShema().then((error, result) => {
        console.log(error, result)
    })
};
module.exports.UpdateId = (req, res) => {
    ClientService.Update().then((error, result) => {
        console.log(error, result)
    })
};

module.exports.DeleteId = (req, res) => {
    ClientService.DeleteById().then((error, result) => {
        console.log(error,result)
    })
};