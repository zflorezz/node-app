import express from "express"
import {create, fetch, update, findEmployee} from "../controller/employeeController.js"
const route = express.Router()

route.get("/fetch", fetch)

export default route