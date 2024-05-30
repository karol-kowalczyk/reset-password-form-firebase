// Import Firebase functions
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4jWYr5LaTmgKTXONq4kLQOvq1T7UjxlM",
    authDomain: "join-api-d7745.firebaseapp.com",
    projectId: "join-api-d7745",
    storageBucket: "join-api-d7745.appspot.com",
    messagingSenderId: "274473944238",
    appId: "1:274473944238:web:0f838394e6f639659d593f",
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function showMessage(message, divId) {
  let messageDiv = document.getElementById(divId);
  messageDiv.style.display = "block";
  messageDiv.innerHTML = message;
  messageDiv.style.opacity = 1;
  setTimeout(() => {
    messageDiv.style.opacity = 0;
  }, 5000);
}

let forgotPassword = document.getElementById("forgotPassword");
let emailInput = document.getElementById("resetEmail");

let ForgotPassword = () => {
  let email = emailInput.value;
  sendPasswordResetEmail(auth, email)
    .then(() => {
      showMessage('If this email is in our database, a reset link has been sent.', 'emailError');
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      showMessage(error.message, 'emailError');
    });
}

forgotPassword.addEventListener('click', ForgotPassword);
