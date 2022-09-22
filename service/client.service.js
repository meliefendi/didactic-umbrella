
const connection = require("../utility/database");

module.exports = class Shema {
    // constructor(name, lastName, password, mail, tcno) {
    //     this.name = name;
    //     this.lastName = lastName;
    //     this.password = password;
    //     this.mail = mail;
    //     this.tcno = tcno;
    // }

    static get = async ({ params, query, body, custom, token }) => {
        try {
            let { id } = query ? query : {}
            let sql = 'SELECT * FROM client'
            let additionalSql = ''
            let data = [];
            if (id != null) {
                additionalSql = ' WHERE client.id=?';
                data = [id]
            } else {
                additionalSql = '';
            }
            sql = sql + additionalSql;
            let result = await connection.execute(sql, data)
            if(id != null){
                return result[0];
            }else{
                return result;
            }
          
        } catch (err) {
            throw Error(err)
        }
    }

    static create = async ({ params, query, body, custom, token }) => {
        try {
            let { name, lastName, password, mail, tcno } = body ? body : {};
            let sql = 'INSERT INTO client (name, lastName, password, mail, tcno) VALUES (?,?,?,?,?);'
            let data = [name, lastName, password, mail, tcno]
            let result = await connection.execute(sql, data);
            return result[0];
        } catch (err) {
            throw Error(err)
        }
    }

    static update = async ({ params, query, body, custom, token }) => {
        try {
            let { id } = query ? query : {};
            let { name, lastName, password, mail, tcno } = body ? body : {};
            let sql = 'UPDATE client SET name=?, lastName=?, password=?, mail=?, tcno=? WHERE id=?;'
            let data = [name, lastName, password, mail, tcno, id]
            let result = await connection.execute(sql, data);
            return result;
        } catch (err) {
            throw Error(err)
        }
    }

    static delete = async ({ params, query, body, custom, token }) => {
        try {
            let { id } = query ? query : {};
            let sql = 'DELETE FROM client  WHERE id=?;'
            let data = [id]
            let result = await connection.execute(sql, data);
            return result;
        } catch (err) {
            throw Error(err)
        }
    }

    static patch = async ({ params, query, body, custom, token }) => {
        try {
            let { id } = query ? query : {};
            let { key , value } = body ? body : {};
            let sql = 'UPDATE client SET '+ key +'=? WHERE id=?;'
            let data = [value, id];
            let result = await connection.execute(sql, data);
            return result;
        } catch (err) {
            throw Error(err)
        }
    }


}
