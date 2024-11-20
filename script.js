const facts = [
    "I am a 19-year-old college student pursuing higher education.",
    "I love watching anime and exploring different genres and series.",
    "I enjoy playing sports, which helps me maintain an active lifestyle.",
    "I am in a transitional phase of life, exploring new opportunities.",
    "I have diverse interests, connecting with different groups of people."
];

document.getElementById('generateFact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').textContent = facts[randomIndex];
});
