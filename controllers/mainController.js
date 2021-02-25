const mainController = {
    index: function (req, res) {
        res.render("index");
    },
    productDetail: function (req, res) {
        res.render("productDetail");
    },
    login: function (req, res) {
        res.render("login");
    },
    forgot: function (req, res) {
        res.render("forgot");
    },
    carrito: function (req, res) {
        res.render("carrito");
    },
    crearcuenta: function (req, res) {
        res.render("crearcuenta");
    }


}

module.exports = mainController;