import React, { Component } from 'react';
import axios from 'axios'

import Posts from './components/Posts'
import Pagination from './components/Pagination'
import Sidebar from './components/Sidebar/Sidebar'

export class App extends Component {
  state = {
    posts: [],
    loading: false,
    currentPage: 1,
    postsPerPage: 2
  };

  componentDidMount() {
    const getPosts = async () => {
      this.setState({ loading: true });
      const results = await axios.get('https://api.first.org/data/v1/news');
      this.setState({ posts: results.data.data });
      this.setState({ loading: false });
    };

    getPosts();
  }

  render() {
    const { currentPage, postsPerPage, posts, loading } = this.state;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNum => this.setState({ currentPage: pageNum });

    const nextPage = () => this.setState({ currentPage: currentPage + 1 });

    const prevPage = () => this.setState({ currentPage: currentPage - 1 });

    return (
      <div className="container row">
        <div className="col-lg-4">
          <Sidebar />
        </div>
        <div className="col-lg-8">
          <Posts posts={currentPosts} loading={loading} />
          <Pagination postsPerPage={postsPerPage} totalPost={posts.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
        </div>

      </div>
    );
  }
}

export default App;