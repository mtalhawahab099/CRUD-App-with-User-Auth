import mongoose from 'mongoose';

const Connection =()=>{
    try{
        mongoose.connect('mongodb://127.0.0.1:27017/Reg', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

        console.log('database is connected')
    }catch(error){
        console.log(error)
    }
}
export default Connection;