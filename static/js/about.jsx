class About extends React.Component{
    render(){
        return(
        <React.Fragment>
            <h2>Name:{this.props.name}</h2>
            <p>Bio:{this.props.bio}</p>
            <p>Favorite color:{this.props.color}</p>
            <p>favorite joke:{this.props.joke}</p>
        </React.Fragment>
        );
    }
}

ReactDOM.render(
    <About name="Hannah" bio="I was born in Fresno, CA. Now I am a Hackbright student." color="Yellow!" joke="Knock, knock...Who's there?...Hoo!...Hoo-who?...Hoo-hoo! I'm an owl." />, 
    document.getElementById('aboutHannah'));

ReactDOM.render(
<About name="Judith" bio="I was born in Douala,Cameroon.I love traveling and programming." color="red" joke="President Mugabe once said: he wake up a morning and wanted to go run and then he remembered that it is written somewhere that the evil man runs without anyone pursuing him, he decided never to run again" />, document.getElementById("aboutJudith"));

