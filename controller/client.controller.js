const ClientService = require('../service/client.service');

module.exports.Get = async (req, res) => {
    let result = await ClientService.get(req);
    res.json(result);
};

module.exports.Create = async (req, res) => {
    let result = await ClientService.create(req);
    res.json(result);
};

module.exports.Update = async (req, res) => {
    let result = await ClientService.update(req);
    res.json(result);
};

module.exports.Delete = async (req, res) => {
    let result = await ClientService.delete(req);
    res.json(result);
};

module.exports.Patch = async (req, res) => {
    let result = await ClientService.patch(req);
    res.json(result);
};
