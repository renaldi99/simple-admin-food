import React, { Component } from "react";
import swal from "sweetalert";
import { EmptyBox } from "../assets";

class ListTable extends Component {
  setStatusAddTable = () => {
    const { setAddTable } = this.props;
    setAddTable(true);
  };

  deleteTable = (table) => {
    const { deleteTable } = this.props;
    deleteTable(table);
    swal("Success!", "Delete Table Success!", "success");
  };

  render() {
    const { tables } = this.props;
    console.log(this.props);
    return (
      <div className="menu-list-tables">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>List Table</h1>
              <button
                className="btn btn-primary mb-3"
                onClick={this.setStatusAddTable}
              >
                Add Table
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col wrapper-list">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Nomor Table</th>
                    <th scope="col">Status</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  {tables.length > 0 ? (
                    tables.map((table, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{table.numberTable}</td>
                        {table.status === "Available" ? (
                          <td className="text-status-blue">{table.status}</td>
                        ) : (
                          <td className="text-status-yellow">{table.status}</td>
                        )}
                        <td width="30%">
                          <button
                            className="btn btn-danger"
                            onClick={() => this.deleteTable(table)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="text-center">
                      <td colSpan={12}>
                        <div className="empty-data">
                          <img src={EmptyBox} width={300} />
                          <p style={{ marginTop: "20px" }}>
                            Opps Data is Empty 😞
                          </p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListTable;
