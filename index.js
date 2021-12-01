const { INET } = require("sequelize/dist");
const { Product } = require("./models");

Product.create({
    productName: 'iPhone 13',
    tagLine: 'Your new superpower',
    learnMore: 'https://www.apple.com/iphone-13/',
    storeLink: 'https://www.apple.com/us/shop/goto/buy_iphone/iphone_13'
})
.then(function(createdProduct) {
    console.log('new product', createdProduct.toJSON());
})
.catch(function(err) {
    console.log('Error with adding new product', error);
});

Product.create({
    productName: 'AirPods',
    tagLine: 'All-new with Spatial Audio',
    learnMore: 'https://www.apple.com/airpods-3rd-generation/',
    storeLink: 'https://www.apple.com/us/shop/goto/product/MME73'
})
.then(function(createdProduct) {
    console.log('new product', createdProduct.toJSON());
})
.catch(function(err) {
    console.log('Error with adding new product', error);
});

Product.create({
    productName: 'HomePod mini',
    tagLine: '',
    learnMore: 'https://www.apple.com/homepod-mini/',
    storeLink: 'https://www.apple.com/us/shop/goto/buy_homepod/homepod_mini'
})
.then(function(createdProduct) {
    console.log('new product', createdProduct.toJSON());
})
.catch(function(err) {
    console.log('Error with adding new product', error);
});

Product.create({
    productName: 'iPhone 13 Pro',
    tagLine: 'Oh. So. Pro.',
    learnMore: 'https://www.apple.com/iphone-13-pro/',
    storeLink: 'https://www.apple.com/us/shop/goto/buy_iphone/iphone_13_pro'
})
.then(function(createdProduct) {
    console.log('new product', createdProduct.toJSON());
})
.catch(function(err) {
    console.log('Error with adding new product', error);
});

Product.create({
    productName: 'Choose (RED). Save Lives.',
    tagLine: 'Join us in celebrating 15 years of fighting AIDS together.',
    learnMore: '',
    storeLink: 'https://www.apple.com/product-red/'
})
.then(function(createdProduct) {
    console.log('new product', createdProduct.toJSON());
})
.catch(function(err) {
    console.log('Error with adding new product', error);
});

Product.create({
    productName: 'Let the holidays be for everyone',
    tagLine: '',
    learnMore: '',
    storeLink: 'https://www.apple.com/us/shop/goto/gifts'
})
.then(function(createdProduct) {
    console.log('new product', createdProduct.toJSON());
})
.catch(function(err) {
    console.log('Error with adding new product', error);
});

Product.create({
    productName: 'WATCH',
    tagLine: 'Introducing our largest display yet.',
    learnMore: 'https://www.apple.com/apple-watch-series-7/',
    storeLink: 'https://www.apple.com/us/shop/goto/buy_watch/apple_watch_series_7'
})
.then(function(createdProduct) {
    console.log('new product', createdProduct.toJSON());
})
.catch(function(err) {
    console.log('Error with adding new product', error);
});

Product.create({
    productName: 'Card',
    tagLine: 'Get up to 3% Daily Cash back with every purchase.',
    learnMore: 'https://www.apple.com/apple-card/',
    storeLink: 'https://wallet.apple.com/apple-card/setup/feature/ccs?referrer=cid%3Dapy-200-100018'
})
.then(function(createdProduct) {
    console.log('new product', createdProduct.toJSON());
})
.catch(function(err) {
    console.log('Error with adding new product', error);
});

Product.create({
    productName: 'Let the holidays be for everyone.',
    tagLine: '',
    learnMore: '',
    storeLink: 'https://www.apple.com/us/shop/goto/gifts'
})
.then(function(createdProduct) {
    console.log('new product', createdProduct.toJSON());
})
.catch(function(err) {
    console.log('Error with adding new product', error);
});

// FINDALL - 2

Product.findAll()
    .then(function (productArray) {
        console.log('ALL PRODUCT LISTINGS')
        for (let i = 0; i < productArray; i++) {
            console.log(productArray[i])
        }
    })
Product.findAll()
    .then(function (productArray) {
        console.log('SEASONAL TITLE CARD LISTINGS')
        for (let i = 0; i < productArray; i++) {
            if (productArray[i].productName == 'Let the holidays be for everyone') {
            console.log(productArray[i])
            }
        }
    })

// FINDONE - 3

Product.findOne({
    where: { learnMore: 'https://www.apple.com/iphone-13-pro/' }
}).then(function (foundProduct) {
    console.log('FOUND PRODUCT LISTING', foundProduct)
});

Product.findOne({
    where: { storeLink: 'https://www.apple.com/us/shop/goto/product/MME73' }
}).then(function (foundProduct) {
    console.log('FOUND PRODUCT LISTING', foundProduct)
});

Product.findOne({
    where: { tagLine: 'Your new superpower' }
}).then(function (foundProduct) {
    console.log('FOUND PRODUCT LISTING', foundProduct)
});

// FINDBYPK - 1

Product.findByPK(1)
    .then(function(productPK) {
        console.log('FOUND PRODUCT', productPK)
    })

// UPDATE - 2

Product.update({
    productName: 'HomePod mini',
    tagLine: '',
    learnMore: '',
    storeLink: ''
},{
    where: { id: 3 } 
})
.then(function(arrayResponse){
    console.log('NUMBER OF ROWS UPDATED');
    console.log(arrayResponse[0]); // datatype: 
})
.catch(function(err){
    console.log("ERROR with adding new team", err);
});

Product.update({
    productName: 'iPhone 13 Pro',
    tagLine: 'If you want it, you have to buy it',
    learnMore: '',
    storeLink: ''
},{
    where: { id: 4 } 
})
.then(function(arrayResponse){
    console.log('NUMBER OF ROWS UPDATED');
    console.log(arrayResponse[0]); // datatype: 
})
.catch(function(err){
    console.log("ERROR with adding new team", err);
});



// DESTROY - 1

Product.destroy({ where: { productName: 'WATCH' } })
.then(function(response){
    console.log('RESPONSE FROM DATABASE AFTER DELETING DATA...');
    console.log(response);
})
.catch(function(err){
    console.log("ERROR with deleting product", err);
});

