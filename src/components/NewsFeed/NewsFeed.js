import React, { useEffect, useState } from 'react';
import Paper from '../Paper/Paper';

const NewsFeed = () => {

    const [news, setNews] = useState([])

    useEffect(() => {
        fetch('https://api.first.org/data/v1/news')
            .then(res => res.json())
            .then(data => setNews(data.data))
    }, [])

    return (
        <div>
            {
                news.map(paper => <Paper key={paper.id} paper={paper}></Paper>)
            }
        </div>
    );
};

export default NewsFeed;