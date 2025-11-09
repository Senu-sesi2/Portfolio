
// export async function fetchRecipes (filter){
//     const {query, limit} = filter;

//     const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}&from=0&to=${limit}&`;


//     const response = await fetch(url)

//     const data = await response.json();

//     return data?.hits;
// }

// export async function fetchRecipe(id){
// const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}`

// const response = await fetch(url)

// const data = await response.json();

// return data[0];
// }


// export async function fetchRecipes(filter) {
//     const { query, limit } = filter;
//     const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}&from=0&to=${limit}`;
    
//     const response = await fetch(url);
    
//     if (!response.ok) {
//         throw new Error(`Failed to fetch recipes: ${response.status}`);
//     }

//     const data = await response.json();
//     return data?.hits;
// }

// export async function fetchRecipe(id) {
//     const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}`;
    
//     const response = await fetch(url);

//     if (!response.ok) {
//         throw new Error(`Failed to fetch recipe: ${response.status}`);
//     }

//     const data = await response.json();
//     return data[0];
// }

export async function fetchRecipes(filter) {
    const { query, limit } = filter;

    // Correct URL without a trailing '&'
    const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}&from=0&to=${limit}`;

    try {
        const response = await fetch(url);
        
        // Add error handling for API response
        if (!response.ok) {
            throw new Error(`Failed to fetch recipes: ${response.status}`);
        }

        const data = await response.json();
        return data?.hits;
    } catch (error) {
        console.error("Error fetching recipes:", error);
        return [];  // Return an empty array or handle it as you prefer
    }
}

export async function fetchRecipe(id) {
    const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}`;

    try {
        const response = await fetch(url);

        // Add error handling for API response
        if (!response.ok) {
            throw new Error(`Failed to fetch recipe: ${response.status}`);
        }

        const data = await response.json();
        return data[0];  // Assuming you need the first result
    } catch (error) {
        console.error("Error fetching recipe:", error);
        return null;  // Return null or handle as you prefer
    }
}

