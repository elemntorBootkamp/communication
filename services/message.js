const message= require('../models/message')

module.exports = {
    getAll:()=>{
        message.find({}, (err, result)=> {
                if (err)
                    throw new Error(err)
                else
                {
                    return result
                }
            })
        }
    }
