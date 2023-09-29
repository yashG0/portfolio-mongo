import mongoose from 'mongoose'

const username = process.env.username;
const password = process.env.password;

export const mongoUrl = `mongodb+srv://${username}:${password}@cluster0.zrbe5qg.mongodb.net/form_data_db?retryWrites=true&w=majority`;