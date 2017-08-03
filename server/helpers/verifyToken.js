const jwt = require('jsonwebtoken');
require('dotenv').config()

let verifyTokenForAdmin = (req, res, next) => {
  let roleauth = jwt.verify(req.headers.token, process.env.SECRET)
  console.log(roleauth);
  if (roleauth.userrole === 'admin') {
    next()
  } else {
    res.send('Maaf anda tidak memiliki akses ke halaman ini')
  }
}

let verifyTokenForAdminKasir = (req, res, next) => {
  let roleauth = jwt.verify(req.headers.token, process.env.SECRET)
  console.log(roleauth);
  if ((roleauth.userrole === 'admin') || (roleauth.userrole === 'kasir' && roleauth.userid == req.params.id)) {
    next()
  } else {
    res.send('Maaf anda tidak memiliki akses ke halaman ini')
  }
}

module.exports = {
  verifyTokenForAdmin,
  verifyTokenForAdminKasir
}
