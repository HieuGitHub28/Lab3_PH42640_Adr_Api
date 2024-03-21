const mongoose = require('mongoose');

// link connect
// 'mongodb+srv://<username>:<password>@cluster0.0n8qgpd.mongodb.net/<tên_database>'
const uri = 'mongodb+srv://phamhieu28042004:L5Kp1scgTm38FBw5@cluster0.dgaxwcr.mongodb.net/Lab3_ADR_API';

const connect = async () => {
    try{
        await mongoose.connect(uri);
        console.log('connect success');
    }catch(err){
        console.log(err);
        console.log('connect fail')
    }
}

module.exports = {connect}