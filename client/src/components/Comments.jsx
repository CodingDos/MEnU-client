import React from 'react'
import { createComment } from '../services/comments'
import { useNavigate } from 'react-router-dom'
import "../styles/Comments.css"

function Comments({comment, setComment, recipeId, userId}) {

    let navigate = useNavigate()
    // const [comment, setComment] = useState({comment:''}
    // )
 
  const handleChange = (event) => {
    const { name, value } = event.target
    console.log(name, value)
    setComment({
      ...comment,
    //   userId: userId,
    //   recipeId: recipeId,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await createComment(comment, recipeId)
    console.log(comment)
    navigate('/home')
  }




  return (
    <div>
      
      <div className='commentForm'>
        <textarea
          className='commentTextArea'
          rows={10}
          placeholder='Comments'
          value={comment.comment}
          name='comment'
          required
          onChange={handleChange}
        />
        <button className= "submitButtonModal"ctype="button" onClick={handleSubmit}>Submit</button>
    </div>
    </div>
  )
}

export default Comments
