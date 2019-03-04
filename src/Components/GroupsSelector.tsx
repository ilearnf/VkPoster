import React, { Component } from 'react';
import { Select } from 'antd';
import {IGroup} from "../data/Group";

interface IGroupsSelectorProps {
    groups: IGroup[]
    onChange: (groups: IGroup[]) => void;
    selectedGroups: IGroup[];
}

class GroupsSelector extends Component<IGroupsSelectorProps> {
    onChange = (newValue: string) => {
        const separatedValues = newValue.split(",");
        const selectedGroups = separatedValues.reduce((acc: IGroup[], v: string) => {
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
        <Select size="large" mode="multiple" onChange={this.onChange} value={selectedGroups.map(g => g.id).join(",")}>
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

export default GroupsSelector;
