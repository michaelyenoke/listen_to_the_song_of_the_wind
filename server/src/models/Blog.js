const Sequelize = require('sequelize')
const sequelize = require('./index')
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcryptjs'))

  const Blog = sequelize.define('blog', { 
    title: Sequelize.STRING, 
    subtitle: Sequelize.STRING,
    writer: Sequelize.STRING,
    ImageUrl: Sequelize.STRING,
    youtubeId: Sequelize.STRING,
    content: Sequelize.TEXT,
    tab: Sequelize.TEXT
  })


  module.exports = Blog

