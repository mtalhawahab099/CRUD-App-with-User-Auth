import bcrypt from 'bcryptjs'
const hash_password=async(password)=>{
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword
}

 const check_password=async(password,hashedPassword)=>{
    return await bcrypt.compare(password,hashedPassword)
}
export default {check_password , hash_password};