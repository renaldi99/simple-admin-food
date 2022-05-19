import React, { Component } from "react";
import swal from "sweetalert";
import { EmptyBox } from "../assets";

class ListFood extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  setStatusAddFood = () => {
    const { setAddFood } = this.props;
    setAddFood(true);
  };

  deleteFood = (menu) => {
    const { deleteFood } = this.props;
    deleteFood(menu);
    swal("Success!", "Delete Food Success!", "success");
  };

  render() {
    const { menus } = this.props;
    return (
      <div className="menu-list-tables">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>List Food</h1>
              <button
                className="btn btn-primary mb-3"
                onClick={this.setStatusAddFood}
              >
                Add Food
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col wrapper-list">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Name Food</th>
                    <th scope="col">Price</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  {menus.length > 0 ? (
                    menus.map((menu, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{menu.nameFood}</td>
                        <td>{menu.price}</td>
                        <td width="30%">
                          <button
                            className="btn btn-danger"
                            onClick={() => this.deleteFood(menu)}
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

export default ListFood;
