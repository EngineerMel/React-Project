import React, { Component } from "react";

//columns: array
//sortColumn: object
//onSort: function

class TableHeader extends Component {
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.column.map(column => (
            <th></th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;