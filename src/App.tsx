import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';
import GroupsComponent from "./Components/GroupsComponent";

interface IAppState {
    userId: string;
}

class App extends Component<{}, IAppState> {
    loginHref = "https://oauth.vk.com/authorize?client_id=6886309&display=page&redirect_uri=http://localhost:3000&scope=wall&response_type=token&v=5.92&state=123456";
    
    constructor(props: {}) {
        super(props);
        
        this.state = {userId: null};
    }
    render() {
        return (
          <div className="App">
            <header className="App-header">
              <p>
                Cats PR!
              </p>
            </header>
              <main className="App-main">
                  {this.state.userId && <GroupsComponent />}
                  
                  
                  <Button onClick={(e: {}) => (window as any).VK.Auth.login(r => this.setState({userId: r.session.user.id}), 8192 + 262144 + 4)}>Login1</Button>
                  <br />
                  {this.state.userId || ""}
                  <br />
                  <Button onClick={(e: {}) => (window as any).VK.Api.call("wall.post", {owner_id: -179220415, message: "ooh", v: "5.92"}, (r: {}) => console.log(r))}>Post</Button>
              </main>
          </div>
            
        );
  }
}

export default App;
