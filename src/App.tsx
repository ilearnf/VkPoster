import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';
import {getQueryParamsObject} from "./utils/QueryParamsHelper";
import {WallApi} from "./Api/VkApi";

interface IAppState {
    token: string;
}

class App extends Component<{}, IAppState> {
    loginHref = "https://oauth.vk.com/authorize?client_id=6886309&display=page&redirect_uri=http://localhost:3000&scope=wall&response_type=token&v=5.92&state=123456";
    
    constructor(props: {}) {
        super(props);
        
        const hash = window.location.hash;
        const hashParams = hash && getQueryParamsObject(hash.substring(1));
        const token = hashParams && hashParams["access_token"];
        
        this.state = {token};
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
                  
                  <Button onClick={(e: {}) => (window as any).VK.Auth.login(null, 8192)}>Login1</Button>
                  <br />
                  {this.state.token || ""}
                  <br />
                  <Button onClick={(e: {}) => (window as any).VK.Api.call("wall.post", {owner_id: -179220415, message: "ooh", v: "5.92"}, (r: {}) => console.log(r))}>Post</Button>
              </main>
          </div>
            
        );
  }
}

export default App;
