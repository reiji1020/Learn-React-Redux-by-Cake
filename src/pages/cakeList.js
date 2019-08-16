import React from "react";
import ListTable from "../components/listTable";
import CakeListSetting from "../const/cakeListSetting";

export default class CakeList extends React.Component {
  render() {
    return (
      <ListTable
        tableSetting={CakeListSetting.tableSetting}
        data={CakeListSetting.initialList}
      />
    );
  }
}
