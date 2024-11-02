const suggestions = [
    "Stare at the wall for 10 minutes.",
    "Count the number of tiles in your bathroom.",
    "Draw a doodle with your non-dominant hand.",
    "Try to make a paper airplane.",
    "Stand up and stretch for 30 seconds.",
    "Do nothing for one minute.",
    "Make a sandwich without any filling.",
    "Talk to a plant.",
    "Start a conversation with your reflection.",
    "Try to balance a spoon on your nose.",
    "Count the number of books you have at home.",
    "Look for shapes in the clouds.",
    "Write a short poem about a potato."
];

document.querySelector('.bored-button').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * suggestions.length);
    const suggestion = suggestions[randomIndex];
    document.querySelector('.suggestion').textContent = suggestion;
});
