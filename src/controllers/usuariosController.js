const {
      getNome
    , setNome
    , getVerificado
    , setVerificado
} = require('../models/Usuarios')
const UsuariosDAO = require('../models/DAO/UsuariosDAO')

const verificarUsuario = (userId) => {
    return UsuariosDAO.find({
        userId: userId
    }).then(result => {
        if (result.toString() === '') setVerificado(false)
        else {
            setNome(result[0].nome)
            setVerificado(true)
        }
    })
}

const inserirUsuario = (nome, userId) => {
    UsuariosDAO.create({
          nome: nome
        , userId: userId
    })
}

module.exports = {
      getNome
    , setNome
    , getVerificado
    , setVerificado
    , verificarUsuario
    , inserirUsuario
}