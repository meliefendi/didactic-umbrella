
const connection = require("../utility/database");

module.exports = class Shema {
    constructor(name, lastName, password, mail, tcno) {
        this.name = name;
        this.lastName = lastName;
        this.password = password;
        this.mail = mail;
        this.tcno = tcno;

    }
    saveShema() {
        return connection.execute('INSERT INTO client(name,lastName,password,mail,tcno)VALUES(?,?,?,?,?)', 
        [this.name, this.lastName, this.password, this.mail, this.tcno]);
    }
    static getAll() {
        return connection.execute('SELECT * FROM client');
    }
    static getById(id) {
        return connection.execute('SELECT * FROM client WHERE client.id=?', [id]);
    }

    static Update(shema) {
        return connection.execute("UPDATE client SET client.name=?,client.lastName=?, client.mail=?, client.password=?, client.mail=?, client.tcno=?,WHERE client.id=?", [shema.name, shema.lastName, shema.password, shema.mail, shema.tcno, shema.id]);
    }
    static Update(shema) {

    }
    static DeleteById(id) {
        return connection.execute("DELETE FROM client WHERE id=?", [id]);
    }
}
