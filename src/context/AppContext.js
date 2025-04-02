import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl.js";

// context creation
export const AppContext  = createContext();

export default function AppContextProvider({children}) {
    const[loading, setLoading] = useState(false);
    const[posts, setPosts] = useState([]);
    const[page, setPage] = useState(1);
    const[totalPages, setTotalPages] = useState(null);

    // data filling
    async function fetchBlogPosts(page = 1) {
        setLoading(true);
    
        let url = `${baseUrl}?page=${page}`;
        console.log(url);
    
        try {
            const result = await fetch(url);
            if (!result.ok) throw new Error(`HTTP error! Status: ${result.status}`);
            
            const data = await result.json();
            console.log("Fetched data:", data);
    
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        } 
        catch (error) {
            console.error("Error in fetching data:", error.message);
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        } 
        finally {
            setLoading(false);
        }
    }
    

    function handlePageChange(page) {
        setPage(page);
        fetchBlogPosts(page);
    }

    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };
    
    // providing context
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}