const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username : {
        type: String,
        require : true,
        unique: true,
        maxLength : 50
    },
    password : {
        type: String,
        require : true,
        maxLength : 50
    },
    email : {
        type: String,
        unique: true,
        require : true,
    },
    gender : {
        type: Boolean,
        default: false
    },
    avatar:{
        type: String
    },
    age : {
        type: Number,
    }
},{
    timestamps: true
})

const UserModel = mongoose.model('user',UserSchema);

module.exports = UserModel;

// mongoose.model('user',UserSchema);
// đặt tên Collection ở dạng số ít
// mongoose sẽ tự động tạo ra tên conllection ở dạng số nhiều
// (VD : user => users)

/*
    type: String, Number, Boolean  => kiểu dữ liệu
    unique: true => không được trùng
    maxLength: 50 => ký tự tối đa được nhập là 50
    default: false => giá trị mặc định là false
    timestamps => tạo ra 2 trường createAt và updateAt
*/