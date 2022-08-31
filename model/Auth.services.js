

// const connection = require ("../utility/database");

// module.exports = class services{
//     constructor(name,lastName,password,mail){
//         this.name = name;
//         this.lastName = lastName;
//         this.password = password;
//         this.mail = mail
//     }
// }




var services = {
    auth: (params, callback) => {
        const { mail, password } = params;
        callback(null, {
            id: 1,
            name: "melih",
            lastName: "akkas",
            mail,
            password
        })
    }

}


module.exports = services;
