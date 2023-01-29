const  Song  = require('../models/Song') 

module.exports ={
    
    
    async index (req, res) {
        try {
          let songs = null
          const search = req.query.search
          //console.log('@@@'+ search)
          const { Op } = require("sequelize");
            songs = await Song.findAll({
                where: {
                    // success 01
                    //title:'마지막처럼 (AS IF IT\'\S YOUR LAST)'
                    
                    // success 02
                    //[Op.and]: [
                    //    { title: '마지막처럼 (AS IF IT\'\S YOUR LAST)' },
                    //    { artist: 'BLACKPINK' }
                    //],

                    // success 03
                    //[Op.or]: [
                    //    { title: '마지막처럼 (AS IF IT\'\S YOUR LAST)' },
                    //     { artist: 'black' }
                    // ]
                                        
                    // success 04
                    // [Op.and]: [
                    //    { title: '마지막처럼 (AS IF IT\'\S YOUR LAST)' },
                    //    { artist: search }
                    //]                   
                    
                    // success 05
                    //[Op.and]: [
                    //    { title: '마지막처럼 (AS IF IT\'\S YOUR LAST)' },
                    //    {artist: {
                    //        [Op.like]: ['%' + search + '%'],
                    //      }}     
                    //]                   
                                       
                     // success 06
                     [Op.or]: [
                        {title: {
                            [Op.like]: ['%' + search + '%'],
                        }},   
                        {artist: {
                            [Op.like]: ['%' + search + '%'],
                        }},
                        {genre: {
                            [Op.like]: ['%' + search + '%'],
                        }},
                        {album: {
                            [Op.like]: ['%' + search + '%'],
                        }},                                                
                        
                    ]                       


                }
            });
          res.send(songs)
          //console.log('the search term:' + search)
          //console.log(songs)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to fetch the songs'
          })
        }
      },
 
        

      


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