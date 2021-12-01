const { Item } = require("./models");

Item.create({
    name: 'AIRPODS (3RD GENERATION)',
    tagLine: "It's magic, remastered.",
    price: '$179'
})
.then(function(createdProduct) {
    console.log('new product', createdProduct.toJSON());
})
.catch(function(err) {
    console.log('Error with adding new item', error);
});

Item.create({
    name: 'IPAD',
    tagLine: 'Delightfully capable. Surprisingly affordable.',
    price: 'From $329 or $27.41/mo. for 12 mo.'
})
.then(function(createdProduct) {
    console.log('new product', createdProduct.toJSON());
})
.catch(function(err) {
    console.log('Error with adding new item', error);
});

Item.create({
    name: 'HOMEPOD MINI',
    tagLine: "You've never heard color like this.",
    price: 'Just $99'
})
.then(function(createdProduct) {
    console.log('new product', createdProduct.toJSON());
})
.catch(function(err) {
    console.log('Error with adding new item', error);
});

Item.create({
    name: 'IPHONE 13 PRO',
    tagLine: 'Oh. So. Pro.',
    price: 'From $999.00 or $41.62/mo. for 24 mo.* before trade-in'
})
.then(function(createdProduct) {
    console.log('new product', createdProduct.toJSON());
})
.catch(function(err) {
    console.log('Error with adding new item', error);
});

Item.create({
    name: 'MACBOOK PRO 14-INCH AND 16 INCH',
    tagLine: 'Supercharged for pros.',
    price: 'From $1999 or $166.58/mo. for 12 mo.'
})
.then(function(createdProduct) {
    console.log('new product', createdProduct.toJSON());
})
.catch(function(err) {
    console.log('Error with adding new item', error);
});

Item.create({
    name: 'IPHONE 13',
    tagLine: 'Your new superpower.',
    price: 'From $699.00 or $29.12/mo. for 24 mo.* before trade-in'
})
.then(function(createdProduct) {
    console.log('new product', createdProduct.toJSON());
})
.catch(function(err) {
    console.log('Error with adding new item', error);
});

Item.create({
    name: 'IPAD MINI',
    tagLine: 'Mega power. Mini sized',
    price: 'From $499 or $41.58/mo. for 12 mo.'
})
.then(function(createdProduct) {
    console.log('new product', createdProduct.toJSON());
})
.catch(function(err) {
    console.log('Error with adding new item', error);
});

Item.create({
    name: 'APPLE WATCH SERIES 7',
    tagLine: 'Full screen ahead.',
    price: 'From $399 or $16.62/mo. for 24 mo.'
})
.then(function(createdProduct) {
    console.log('new product', createdProduct.toJSON());
})
.catch(function(err) {
    console.log('Error with adding new item', error);
});

Item.create({
    name: 'HOLIDAY',
    tagLine: 'Let the holidays be for everyone.',
    price: 'Shop gifts during this season of giving'
})
.then(function(createdProduct) {
    console.log('new product', createdProduct.toJSON());
})
.catch(function(err) {
    console.log('Error with adding new item', error);
});

Item.create({
    name: 'IPHONE 12',
    tagLine: 'Meet your new best friend.',
    price: 'From $799 or 20.43/mo. for 12 mo.'
})
.then(function(createdItem) {
    console.log('new product', createdItem.toJSON());
})
.catch(function(err) {
    console.log('Error with adding new item', error);
});

// FINDALL - 2

Item.findAll()
    .then(function (itemArray) {
        console.log('ALL PRODUCT LISTINGS')
        for (let i = 0; i < itemArray; i++) {
            console.log(itemArray[i])
        }
    })
Item.findAll()
    .then(function (itemArray) {
        console.log('SEASONAL TITLE CARD LISTINGS')
        for (let i = 0; i < itemArray; i++) {
            if (itemArray[i].name == 'HOLIDAY') {
            console.log(itemArray[i])
            }
        }
    })

// FINDONE - 3

Item.findOne({
    where: { name: 'IPHONE 13' }
}).then(function (foundItem) {
    console.log('FOUND PRODUCT LISTING', foundItem)
});

Item.findOne({
    where: { tagLine: 'Mega power. Mini sized' }
}).then(function (foundProduct) {
    console.log('FOUND PRODUCT LISTING', foundItem)
});

Item.findOne({
    where: { price: 'From $399 or $16.62/mo. for 24 mo.' }
}).then(function (foundItem) {
    console.log('FOUND PRODUCT LISTING', foundItem)
});

// FINDBYPK - 1

Item.findByPK(1)
    .then(function(itemPK) {
        console.log('FOUND ITEM', itemPK)
    })

// UPDATE - 2

Item.update({
    name: 'HOMEPOD MINI',
    tagLine: "You've never heard color like this. But you cannot afford it, trust us.",
    price: 'Just $99,000'
},{
    where: { id: 3 } 
})
.then(function(arrayResponse){
    console.log('NUMBER OF ROWS UPDATED');
    console.log(arrayResponse[0]); // datatype: 
})
.catch(function(err){
    console.log("ERROR with adding new item attributes", err);
});

Item.update({
    name: 'AIRPODS (3RD GENERATION)',
    tagLine: "It's magic, remastered. But much, much more expensive",
    price: '$10,000'
},{
    where: { id: 1 } 
})
.then(function(arrayResponse){
    console.log('NUMBER OF ROWS UPDATED');
    console.log(arrayResponse[0]); // datatype: 
})
.catch(function(err){
    console.log("ERROR with adding new item attributes", err);
});



// DESTROY - 1

Item.destroy({ where: { name: 'APPLE WATCH SERIES 7' } })
.then(function(response){
    console.log('RESPONSE FROM DATABASE AFTER DELETING DATA...');
    console.log(response);
})
.catch(function(err){
    console.log("ERROR with deleting item", err);
});