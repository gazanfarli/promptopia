'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import toast from 'react-hot-toast';

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const { prompt, tag } = post;
  const { image, username, email } = post?.creator;
  const [copied, setCopied] = useState('');

  const handleCopy = () => {
    setCopied(prompt);
    navigator.clipboard.writeText(prompt);
    notifyCopy();
    setTimeout(() => setCopied(''), 3000);
  }

  const notifyCopy = () => {
    toast('Prompt successfully copied to clipboard', {
      position: 'bottom-right',
      style: { backgroundColor: '#22BB33', color: 'white' },
      icon: '✔️'
    });
  }

  return (
    <div className='prompt_card'>
      <div className='flex justify-between items-start gap-5'>
        <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
          <Image
            src={image}
            alt={username}
            width={40}
            height={40}
            className='rounded-full object-contain'
          />
          <div className='flex flex-col'>
            <h3 className='font-satoshi font-semibold text-gray-900'>
              {username}
            </h3>
            <p className='font-inter text-sm text-gray-500'>
              {email}
            </p>
          </div>
        </div>

        <div className='copy_btn' onClick={handleCopy}>
          <Image
            src={copied === prompt
              ? '/assets/icons/tick.svg'
              : '/assets/icons/copy.svg'}
            width={12}
            height={12}
            alt={ tag}
          />
        </div>
      </div>
      <p className='my-4 font-satoshi text-sm text-gray-700'>
        {prompt}
      </p>
      <p
        className='font-inter text-sm blue_gradient cursor-pointer'
        onClick={() => handleTagClick && handleTagClick(tag)}
      >
        { tag}
      </p>
      {session?.user.id === post?.creator._id &&
      pathname === '/profile' && (
        <div className='flex-center mt-5 gap-10 pt-3 border-t border-gray-300'>
          <p 
            className='font-inter text-sm green_gradient cursor-pointer'
            onClick={() => handleEdit(post)}
          >
            Edit
          </p>
          <p 
            className='font-inter text-sm orange_gradient cursor-pointer'
            onClick={() => handleDelete(post)}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  )
}

export default PromptCard