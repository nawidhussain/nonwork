import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// Firebase configuration
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

// Test Firestore Write
const testFirestore = async () => {
    try {
        await setDoc(doc(db, "users", "testUser"), {
            user_id: "testUser",
            username: "Test User",
            first_name: "Test"
        });
        console.log("Test data saved successfully!");
    } catch (error) {
        console.error("Error saving test data:", error);
    }
};

// Call the test function
testFirestore();
