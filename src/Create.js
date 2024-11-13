import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Create = () => {

    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('mario');
    const[isPending,setIspedning]=useState(false);
    const History=useHistory();
    const handleSubmit=(e) => {
        e.preventDefault();
        const blog={title,body,author};
        setIspedning('true');   
        console.log(blog);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
            
        })
        .then(()=>{
            console.log("blog added");
            setIspedning(false);
            History.push('/')
        })

    }
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text" required value={title} onChange={(e)=>setTitle  (e.target.value)}/>

                <label>Blog Title:</label>
                <textarea required value={body} onChange={(e)=>setBody  (e.target.value)}></textarea>
                <label>Blog Author</label>
                <select
                value={author} 
                onChange={(e)=>setAuthor(e.target.value)}>
                <option value="mario">Mario</option>
                <option value="yoshi">Yoshi</option>
                </select>
            {!isPending && <button>Add Blog</button>}
            {isPending && <button disabled>Adding Blog ....</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;  