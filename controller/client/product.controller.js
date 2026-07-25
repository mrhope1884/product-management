module.exports.index = (req, res) => {
    res.render("client/pages/products/index", 
        {pageTitle: "Trang sản phẩm "}
    );
}

module.exports.edit = (req, res) => {
    res.render("client/pages/products/edit", 
        {pageTitle: "Trang edit sản phẩm "}
    );
}