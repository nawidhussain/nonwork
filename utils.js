// Import Firebase dependencies
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_IWjDNcStpzmxY3Y-GkPkQZbFG8Z1tT8",
    authDomain: "tgbot-aece7.firebaseapp.com",
    projectId: "tgbot-aece7",
    storageBucket: "tgbot-aece7.appspot.com",
    messagingSenderId: "560643215361",
    appId: "1:560643215361:web:9f347550ec6ac03acf3000",
    measurementId: "G-4JFPEM6L3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Extract user data from URL
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("user_id");
const username = urlParams.get("username");
const firstName = urlParams.get("first_name");

// Check if the required data is present
if (userId && username && firstName) {
    // Save user data to Firestore
    const saveUserData = async () => {
        try {
            await setDoc(doc(db, "users", userId), {
                user_id: userId,
                username: username,
                first_name: firstName
            });
            console.log("User data saved successfully to Firestore!");
        } catch (error) {
            console.error("Error saving user data:", error);
        }
    };

    // Call the function to save data
    saveUserData();
}

// Redirect to game.html with user data after saving
const gameUrl = `game.html?user_id=${userId}&username=${username}&first_name=${firstName}`;
setTimeout(() => {
    window.location.href = gameUrl;
}, 1000);
