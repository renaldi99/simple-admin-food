import React, { Component } from "react";
import swal from "sweetalert";

class AddFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      nameFood: "",
      price: "",
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
    const { nameFood, price } = this.state;
    const { setMenus, menus } = this.props;

    if (nameFood === "" && price === "") {
      swal("Failed!", "Name Food and Price Cannot Be Empty", "error");
    } else {
      const countId = menus.length + 1;
      const dataFood = { id: countId, nameFood, price };
      setMenus(dataFood);
      swal("Success!", "Add Food Success", "success");
      this.setState({
        nameFood: "",
        price: "",
      });
    }
  };

  render() {
    const { nameFood, price } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="wrapper-add-food">
              <h1>Add Food</h1>
              <div className="card-form">
                <form onSubmit={this.handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Name Food
                    </label>
                    <input
                      type="text"
                      name="nameFood"
                      className="form-control"
                      onChange={this.handleChange}
                      value={nameFood}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      className="form-control"
                      onChange={this.handleChange}
                      value={price}
                      required
                    />
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
export default AddFood;
