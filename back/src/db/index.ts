import { createConnection } from "typeorm"

export const getConnection = async () => {
    const connection = await createConnection({
        type: "postgres",
        host: "database-german.clkavcr2w7q4.us-east-2.rds.amazonaws.com",
        database:"postgres",
        port: 5432,
        username:"postgres",
        password: "gi4wSyyST54m94dZA3pH",
        synchronize: true,
        logging: true,
        entities:[
            `${__dirname}/../entity/*`
        ]
    })
    return connection
}