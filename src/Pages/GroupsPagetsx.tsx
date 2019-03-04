import React, { Component } from 'react';
import { Select } from 'antd';
import {IGroup} from "../data/Group";

interface IGroupsPageProps {
    groups: IGroup[]
    onChange: (groups: IGroup[]) => void;
    selectedGroups: IGroup[];
}

class GroupsPage extends Component<{}> {
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default GroupsPage;
