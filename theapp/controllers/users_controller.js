var User = require("../models/user");

function home (req, res, next) {
  res.render('index', { user: req.user });
}

function show (req, res, next) {

}

function close (req, res, next) {
  res.render('close');
}

function edit (req, res, next) {

}

function update (req, res, next) {

}

function destroy (req, res, next) {

}

module.exports = {
  home:     home,
  show:     show,
  close:    close,
  edit:     edit,
  update:   update,
  destroy:  destroy
}
