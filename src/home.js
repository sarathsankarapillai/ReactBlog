
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

const {dataa:blogs,Ispending,error}=useFetch('http://localhost:8000/blogs')
  
    
  
    return (
      <div className="home">
      {error && <div>{error}</div>}
      {Ispending && <div> Loading...</div>}
      
      {blogs && <BlogList blogs={blogs} />}
      
    
        
      </div>
    );
  }
  
   
  export default Home;