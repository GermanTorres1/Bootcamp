/**
 *     @author German Torres <masterapeter@gmail.com>
 *     @fileOverview Module III Lab 4 
 *     @licence BSD 3-Clause License
 */



// declaration vars

let email = "";
let name = "";
let lastname = "";
let phone = "";
let pass = "";
let user = {};



/**
 * @method
 * @param word
 * @returns {string|null}
 * @description this method use for capitalize a word
 */
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
 * @param word
 * @returns {string|undefined}
 * @description this method use for encoded a word in base64
 */
const encodeBase64 = word => {
    let encodedStringBtoA = undefined;
    if (word !== null && word !== undefined && word.length > 0) {
        encodedStringBtoA = btoa(word);
    }
    debugger
    return encodedStringBtoA;
};

/**
 * @method
 * @param data
 * @returns {Object|null}
 * @description this method use for build data for send to server
 */
const buildUserDataForRequest = data => {
    let buildUserDataForRequest = null;

    if (data !== null && data !== undefined ) {
        buildUserDataForRequest = {
            email: data.email,
            name: data.name,
            lastname: data.lastname,
            phone: data.phone,
            password: data.password
        }
    }
    debugger
    return buildUserDataForRequest;
    
};

const getUserDataForm = () => {

    //1. first step load data from html
    const floatingInputEmail = document.getElementById("floatingInputEmail").value;
    const floatingInputName = document.getElementById("floatingInputName").value;
    const floatingInputLastname = document.getElementById("floatingInputLastname").value;
    const floatingInputPhone = document.getElementById("floatingInputPhone").value;
    const floatingPassword = document.getElementById("floatingPassword").value;
    debugger

// 2 sanetize data
    email = floatingInputEmail;
    Name = wordToCapitalize(floatingInputName);
    lastname = wordToCapitalize(floatingInputLastname);
    phone = floatingInputPhone;
    password = floatingPassword;

    debugger

    // 3. prepare to send
    user = buildUserDataForRequest({name: Name, lastname: lastname, phone: phone, password: password, email: email});

    console.log (user)


};

