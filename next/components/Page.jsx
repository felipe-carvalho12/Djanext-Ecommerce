import React, { useEffect, useState } from 'react'

export default function Posts(props) {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        fetch('gqrehteh')
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div>
            {posts !== null ?
                <div>
                    {posts.map(post => (
                        <div>
                            {post.content}
                        </div>
                    ))}
                </div>
                :
                <div />
            }
        </div>
    )
}
