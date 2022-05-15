const User = require('../models/User') 
const jwt = require('jsonwebtoken')
const database_config = require('../config/database_config')



// JWT token
function jwtSignUser (user) {
    const ONE_WEEK = 60*60*24*7
    return jwt.sign(user, database_config.authentication.jwtSecret,{
        expiresIn: ONE_WEEK
    })
}




module.exports ={

    async register (req, res) {
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON())
        }catch(err){
            res.status(400).send({
                error:'This emal account is already in use. MOTHERFUCKER!'
            })
        }
    },

    async login(req,res){
        try{
            const {email, password} = req.body
            const user = await User.findOne({
                where:{
                    email:email
                }
            })
                        
            //查看問題 ：
            console.log('Console Log Here:')   
            console.log('user',user.toJSON())   

            if(!user){
                return res.status(403).send({
                    error:'The login information was incorrect.'
                })
            }

            //const isPasswordValid = password === user.password
            const isPasswordValid = await user.comparePassword(password)

            //查看問題：
            console.log(password, user.password)
            console.log(isPasswordValid)
            console.log('checked')



            if(!isPasswordValid) {
                return res.status(403).send({
                    error:'The login information was incorrect'
                })
            }


            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson) //加入這行
            })


            console.log('#test@@@@')
            console.log(userJson)
            console.log(jwtSignUser(userJson))



        }catch(err){
            res.status(500).send({
                error:'An error has occured trying to log in.'
            })

        }


    }





}