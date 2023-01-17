// import React, { useState, useEffect } from "react";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";
// const News = (props) => {
//   const [articles, setArticles] = useState();
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [totalResults, setTotalResults] = useState(0);
//   //  document.title = `${this.Capitalize(props.category)}-NewsMonkey`;
//   const Capitalize = (str) => {
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   };

//  async componentDidMount(){
//     // props.setprogress(10);

//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
//     setLoading(true);
//     let data = await fetch(url);
//     // props.setprogress(30);
//     let parsedData = await data.json();
//     // props.setprogress(70);

//     setArticles(parsedData.articles);
//     setTotalResults(parsedData.totalResults);
//     setLoading(false);

//     // props.setprogress(100);
//   };
//   // const componentDidMount = async () => {
//   // this.updateNews();
//   // };
//   // useEffect(() => {
//   //   this.updateNews();
//   // }, []);
//   // handlePrevClick = async () => {
//   //   let url = `https://newsapi.org/v2/top-headlines?country=${
//   //     props.country
//   //   }&category=${
//   //     props.category
//   //   }&apiKey=998bf983a476403286dd62dfacbea490&page=${
//   //     this.state.page - 1
//   //   }&pageSize=${props.pageSize}`;
//   //   this.setState({ loading: true });
//   //   let data = await fetch(url);
//   //   let parsedData = await data.json();
//   //   console.log(parsedData);

//   //   this.setState({
//   //     page: this.state.page - 1,
//   //     articles: parsedData.articles,
//   //     loading: false,
//   //   });
//   // };
//   // handleNextClick = async () => {
//   //   console.log("next");
//   //   if (
//   //     !(
//   //       this.state.page + 1 >
//   //       Math.ceil(this.state.totalResults / props.pageSize)
//   //     )
//   //   ) {
//   //     let url = `https://newsapi.org/v2/top-headlines?country=${
//   //       props.country
//   //     }&category=${
//   //       props.category
//   //     }&apiKey=998bf983a476403286dd62dfacbea490&page=${
//   //       this.state.page + 1
//   //     }&pageSize=${props.pageSize}`;
//   //     this.setState({ loading: true });
//   //     let data = await fetch(url);
//   //     let parsedData = await data.json();
//   //     this.setState({ loading: false });

//   //     this.setState({
//   //       page: this.state.page + 1,
//   //       articles: parsedData.articles,
//   //       loading: false,
//   //     });
//   //   }
//   // };
//   // handlePrevClick = async () => {
//   //   this.setState({ page: this.state.page - 1 });
//   //   this.updateNews();
//   // };

//   // handleNextClick = async () => {
//   //   this.setState({ page: this.state.page + 1 });
//   //   this.updateNews();
//   // };
//   const fetchMoreData = async () => {
//     setPage(page + 1);
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=998bf983a476403286dd62dfacbea490&page=${page}&pageSize=${props.pageSize}`;
//     // this.setState({ loading: true });
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     setArticles(articles.concat(parsedData.articles));
//     setTotalResults(parsedData.totalResults);
//   };

//   return (
//     <div className="container my-3">
//       <h1 className="text-center" style={{ margin: "35px 0px" }}>
//         NewsMonkey-Top {Capitalize(props.category)} Headlines
//       </h1>
//       {loading && <Spinner />}
//       <InfiniteScroll
//         dataLength={articles.length}
//         next={fetchMoreData}
//         hasMore={articles.length !== totalResults}
//         loader={<Spinner />}
//       >
//         <div className="container">
//           <div className="row">
//             {articles.map((element) => {
//               return (
//                 <div className="col-md-4" key={element.url}>
//                   <NewsItem
//                     title={element.title ? element.title : ""}
//                     description={element.description ? element.description : ""}
//                     imageUrl={element.urlToImage}
//                     url={element.url}
//                     author={element.author}
//                     date={element.publishedAt}
//                     source={element.source.name}
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </InfiniteScroll>
//       {/* <div className="container d-flex justify-content-between">
//           <button
//             type="button"
//             className="btn btn-secondary"
//             disabled={this.state.page <= 1}
//             onClick={this.handlePrevClick}
//           >
//             &larr;Previous
//           </button>
//           <button
//             type="button"
//             className="btn btn-dark"
//             onClick={this.handleNextClick}
//             disabled={
//               this.state.page + 1 >
//               Math.ceil(this.state.totalResults / props.pageSize)
//             }
//           >
//             Next &rarr;
//           </button>
//         </div> */}
//     </div>
//   );
// };
// News.defaultProps = {
//   country: "in",
//   pageSize: 8,
//   category: "general",
// };
// News.propTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string,
// };
// export default News;

import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsMonkey`;
  }

  async updateNews() {
    // this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=998bf983a476403286dd62dfacbea490&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    // this.props.setProgress(30);
    let parsedData = await data.json();
    // this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    // this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=998bf983a476403286dd62dfacbea490&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ page: this.state.page + 1 });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <>
        <h1
          className="text-center"
          style={{ margin: "35px 0px", marginTop: "90px" }}
        >
          NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h1>
        {/* <marquee className="floating">
          <b>Get Latest News Free! </b>
        </marquee> */}
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
