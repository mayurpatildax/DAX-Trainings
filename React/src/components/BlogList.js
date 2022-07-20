
import { useState, useEffect } from "react"
import axios from 'axios';
import Navbar from "./Navbar";
const baseURL = 'https://qghcujpqbvrdfszremfe.supabase.co/rest/v1/blogs?select=*'

const BlogList = () => {
    const [blogs, setBlogs] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(baseURL, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnaGN1anBxYnZyZGZzenJlbWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgxMjk3NzcsImV4cCI6MTk3MzcwNTc3N30.LvOp9lASnuJAAwvg2VxFmnrVXuqZOM0KVngw8EKHQcM',
                'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnaGN1anBxYnZyZGZzenJlbWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgxMjk3NzcsImV4cCI6MTk3MzcwNTc3N30.LvOp9lASnuJAAwvg2VxFmnrVXuqZOM0KVngw8EKHQcM'
            }
        }).then((response) => {
            setBlogs(response.data)
            setLoading(false)
            console.log('data', response)
        });
    }, [])

    return (
        <>
            <Navbar />
            <div className="container p-3">
                <div className="font-weight-bold h2 py-3 text-center">
                    All blogs
                </div>
                <div className="container">
                <div className="row">
                        {
                        loading ? <h1>Loading...</h1> :
                            <>
                                {
                                    blogs.map((blog, index) => {
                                        return <div className="col-md-6 my-2">
                                                    <div class="card">
                                                    <div class="card-header">
                                                    <span className="font-weight-bold h4">{index + 1} . {blog.title}</span>
                                                    </div>
                                                    <div class="card-body">
                                                        <small class="text-muted text-small">
                                                            Reading Time :  {blog.reading_time} minutes <br />
                                                            Author : {blog.author}
                                                        </small> <hr />
                                                        <p class="card-text">
                                                            {blog.description}
                                                        </p>
                                                        <div class="text-right">
                                                            <a href="/" class="btn btn-primary mr-5">Edit</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>       
                                    })
                                }
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogList