import express from "express"
import {create, fetch, update} from "../controller/employeeController.js"
const route = express.Router()

route.post("/create", create)
route.get("/fetch", fetch)
route.put("/update/:id", update)

export default route