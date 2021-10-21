import {useState, useEffect} from 'react'; 

function useSubmitPost(post){
    const [title, settitle] = useState(""); 
    const [description, setdescription] = useState(""); 

    const onPostSubmit=()=>{ 
        settitle(post.title);
        setdescription(post.description); 
    } 
    
    useEffect(() => {
        
    }, [title,description])

    publish(title,description); 

    return true; 
}