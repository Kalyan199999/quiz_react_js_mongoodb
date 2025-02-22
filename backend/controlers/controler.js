const Quiz = require('../model/quations');

const getQuation = async (req,res)=>{

    console.log("Get Data method is called!");

    try 
    {
        const data = await Quiz.find({});
        
        return res.status(200).json({message:"Quation fecthed successfully!" , data:data , isfetched:true})        
    } 
    catch (error) {
        
        return res.status(404).json({message:"Can not fetch the quation!",data:error , isfetched:false})
    }
}

const postQuation = async (req,res)=>{

    
    console.log("Post Data method is called!");

    try 
    {
        console.log(req.body);

        const data = await Quiz.create(req.body);
        data.save();
        
        return res.status(200).json({ message:"Quation Added successfully!" , data:data , isInserted:true})        
    } 
    catch (error) {
        
        return res.status(404).json({ message:"Error!" , data:error , isInserted:false})
    }
}

module.exports = {
    getQuation,
    postQuation
}