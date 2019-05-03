class Homepage extends React.Component {
	render(){
		return (
        <React.Fragment>
            <p>Welcome to our page!</p>
            <a href="/cards">Check out our cards here.</a>
            <img src="/static/img/balloonicorn.jpg" alt="photo of balloonicorn"></img>
        </React.Fragment>
        );
	}
}

ReactDOM.render(<Homepage />, document.getElementById('app'));