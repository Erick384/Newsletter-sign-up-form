function submitForm() {
    // Get the input values
    let userEmail = document.querySelector("#emails").value;

    // Create an object to hold the user details
    let userDetails = {
      userEmail: userEmail,
    };
    
    // Save user details to local storage
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    
    // Redirect to the new page
    window.location.href = "success.html";
  }
function homePage() {
    window.location.href = "index.html";
}