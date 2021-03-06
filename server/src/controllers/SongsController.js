const  Song  = require('../models/Song') 

module.exports ={
    
    async get (req, res) {
        try {
            const songs = await Song.findAll({
                limit: 10
            })
            res.send(songs)
        }catch (err) {
            await res.status(500).send({
                error: 'an error has occured trying to fetch the songs'
            })
        }
    },

    async post (req, res) {
        try {
            const song = await Song.create(req.body)
            res.send(song.toJSON())
        }catch(err){
            res.status(500).send({
                error:'An error has occured trying to create the songs'
            })
        }
    },


    async show (req, res) { // 這個show還不是http方法 -> routes.js的才是
        try {
            const song = await Song.findByPk(req.params.songId)
            res.send(song)
        } catch (err) {
            await res.status(500).send({
                error: 'an error has occured trying to fetch the songs'
            })
        }
    },


    async put (req, res) {
        try {
            const song = await Song.update(req.body,{
                where:{
                    id: req.params.songId
                }
            })
            res.send(req.body)
        } catch (err) {
            await res.status(500).send({
                error: 'an error has occured trying to update the song'
            })
        }
    }

}