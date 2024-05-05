/**
 *     @author German Torres <masterapeter@gmail.com>
 *     @fileOverview Module III Lab 2 
 *     @licence BSD 3-Clause License
 */

// arrow function 

const getAvatarUr1 = 'https://api.github.com/users/mojombo/followers';

fetch (getAvatarUr1)
  .then (response=> {
    if  (response.ok)  {
        return response.json ();
    } else {
            throw new Error('network response was not ok');
        }
    
  })
  .then(data => {
    // Use the JSON data
    console.log(data);
  })
  .catch(error => {
    // Handle the error
    console.error('There has been a problem with your fetch operation:', error);
  });
