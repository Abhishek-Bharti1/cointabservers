const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const connection = mongoose.connect("mongodb+srv://abhishekbharti:abhishek@cluster0.zsppc.mongodb.net/cointab?retryWrites=true");



module.exports = {connection};