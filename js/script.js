class App extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = { 'urls': [], 'y': '',  'm': '' };
        this.onSuccess = this.onSuccess.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    onSuccess(responseData) {
        let urls = [];
        for (let i = 0; i < 20; i++) {
            const url = responseData.response.docs[i];
            urls.push(url.web_url);
            console.log(url)
        }
        this.setState({ 'urls': urls });
    }

    componentDidMount(){
        this.refresh();
    }

    componentDidUpdate(){
        console.log('APP: componentDidUpdate')
        this.refresh();
    } 

    refresh(){
        console.log('APP: refresh')
        const year = document.getElementById('year').value;
        const month = document.getElementById('month').value;
        if(year === this.state.y && month ===   this.state.m){
            console.log('stop update')
            return;
        }
        console.log('doing ajax')
        this.setState({'y': year, 'm': month});

        let url = "https://api.nytimes.com/svc/archive/v1/" + year + "/" + month + ".json";
        console.log("Year"+ year);
        console.log("Month"+ month);
        
        $.ajax({
        url: url,
        method: 'GET',
            data: {
                'apikey': "2f15639a480f467395733b62060bc945"
            },
            success: this.onSuccess
        });
    }

    render() {
        console.log('APP: render')
        return (
            this.state.urls.length > 0 ? 
            <main>
            <Results data={this.state.urls}/>
            </main> 
            : <p id="Alert"> Nothing to display. </p>
        )
    }
}


const Results = (props) => {
    return ( 
        <div className="main">
            <div className="results">
                <div className="secHeading">
                <br/>
                    <h2 className="secHeadingText">Your articles are:</h2>  
                    <div className = "archives">
                    <div>{
                        props.data.map(
                            (item, i) => <ArticlePreview  key={i} url={item}/>
                        )
                    }</div>
                    </div> 
                </div>
            </div>
    </div>
    );
};

class ArticlePreview extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            'web_url': '',
            'title': '',
            'description': '',
            'img': '',
            'word_count': '',
            'pub_date': ''
        }
        this.onSuccess = this.onSuccess.bind(this);
    }

    onSuccess(answerFromAPI){
        this.setState(
            {
            'title': answerFromAPI.title,
            'description':  answerFromAPI.description,
            'img':  answerFromAPI.img,
            'web_url':  answerFromAPI.web_url,
            'word_count':  answerFromAPI.word_count,
            'pub_date':  answerFromAPI.pub_date
            }
        )
    }

    componentDidMount() {
        console.log('ArticlePreview: componentDidMount')
        let webUrl = this.state.web_url;
        let apiUrl = "https://api.linkpreview.net";
        apiUrl += '?' + $.param({
            'key': "5a8c5d0b6821370876df606415b050df59005c3cff238",
            'q': webUrl
        });
        $.ajax({
            url: apiUrl,
            method: 'GET',
            success: this.onSuccess
        });
    }


    render() {
        return ( 
            <div className="archive">
                <img className="archiveImg" src={ this.state.img }/>
                <h3 className="archiveTitle"> { this.state.title } </h3>
                <a className="BtnArchive" href={this.state.web_url} target="_blank">Link to the news</a>
                <p>Published: {this.state.pub_date}</p> 
                <p>Total words: {this.state.word_count}</p>
                <p className="archiveDescr">{ this.state.description } </p> 
            </div>
        );
    }
}

function find(){
    console.log('find ...')
    const year = document.getElementById('year').value;
    if (year === "" || year.length !== 4 || year > 2018 || year < 1851) {
    $('#Alert').html("Please insert valid year...");
        return;
    }
    $('#Alert').html("Loading...");
    const root = document.getElementById('roots');
    ReactDOM.render( <App /> , root)
};