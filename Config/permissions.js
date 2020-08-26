module.exports = {
    admin: function(req, res, next) {
        if (req.isAuthenticated() && req.user.admin == 1) {
            return next();
        }
        else {
            req.flash("error_msg", "Necessario ter permissões root/Admin")
            res.redirect("/")
        }
    }
}
