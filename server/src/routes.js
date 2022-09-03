const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./polices/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BlogsController = require('./controllers/BlogsController')

module.exports = (app) => {


    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)
    
    
    app.post('/login',
        AuthenticationController.login) 
    
        
    app.get('/songs',
        SongsController.get)


    app.post('/songs',
        SongsController.post)


    app.get('/songs/:songId',
        SongsController.show)    


    app.put('/songs/:songId/edit',
        SongsController.put)   
        
    
    app.get('/blogs',
        BlogsController.get)


}
