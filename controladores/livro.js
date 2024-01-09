function getLivros(req, res) {
    try {
        res.send('Olá metaverso!')
    }catch (erro) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros
}