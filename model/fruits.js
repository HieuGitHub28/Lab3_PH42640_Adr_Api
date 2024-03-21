const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Fruits = new Schema({
    name: {type: String},
    quantity: {type: Number},
    price: {type: Number},
    status: {type: Number}, // => 1: còn hàng, 0: hết hàng, -1 : ngừng bán
    image: {type: Array}, // => kiểu dữ liệu danh sách
    description: {type: String},
    id_distributor: {type: Schema.Types.ObjectId, ref: 'distributor'}
});

module.exports = mongoose.model('fruit',Fruits);

/*
    type: Schema.Types.ObjectId => kiểu dữ liệu id của mongdb
    ref: 'distributor' => khóa ngoại
*/