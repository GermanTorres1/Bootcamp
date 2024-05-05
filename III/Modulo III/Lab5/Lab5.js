/**
 *     @author German Torres <masterapeter@gmail.com>
 *     @fileOverview Module III Lab 4 
 *     @licence BSD 3-Clause License
 */

// declarations vars 

let email = "";
let pass = "";
let login = {};

const wordToCapitalize = word => {
    let toCapitalize = null;
    if (word !== null && word !== undefined && word.length > 0) {
        toCapitalize = word[0].toUpperCase() + word.slice(1);
    }
    debugger
    return toCapitalize;
};

const buildProductDataForRequest = data => {
    let buildProductDataForRequest = null;

    if (data !== null && data !== undefined) {
        buildProductDataForRequest = {
            email: data.email,
            password: data.password,
           
        }
    }
    debugger
    return buildProductDataForRequest;
};

    const getLoginDataForm = () => {
        const floatingInputproductemail = document.getElementById("floatingInputproductemail").value;
        const floatingInputpassword = document.getElementById("floatingInputpassword").value;
    
        //2. sanitize data
        email = wordToCapitalize(floatingInputproductemail);
        pass = wordToCapitalize(floatingInputpassword);
    
         // 3. prepare to send
         login = buildProductDataForRequest({email: email, password: password});

         console.log( login )
};

