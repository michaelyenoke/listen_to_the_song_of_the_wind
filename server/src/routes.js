const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./polices/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BlogsController = require('./controllers/BlogsController')

module.exports = (app) => {

    // AuthenticationController

    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)
    
    app.post('/login',
        AuthenticationController.login) 
    

    // SongsController

        
    app.get('/songs',
        SongsController.index)

    app.get('/songs',
        SongsController.get)


    app.post('/songs',
        SongsController.post)


    app.get('/songs/:songId',
        SongsController.show)    


    app.put('/songs/:songId/edit',
        SongsController.put)   
        
    // BlogController

    app.get('/blogs',
        BlogsController.get)


}
