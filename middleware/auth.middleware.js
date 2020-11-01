const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next()
  }

  try {
    const token = req.headers.authorization.split(' ')[1]

    if (!token) {
      return res.status(401).json({ message: 'Нет авторизации' })
    }

    // const decoded = jwt.verify(token, config.get('jwtSecret'))
    // req.user = decoded
    // next()

    jwt.verify(token, process.env.jwtSecret, function (err, decoded) {
      if (err) throw new Error(err) // Manage different errors here (Expired, untrusted...)

      req.user = decoded // If no error, token info is returned in 'decoded'
      next()
    });

  } catch (e) {
    res.status(401).json({ message: 'Нет авторизации' })

  }
}
