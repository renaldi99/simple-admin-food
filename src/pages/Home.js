import React, { Component } from "react";
import { BsBoxArrowLeft } from "react-icons/bs";
import swal from "sweetalert";
import { AddFood, AddTable, ListFood, ListTable } from "../components";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      statusHome: true,
      statusPageFood: false,
      statusPageTable: false,
      statusAddFood: false,
      statusAddTable: false,
    };
  }

  setHome = (status) => {
    this.setState({
      statusPageFood: false,
      statusPageTable: false,
      statusHome: status,
      statusAddFood: false,
      statusAddTable: false,
    });
  };

  setPageFood = (status) => {
    this.setState({
      statusPageFood: status,
      statusPageTable: false,
      statusHome: false,
      statusAddFood: false,
      statusAddTable: false,
    });
  };

  setPageTables = (status) => {
    this.setState({
      statusPageFood: false,
      statusPageTable: status,
      statusHome: false,
      statusAddFood: false,
      statusAddTable: false,
    });
  };

  setAddFood = (status) => {
    this.setState({
      statusPageFood: false,
      statusPageTable: false,
      statusHome: false,
      statusAddFood: status,
      statusAddTable: false,
    });
  };

  setAddTable = (status) => {
    this.setState({
      statusPageFood: false,
      statusPageTable: false,
      statusHome: false,
      statusAddFood: false,
      statusAddTable: status,
    });
  };

  setLogout = () => {
    const { setLoginStatus } = this.props;
    setLoginStatus(false);
    swal("Success", "Success Logout", "success");
  };

  render() {
    const { statusPageFood, statusPageTable, statusAddFood, statusAddTable } =
      this.state;
    const { menus, tables, setMenus, setTables, deleteFood, deleteTable } =
      this.props;
    return (
      <div className="container-home">
        <div className="wrapper">
          <div className="left-side">
            <div className="left-side-content">
              <h2>ADMIN WMB</h2>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    onClick={this.setHome}
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a onClick={this.setPageFood} className="nav-link" href="#">
                    Foods
                  </a>
                </li>
                <li className="nav-item">
                  <a onClick={this.setPageTables} className="nav-link" href="#">
                    Tables
                  </a>
                </li>
              </ul>

              <button className="btn btn-logout" onClick={this.setLogout}>
                <BsBoxArrowLeft
                  style={{ fontSize: "18px", marginRight: "5px" }}
                />{" "}
                Logout
              </button>
            </div>
          </div>
          <div className="right-side w-100">
            {statusPageFood ? (
              <ListFood
                menus={menus}
                setAddFood={this.setAddFood}
                deleteFood={deleteFood}
              />
            ) : statusPageTable ? (
              <ListTable
                tables={tables}
                setAddTable={this.setAddTable}
                deleteTable={deleteTable}
              />
            ) : statusAddFood ? (
              <AddFood setMenus={setMenus} menus={menus} />
            ) : statusAddTable ? (
              <AddTable setTables={setTables} tables={tables} />
            ) : (
              <div className="menu-dashboard">
                <div className="container">
                  <h1>Dashboard</h1>
                  <div className="row">
                    <div className="col">
                      <div className="card-dashboard">
                        <h4>Food Ready 🍔</h4>
                        <p>{menus.length}</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card-dashboard">
                        <h4>Available Table 👨‍🍳</h4>
                        <p>{tables.length}</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card-dashboard">
                        <h4>Visitor 🧑👩</h4>
                        <p>73</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
