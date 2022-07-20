
import { useState } from "react"
import axios from 'axios';
import Navbar from "./Navbar";
const baseURL = 'https://qghcujpqbvrdfszremfe.supabase.co/rest/v1/blogs'

const AddBlog = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [author, setAuthor] = useState('')
    const [readingTime, setReadingTime] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)

    let blogObject = {title: '', description: '', author: '', reading_time: ''}

    const addBlog = () => {
        blogObject.title = title
        blogObject.description = description
        blogObject.author = author
        blogObject.reading_time = readingTime

        axios.post(baseURL, blogObject, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnaGN1anBxYnZyZGZzenJlbWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgxMjk3NzcsImV4cCI6MTk3MzcwNTc3N30.LvOp9lASnuJAAwvg2VxFmnrVXuqZOM0KVngw8EKHQcM',
                'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnaGN1anBxYnZyZGZzenJlbWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgxMjk3NzcsImV4cCI6MTk3MzcwNTc3N30.LvOp9lASnuJAAwvg2VxFmnrVXuqZOM0KVngw8EKHQcM'
            }},).then(res => {
            console.log('Blog Added');
            setIsSubmitted(true)
        })
    } 

    const updateIsSubmitted = () => {
        setIsSubmitted(false)
    }

    return (
        <>
            <Navbar />
            <div className="container border my-3 rounded p-3">
                <div className="font-weight-bold h2 py-3 text-center">
                    Add Blog {title}
                </div>
                {
                    !isSubmitted ? '' :
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Blog added Successfully!</strong>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={updateIsSubmitted} aria-label="Close"></button>
                        </div>
                }
                    
                
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label font-weight-bold">Title</label>
                                <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} name="title" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="authorName" className="form-label font-weight-bold">Author Name</label>
                                <input type="text" className="form-control" value={author} onChange={e => setAuthor(e.target.value)} name="authorName" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="Reading time" className="form-label font-weight-bold">Reading Time</label>
                                <input type="text" className="form-control" value={readingTime} onChange={e => setReadingTime(e.target.value)} name="Reading time" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label font-weight-bold">Description</label>
                                <textarea className="form-control" name="description" value={description} onChange={e => setDescription(e.target.value)} rows="8"></textarea>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <button type="submit" className="btn btn-primary" onClick={addBlog}>Add Blog</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddBlog