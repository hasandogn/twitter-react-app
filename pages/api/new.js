import Twit from '../../lib/twit'

export default (req, res) => {
    res.end(JSON.stringify({name: 'Hasan Dogan'}))
}
