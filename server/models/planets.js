import { Schema } from "mongoose";

export const PlanetsSchema = new Schema({

    name: { type: String, default: 'new planet', required: true }
})