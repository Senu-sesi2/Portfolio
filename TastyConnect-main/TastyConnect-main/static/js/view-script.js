document.getElementById('recipe-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;


    const recipeDisplay = document.getElementById('recipe-display');
    recipeDisplay.innerHTML = `
        <h3>${title}</h3>
        <h4>Ingredients:</h4>
        <p>${ingredients.replace(/\n/g, '<br>')}</p>
        <h4>Instructions:</h4>
        <p>${instructions.replace(/\n/g, '<br>')}</p>
    `;
});
