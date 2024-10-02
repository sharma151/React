export const getPosts = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=", 
      {
        method: "GET",
      }
    );
    return await response.json();
};
