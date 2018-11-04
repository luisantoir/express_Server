const items = [
    {id: 1, name: 'product1'},
    {id: 2, name: 'product2'},
    {id: 3, name: 'product3'},
    {id: 4, name: 'product4'},
    {id: 5, name: 'product5'},
    {id: 6, name: 'product6'}
];


const index = (req, res) =>{
    res.render('index', {
        title : 'My Webstore'
    });
};



 const getProducts = (req, res, next) =>{
    res.render('products', {
        title : 'List of products',
        items: items
    });
};

const addProduct = (req, res, next) =>{
    const {newItem} = req.body;
    items.push({
        id: items.length + 1,
        name : newItem
    });
    res.redirect('/products');
};


module.exports = {
    index,
    getProducts,
    addProduct
  };