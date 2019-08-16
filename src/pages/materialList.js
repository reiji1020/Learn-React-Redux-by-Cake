import React from "react";
import ListTable from "../components/listTable";
import MaterialListSetting from "../const/materialListSetting";

export default class MaterialList extends React.Component {
  render() {
    return (
      <ListTable
        tableSetting={MaterialListSetting.tableSetting}
        data={MaterialListSetting.initialList}
      />
    );
  }
}
