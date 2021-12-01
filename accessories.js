const { Accessory } = require("./models");

Accessory.create({
    homeKit: false,
    name: 'MagSafe Battery Pack',
    price: 99
})
.then(function(createdProduct) {
    console.log('new product', createdProduct.toJSON());
})
.catch(function(err) {
    console.log('Error with adding new accessory', error);
});

Accessory.create({
    homeKit: false,
    name: 'Incase Reform Sport Case for AirPods Pro',
    price: 34
})
.then(function(createdProduct) {
    console.log('new product', createdProduct.toJSON());
})
.catch(function(error) {
    console.log('Error with adding new accessory', error);
});

Accessory.create({
    homeKit: false,
    name: 'Apple Pencil (2nd generation',
    price: 129
})
.then(function(createdProduct) {
    console.log('new product', createdProduct.toJSON());
})
.catch(function(error) {
    console.log('Error with adding new accessory', error);
});

Accessory.create({
    homeKit: false,
    name: 'HomePod mini - White',
    price: 99
})
.then(function(createdProduct) {
    console.log('new product', createdProduct.toJSON());
})
.catch(function(error) {
    console.log('Error with adding new accessory', error);
});

Accessory.create({
    homeKit: true,
    name: 'Nanoleaf Essentials A19 Bulb',
    price: 19
})
.then(function(createdProduct) {
    console.log('new product', createdProduct.toJSON());
})
.catch(function(error) {
    console.log('Error with adding new accessory', error);
});

Accessory.create({
    homeKit: true,
    name: 'Nanoleaf Essentials 80" Lightstrip Starter Kit',
    price: 49
})
.then(function(createdProduct) {
    console.log('new product', createdProduct.toJSON());
})
.catch(function(error) {
    console.log('Error with adding new accessory', error);
});

Accessory.create({
    homeKit: false,
    name: 'Magic Keyboard for iPad Pro 12.9-inch (5th generation) - White',
    price: 349
})
.then(function(createdProduct) {
    console.log('new product', createdProduct.toJSON());
})
.catch(function(err) {
    console.log('Error with adding new accessory', error);
});

Accessory.create({
    homeKit: false,
    name: 'JOBY TelePod Mobile All-in-One Tripod for iPhone',
    price: 59
})
.then(function(createdProduct) {
    console.log('new product', createdProduct.toJSON());
})
.catch(function(error) {
    console.log('Error with adding new accessory', error);
});

Accessory.create({
    homeKit: false,
    name: 'HidrateSpark STEEL - 21 oz. (620ml) Chug + Bonus Straw Lid',
    price: 69
})
.then(function(createdProduct) {
    console.log('new product', createdProduct.toJSON());
})
.catch(function(error) {
    console.log('Error with adding new accessory', error);
});

Accessory.create({
    homeKit: false,
    name: 'MagSafe Duo Charger',
    price: 129
})
.then(function(createdProduct) {
    console.log('new product', createdProduct.toJSON());
})
.catch(function(error) {
    console.log('Error with adding new accessory', error);
});

// FINDALL - 2

Accessory.findAll()
    .then(function (accessoryArray) {
        console.log('ALL PRODUCT LISTINGS')
        for (let i = 0; i < accessoryArray; i++) {
            console.log(accessoryArray[i])
        }
    })
Accessory.findAll()
    .then(function (accessoryArray) {
        console.log('HOMEKIT LISTINGS')
        for (let i = 0; i < accessoryArray; i++) {
            if (accessoryArray[i].homeKit == true) {
            console.log(accessoryArray[i])
            }
        }
    })

// FINDONE - 3

Accessory.findOne({
    where: { name: 'Nanoleaf Essentials 80" Lightstrip Starter Kit' }
}).then(function (foundAccessory) {
    console.log('FOUND PRODUCT LISTING', foundAccessory)
});

Accessory.findOne({
    where: { price: 49 }
}).then(function (foundAccessory) {
    console.log('FOUND PRODUCT LISTING', foundAccessory)
});

Accessory.findOne({
    where: { name: 'Apple Pencil (2nd generation' }
}).then(function (foundAccessory) {
    console.log('FOUND PRODUCT LISTING', foundAccessory)
});

// FINDBYPK - 1

// Accessory.findByPK(1)
//     .then(function(accessoryPK) {
//         console.log('FOUND ITEM', accessoryPK)
//     })

// UPDATE - 2

Accessory.update({
    homeKit: false,
    name: 'Apple Pencil (2nd generation)',
    price: 129
},{
    where: { id: 3 } 
})
.then(function(arrayResponse){
    console.log('NUMBER OF ROWS UPDATED');
    console.log(arrayResponse[0]); // datatype: 
})
.catch(function(err){
    console.log("ERROR with adding new accessory attributes", err);
});

Accessory.update({
    homeKit: true,
    name: 'MagSafe Battery Pack',
    price: 99
},{
    where: { id: 1 } 
})
.then(function(arrayResponse){
    console.log('NUMBER OF ROWS UPDATED');
    console.log(arrayResponse[0]); // datatype: 
})
.catch(function(err){
    console.log("ERROR with adding new accessory attributes", err);
});



// DESTROY - 1

Accessory.destroy({ where: { name: 'JOBY TelePod Mobile All-in-One Tripod for iPhone' } })
.then(function(response){
    console.log('RESPONSE FROM DATABASE AFTER DELETING DATA...');
    console.log(response);
})
.catch(function(err){
    console.log("ERROR with deleting accessory", err);
});