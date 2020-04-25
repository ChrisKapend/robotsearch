import React, {Component} from 'react';
import CardList from '../components/CardList';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
class App extends Component{
    constructor(){
        super();
        this.state = {
            robots:[],
            searchfield:'',
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=> response.json()).then(users => this.setState({robots:users}))
        console.log(this.state.robots);
    }
    searchChange = event => {
        this.setState({searchfield:event.target.value})
    }
    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return (robots.name.trim().toLowerCase().includes(this.state.searchfield.toLowerCase()));
        })
        return (
            <section>
                <Header searchChange={this.searchChange}/>
                <Scroll>
                    <CardList  robots={filteredRobots}/>
                </Scroll>
            </section>
        );
    }
}
export default App;