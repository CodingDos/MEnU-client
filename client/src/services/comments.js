import api from "./apiConfing.js";

export const getComments = async () => {
  try {
    const response = await api.get("/comments");

    return response.data;
  } catch (error) {
    console.error("Error Getting all Comments:", error);
  }
};


export const getCommentById = async (id) => {
    try{
     const response = await api.get(`/users/id/${id}`)
     return response.data
    } catch(error){
     console.error("Error Getting the Comment:", error)
    }
 }

 export const createComment  = async (commentData) => {
    try{
     const response = await api.post(`/comments/`, commentData)
     return response.data
    } catch(error){
     console.error("Error", error)
    }
 }

 export const editComment  = async (id , CommentData) => {
    try{
     const response = await api.put(`/comments/${id}`, CommentData)
     return response.data
    } catch(error){
     console.error("Error", error)
    }
 }

 export const deleteComment = async (id) => {
    try{
     const response = await api.delete(`/comments/${id}`)
     return response.data
    } catch(error){
     console.error("Error", error)
    }
 }
