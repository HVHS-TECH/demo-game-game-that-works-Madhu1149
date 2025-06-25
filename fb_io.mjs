//**************************************************************/
// fb_io.mjs
// Generalised firebase routines
// Written by <Madhulika>, Term 2 2025
/**************************************************************/
/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the methods you want to call from the firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, set, get, update} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { getAuth, GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
/**************************************************************/
//Firevase Configuration
/**************************************************************/
const FB_GAMECONFIG = {
    apiKey: "AIzaSyAVR1PCSvRfuJtVBBaTOS_Q1l6M9Si0zwk",
    authDomain: "comp-2025-tirindi-madhulika.firebaseapp.com",
    databaseURL: "https://comp-2025-tirindi-madhulika-default-rtdb.firebaseio.com",
    projectId: "comp-2025-tirindi-madhulika",
    storageBucket: "comp-2025-tirindi-madhulika.firebasestorage.app",
    messagingSenderId: "492713596983",
    appId: "1:492713596983:web:1a462d99a51bd1cef607b2",
    measurementId: "G-RNYJ2GKKLL"
  };

const FB_GAMEAPP = initializeApp(FB_GAMECONFIG);    
const FB_GAMEDB = getDatabase(FB_GAMEAPP);           
console.info(FB_GAMEDB);                          

const statusEl = document.getElementById("p_fbInitialise");
if (statusEl) {
    statusEl.innerHTML = "Initialised";
}

/**************************************************************/
// EXPORT FUNCTIONS
/**************************************************************/
export { fb_initialise, fb_authenticate };
export { fb_write };
export { fb_Read };
export function {fb_changeAuth};


/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/
/**************************************************************
//Function to initialise
**************************************************************/
function fb_initialise() {
}
/**************************************************************
//Function to Authenticate / Log in
***************************************************************/
function fb_authenticate(){
    const AUTH = getAuth();
    const PROVIDER = new GoogleAuthProvider();
    PROVIDER.setCustomParameters({
        prompt: 'select_account'
    });
    signInWithPopup(AUTH, PROVIDER).then(() => {
        console.log("Authentication done")
    })
    .catch(() => {
        console.log("Authentication not working")
    });
}

/**************************************************************
//Function to monitor Firebase Authentication status changes
***************************************************************/
function fb_changeAuth() {
    const AUTH = getAuth();
    AUTH.onAuthStateChanged((user) => {
        if (user) {
            console.log("User is signed in:", user.displayName);
        } else {
            console.log("No user is signed in.");
        }
    });
}

/***************************************************
//Function to write the data in FireBase
***************************************************/

function fb_write(){
    const name = document.getElementById("name").value;
    const displayName = document.getElementById("Display_Name").value;
    const age = document.getElementById("User_Age").value;
    const email = document.getElementById("User_Email").value;
    const FB_GAMEAPP = initializeApp(FB_GAMECONFIG);    
    const FB_GAMEDB = getDatabase(FB_GAMEAPP);      
    const dbReference= ref(FB_GAMEDB,"users/" + name);
    set(dbReference, {
        DisplayName:displayName,
        UserAge:age,
        UserEmail:email
     }).then(() => {
        console.log("Data written successfully")
    }).catch(() => {
        console.log("Error writing data",error)
    });
}
/**********************************************
//Function to read data
**********************************************/
function fb_Read(){
    const FB_GAMEAPP = initializeApp(FB_GAMECONFIG);  
    const FB_GAMEDB = getDatabase(FB_GAMEAPP);   
    const dbReference= ref(FB_GAMEDB,"users/" + name);
    get(dbReference).then((snapshot) => {
        var fb_data = snapshot.val();
        if (fb_data != null) {
             console.log(fb_data)
        } else {
            console.log("no rec found")
        }
    }).catch(() => {
        console.log("Not working")

    });
}
/**************************************************************/
// END OF CODE
/**************************************************************/