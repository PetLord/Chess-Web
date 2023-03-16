import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import {getFirestore, setDoc, doc} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLN_jzyCljyQAeTGbI6qaIXy0Wj6lAeOU",
  authDomain: "chess-feedback.firebaseapp.com",
  databaseURL: "https://chess-feedback-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chess-feedback",
  storageBucket: "chess-feedback.appspot.com",
  messagingSenderId: "863828476258",
  appId: "1:863828476258:web:1ec5a5b9912f2c695fec3b",
  measurementId: "G-YETC5GPE7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function sendFeedback(){

  if(!isValid()){
  console.log("Feedback Not Sent");
  }
  else
  {
  console.log("Feedback Sent");

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  await setDoc(doc(db, "users", email + '' + Date.now()),
   {
    name: name,
    email: email,
    message: message
  })
  .then(() => {
    console.log("Document successfully written!");
    alert('Thanks for contacting us ' + name + '! We will get back to you shortly.');
  })
  .catch((error) => {
    console.log("Error writing document: ", error);
  });
}

}



var fields={};

document.addEventListener("DOMContentLoaded", function() {
    fields.Name = document.getElementById('name');
    fields.Email = document.getElementById('email');
    fields.Message = document.getElementById('message');
   })

   function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
   }

   function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }

   function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
   }

   function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.Name, isNotEmpty);
    valid &= fieldValidation(fields.Email, isNotEmpty);
    valid &= fieldValidation(fields.Message, isNotEmpty);
    valid &= isEmail(fields.Email.value);
  
   
    return valid;
   }

   class User {
    constructor(Name, Email, Message) {
    this.Name = Name;
    this.email = Email;
    this.Message = Message;
    }
   }


   function sendContact() {
    if (isValid()) {
    var usr = new User(fields.Name.value, fields.Email.value, fields.Message.value);
    var myemail = 'dkrisztian54@gmail.com';
    var subject = 'Contact Form Submission';
    var mailto_link = 'mailto:'+myemail+'?subject='+subject+'&body='+fields.Message.value;
    var win = window.open(mailto_link,'emailWindow');
    }
    else
    alert('Please fill the form correctly');
   }

   document.getElementById('submitFeedback').addEventListener('click', async function(){ await sendFeedback(); sendContact(); window.location.reload();});
   document.getElementById('submitFeedback').addEventListener('touchstart', async function(){ await sendFeedback(); sendContact(); window.location.reload();});