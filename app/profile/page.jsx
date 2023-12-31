'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import { Profile } from '@/components'

const ProfilePage = () => {
    const router = useRouter();
    const { data: session } = useSession();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post._id}`);
    };

    const handleDelete = async (post) => {
        const hasConfirmed = confirm('Are you sure you want to delete this prompt?');

        if (hasConfirmed) {
            try {
                await fetch(`/api/prompt/${post?._id.toString()}`, {
                    method: 'DELETE'
                })

                setPosts(prev => prev.filter(p => p._id !== post?._id))
            } catch (err) {
                console.log(err);
            }
        }

    }

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const response = await fetch(`api/users/${session?.user?.id}/posts`);
            const data = await response.json();

            setPosts(data);
            setLoading(false)
        };

        if (session?.user?.id) fetchPosts();

    }, [session?.user?.id]);

    return (
        <Profile
            name="My"
            desc="Welcome to your personalized profile page"
            data={posts}
            loading={loading}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
}

export default ProfilePage