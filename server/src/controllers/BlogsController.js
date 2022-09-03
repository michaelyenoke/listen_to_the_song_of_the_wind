const  Blog  = require('../models/Blog') 

module.exports ={
    
    async get (req, res) {
        try {
            const blogs = await Blog.findAll({
                limit: 10
            })
            res.send(blogs)
        }catch (err) {
            await res.status(500).send({
                error: 'an error has occured trying to fetch the blogs'
            })
        }
    }

}