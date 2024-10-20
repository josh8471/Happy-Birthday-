document.getElementById('startButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
         
    if (name) {
        document.getElementById('personalMessage').textContent = `🎉 Happy Birthday! 🎂 Wishing you a day filled with laughter, joy. ${name}! 🎉🎂🎈`;
        
        document.getElementById('birthdayMessage').classList.remove('hidden');
    } else {
        alert("Please enter your name!");
    }
}); 

document.getElementById('shareButton').addEventListener('click', function() {
    const shareText = "Check out this cool birthday animation! 🎉🎈 Add your name here: " + window.location.href;
    if (navigator.share) {
        navigator.share({
            title: 'Personalized Birthday Message',
            text: shareText,
            url: window.location.href,
        });
    } else {
        alert("Sharing is not supported on this browser. Copy this link and share it manually: " + window.location.href);
    }
});
