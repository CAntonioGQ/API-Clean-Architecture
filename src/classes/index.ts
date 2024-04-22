import "reflect-metadata"
import app from "../app"
import { AppDataSource } from '../database/db'


async function main() {

    try {
        await AppDataSource.initialize()
        console.log('Database Connected')
        app.listen(8000)
        console.log('Server is listening on PORT', 8000)
    
    } catch (error) {
        console.error(error)
    }
}
main()