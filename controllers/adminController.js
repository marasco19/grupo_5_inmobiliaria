const adminController = {
    form: function (req, res) {
        res.render("formCreate");
    },
    list: function (req, res) {
        res.render("listProperties");
    }
}

module.exports = adminController;