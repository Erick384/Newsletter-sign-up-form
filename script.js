let userEmail = document.querySelector("#emails");
let submitDetails = document.querySelector("#submit");

// let users = [];

submitDetails.addEventListener('submit', (e) => {
    e.preventDefault();
    userEmail.value = "";
    let previousPage = document.querySelector(".container")
    let success= `
    <div class="container">
    <img src="./assets/images/icon-success.svg" alt="" width="17px" height="17px"/>
    </div>
    `
    previousPage.innerHTML = success;
}); 

// let acceptData = () => {
//   let user = {
//     userEmail: userEmail.value,
//   };

//   users.push(user); // Add the user to the array

// };
