
// Get user data from the URL (from Telegram bot)
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('user_id');
const username = urlParams.get('username');
const firstName = urlParams.get('first_name');

// Define the URL for the PHP backend hosted on InfinityFree
const backendUrl = "https://tapgalaxy.great-site.net/save_user_data.php";

// Send user data to the PHP backend
fetch(backendUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_id: userId, username: username, first_name: firstName }),
})
.then(response => response.json())
.then(data => {
    console.log('User data saved successfully:', data);
})
.catch(error => {
    console.error('Error saving user data:', error);
});

// Construct the URL for game.html with user data
const gameUrl = `game.html?user_id=${userId}&username=${username}&first_name=${firstName}`;

// Redirect to the game page after 1 second
setTimeout(() => {
    window.location.href = gameUrl;
}, 10000);
