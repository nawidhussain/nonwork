// Import Firebase SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_IWjDNcStpzmxY3Y-GkPkQZbFG8Z1tT8",
    authDomain: "tgbot-aece7.firebaseapp.com",
    projectId: "tgbot-aece7",
    storageBucket: "tgbot-aece7.firebaseapp.com",
    messagingSenderId: "560643215361",
    appId: "1:560643215361:web:9f347550ec6ac03acf3000",
    measurementId: "G-4JFPEM6L3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get user data from the URL
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('user_id');
const username = urlParams.get('username');
const firstName = urlParams.get('first_name');

// Save user data to Firestore
async function saveUserData() {
    try {
        await setDoc(doc(db, "users", userId), {
            username: username,
            first_name: firstName
        });
        console.log("User data saved successfully");
    } catch (error) {
        console.error("Error saving user data:", error);
    }
}

saveUserData();
