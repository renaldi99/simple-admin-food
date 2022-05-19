import React, { Component } from "react";
import swal from "sweetalert";

class AddTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      numberTable: "",
      status: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { numberTable, status } = this.state;
    const { setTables, tables } = this.props;

    if (numberTable === "" && status === "") {
      swal("Failed!", "Name Food and Price Cannot Be Empty", "error");
    } else {
      const countId = tables.length + 1;
      const dataTable = { id: countId, numberTable, status };
      setTables(dataTable);
      swal("Success!", "Add Table Success", "success");
      this.setState({
        numberTable: "",
        status: "",
      });
    }
  };

  render() {
    const { numberTable, status } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="wrapper-add-food">
              <h1>Add Table</h1>
              <div className="card-form">
                <form onSubmit={this.handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Number Table
                    </label>
                    <input
                      type="number"
                      name="numberTable"
                      className="form-control"
                      onChange={this.handleChange}
                      value={numberTable}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Choose Status
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      name="status"
                      onChange={this.handleChange}
                      value={status}
                      required
                    >
                      <option selected>-- Select Status --</option>
                      <option value="Available">Avaiable</option>
                      <option value="Unavailable">Unavailable</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AddTable;
