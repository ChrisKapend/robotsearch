import React, {Component} from 'react';
import CardList from './CardList';
import { robots } from './robots';
import Header from './Header';

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots:robots,
            searchfield:'',
        }
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
                <CardList  robots={filteredRobots}/>
            </section>
        );
    }
}
export default App;