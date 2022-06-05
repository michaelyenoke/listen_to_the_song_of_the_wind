const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./polices/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')

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
}