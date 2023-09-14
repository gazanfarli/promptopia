'use client'

import { useState, useEffect } from 'react';
import dynamic from "next/dynamic"
import PromptLoading from './loading-skeleton/prompt/PromptLoading';

const DynamicPromptCard = dynamic(() => import('./PromptCard'), {
  loading: () => <PromptLoading />
})

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-16 mb-16 prompt_layout'>
      {data.map((post) => (
        <DynamicPromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
};


const Feed = () => {
  const [posts, setPosts] = useState([])
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value)
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/prompt");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type="text"
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>
      {loading ? (
        <div className='prompt_layout mt-16'>
          {Array(6).fill(<PromptLoading />)}
        </div>
      ) : (
        <PromptCardList
          data={posts}
          handleTagClick={() => { }}
          loading={loading}
        />
      )}
    </section>
  )
}

export default Feed