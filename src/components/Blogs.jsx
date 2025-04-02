import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';

const Blogs = () => {
    // consuming data form appcontext
    const {posts, loading} = useContext(AppContext);
  return (
    <div className='w-11/12 max-w-[450px] py-3 flex flex-col gap-y-7 mt-[80px] mb-[60px] '>
      {
        loading ?
         (<Spinner />) : 
         (posts.length === 0 ?
            (<div className='flex items-center justify-center translate-y-[-100px] font-bold text-xl h-[100vh]'>No Posts Found</div>) :
            (posts.map((post) => (
                <div key={post.id}>
                    <p className='font-bold text-[18px]'>{post.title}</p>
                    <p className='text-[12px]'>
                        By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
                    </p>
                    <p className='text-[12px]'>
                        Posted On <span>{post.date}</span>
                    </p>
                    <p className='text-[14px] mt-[10px]'>{post.content}</p>
                    <div className='flex gap-x-2'>
                        {post.tags.map((tag, index) => {
                            return <span className='text-blue-500 underline font-bold text-[9px]' key={index}>{`#${tag}`}</span>
                        })}
                    </div>

                    <div className='h-[3px] bg-black opacity-30 mt-7 w-[40vw] left-1/2 -translate-x-1/2 relative -z-40'></div>
                </div>
            )))
         )
      }
    </div>
  )
}

export default Blogs
