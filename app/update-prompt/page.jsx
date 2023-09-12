'use client'

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { Form } from '@/components';

const EditPrompt = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const promptId = searchParams.get('id');

    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        if (!promptId) {
            alert('Missing Prompt ID')
        }

        try {
            const response = await fetch(`/api/prompt/${promptId}`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag
                })
            })

            if (response.ok) {
                router.push('/profile')
            }
        } catch (err) {
            console.log(err);
        } finally {
            setSubmitting(false)
        }
    }

    useEffect(() => {
        const getPromptDetails = async () => {
            const response = await fetch(`/api/prompt/${promptId}`);
            const data = await response.json();

            setPost({
                prompt: data.prompt,
                tag: data.tag,
            })
        }

        if (promptId) getPromptDetails();
    }, [promptId])

    return (
        <Form
            type='Edit'
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={handleSubmit}
        />
    )
}

export default EditPrompt