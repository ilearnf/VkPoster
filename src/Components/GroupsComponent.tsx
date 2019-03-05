import React, { Component } from 'react';
import {connect} from "react-redux";
import {getGroups} from "../redux/groups";
import GroupsSelector from "./GroupsSelector";

interface IGroupComponentProps {
    getGroups: () => void;
}


class GroupsComponent extends Component<IGroupComponentProps> {
    componentDidMount() {
        this.props.getGroups();
    }
    
    constructor(props: IGroupComponentProps) {
        super(props);
        
        
    }
    
    render() {
        return (
          <div>
            <GroupsSelector />
          </div>
        );
  }
}

export default connect(null, {getGroups})(GroupsComponent);
