class App extends React.Component {
  constructor(props) { // <App videos={videos} /> -> new App({videos: videos})
    super(props);
    this.state = {
      currentVideo: {
        id: {
          videoId: ''
        },
        snippet: {
          title: '',
          description: ''
        }
      },
      videos: []
    };
  }

  componentDidMount() {
    console.log(this.props.apiKey);
    this.props.searchYouTube({
      key: this.props.apiKey,
      query: 'wins',
      max: 5
    }, result => {
      this.setState({
        currentVideo: result[0],
        videos: result
      });
    });
  }

  handleVideoListEntryClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList onVideoListEntryClick={this.handleVideoListEntryClick.bind(this)} videos={this.state.videos}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
