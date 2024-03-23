import api from "./apiConfing.js";

export const getRecipes = async () => {
  try {
    const response = await api.get("/recipe");

    return response.data;
  } catch (error) {
    console.error("Error Getting all Recipes:", error);
  }
};

export const getRecipeById = async (id) => {
  try {
    const response = await api.get(`/recipes/id/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error Getting the Recipe:", error);
  }
};

export const createRecipe = async (recipeData) => {
  try {
    const response = await api.post(`/recipes/`, recipeData);
    return response.data;
  } catch (error) {
    console.error("Error", error);
  }
};

export const editRecipe = async (id, recipeData) => {
  try {
    const response = await api.put(`/recipe/${id}`, recipeData);
    return response.data;
  } catch (error) {
    console.error("Error", error);
  }
};

export const deleteRecipe = async (id) => {
  try {
    const response = await api.delete(`/recipe/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error", error);
  }
};
