import React, { Component } from 'react';
import {connect} from "react-redux";
import { Select } from 'antd';
import {IGroup} from "../data/Group";
import {selectGroups} from "../redux/groups";

interface IGroupsSelectorProps {
    groups: IGroup[]
    onChange: (groups: IGroup[]) => void;
    selectedGroups: IGroup[];
}

class GroupsSelector extends Component<IGroupsSelectorProps> {
    onChange = (newValue: number[]) => {
        const selectedGroups = newValue.reduce((acc: IGroup[], v: number) => {
            const group = this.props.groups.find(g => g.id === v);
            if (group)
                return [...acc,  group];
            return acc;
        }, []);
        return this.props.onChange(selectedGroups);
    };
    
  render() {
      const {groups, selectedGroups} = this.props;
      const Option = Select.Option;
    return (
      <div>
        <Select size="large" mode="multiple" onChange={this.onChange} value={selectedGroups.map(g => g.id)} style={{width: 500}}>
            {groups.map(g => (
                <Option value={g.id} key={g.id}>
                    {g.name}
                </Option>
            ))}
        </Select>
      </div>
    );
  }
}

export default connect(state => ({
    groups: state.groups.groups, 
    selectedGroups: state.groups.selectedGroups
}), {
    onChange: selectGroups
})(GroupsSelector);
