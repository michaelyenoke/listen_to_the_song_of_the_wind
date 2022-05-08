const Sequelize = require('sequelize')
const sequelize = require('./index')



const User = sequelize.define('test01', { //資料庫名稱
    email: {
      type: Sequelize.STRING,
      unique: true
    },
    password: Sequelize.STRING
    },
)



module.exports = User