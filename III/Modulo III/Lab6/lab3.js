/**
 *     @author German Torres <masterapeter@gmail.com>
 *     @fileOverview Module III Lab 3 
 *     @licence BSD 3-Clause License
 */

// declaration vars

let productName = "null";
let productType = "null";
let quantity = "null";
let price = "null";
let latitude = "null";
let longitude = "null";
let product = {};

const wordToCapitalize = word => {
    let toCapitalize = null;
    if (word !== null && word !== undefined && word.length > 0) {
        toCapitalize = word[0].toUpperCase() + word.slice(1);
    }
    debugger
    return toCapitalize;
};

/**
 * @method
 * @param data
 * @returns {Object|null}
 * @description this method use for build data for send to server
 */
const buildProductDataForRequest = data => {
    let buildProductDataForRequest = null;

    if (data !== null && data !== undefined) {
        buildProductDataForRequest = {
            productName: data.productName,
            productType: data.productType,
            quantity: data.quantity,
            price: data.price,
            latitude: data.latitude,
            longitude: data.longitude
        }
    }
    debugger
    return buildProductDataForRequest;
};

const getDataFormMyForm = () => {
   const floatingInputproductName = document.getElementById("floatingInputproductName").value;
   const floatingInputproductType = document.getElementById("floatingInputproductType").value;
   const floatingInputquantity = document.getElementById("floatingInputquantity").value;
   const floatingInputprice = document.getElementById("floatingInputprice").value;
   const floatinglatitude = document.getElementById("floatinglatitude").value;
   const floatinglongitude = document.getElementById("floatinglongitude").value;
   debugger

    //2. sanitize data
    productName = wordToCapitalize(floatingInputproductName);
    productType = wordToCapitalize(floatingInputproductType);
    quantity = wordToCapitalize(floatingInputquantity);
    price = floatingInputprice;
    latitude = floatinglatitude;
    longitude = floatinglongitude;

    debugger

    // 3. prepare to send
    product = buildProductDataForRequest({productName: productName, productType: productType, quantity: quantity, price: price, latitude: latitude, longitude: longitude});
    console.log(product)
    debugger
};

