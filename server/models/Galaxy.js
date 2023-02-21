import { Schema } from "mongoose";


const ObjectId = Schema.Types.ObjectId

export const GalaxySchema = new Schema({

    name: { type: String, default: 'Snickers', required: true }
})