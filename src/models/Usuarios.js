let   nome
    , verificado

const getNome = () => {
    return this.nome
}

const setNome = (nome) => {
    this.nome = nome
}

const getVerificado = () => {
    return this.verificado
}

const setVerificado = (bool) => {
    this.verificado = bool
}

module.exports = {
      getNome
    , setNome
    , getVerificado
    , setVerificado
}