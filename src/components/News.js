import React, { useEffect, useState } from 'react'

import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    // document.title = `NewsMonkey - ${props.category}`;
    useEffect( async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1e4345c9224f43f4b5e74c9389bfcecf&page=1&pageSize=12`;
        setLoading(true);
        let data = await fetch(url);
        const parsedData = await data.json();
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    }, [])
    const fetchMoreData = async () => {
        setPage(page + 1);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1e4345c9224f43f4b5e74c9389bfcecf&page=${page}&pageSize=12`;
        const data = await fetch(url);
        const parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    };

    return (
        <>
            <div className="container my-3">
                <h2 className="text-center" style={{ margin: '40px,100px' }}>NewsMonkey- Top Headlines</h2>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length != totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row"  >
                            {articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <Newsitem title={element.title} description={element.description} imageURL={element.urlToImage} newsURL={element.url} date={new Date(element.publishedAt).toGMTString()} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        </>
    )

}
News.defaultProps = {
    country: 'in',
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
}

export default News
