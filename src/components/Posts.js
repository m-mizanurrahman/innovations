import React, { Component } from 'react';

export class Posts extends Component {
    render() {
        const { posts, loading } = this.props;

        if (loading) {
            return <h2>Loading...</h2>
        }

        return (
            <div>
                {posts.map(post => (
                    <a style={{ textDecoration: 'none', textColor: 'black' }} href={post.link} target="popup">


                        <div key={post.id} className="alert alert-primary">
                            <h4 className="alert-heading">{post.title}</h4>
                            <p>{post.summary}</p>
                            <p>{post.published}</p>
                        </div>
                    </a>
                ))}
            </div>
        );
    }
}

export default Posts;