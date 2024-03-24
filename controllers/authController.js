


const USER = [{
    username:"amith",
    password:"password"
}]


exports.post_login =async (req,res)=>{
    const {username,password} = req.body;

    console.log('username =',  username);
    console.log('password =', password);
    try {
        const user = await USER.find((element)=>{
            return element.username == username && element.password == password
        });
        console.log('user = ',user);
        if(user){
            // create a session 
            console.log('user is login');
            res.json({username})
        }
    } catch (error) {
          console.log('user is not defined ',error);  
    }

}