import React, { Component } from "react";
import { Home, Login } from "./pages";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      statusLog: true,
      menus: [],
      tables: [],
    };
  }

  setLoginStatus = (message) => {
    this.setState({
      statusLog: message,
    });
  };

  setMenus = (menu) => {
    this.setState({
      menus: [...this.state.menus, menu],
    });
  };

  setTables = (table) => {
    this.setState({
      tables: [...this.state.tables, table],
    });
  };

  deleteFood = (menu) => {
    const { menus } = this.state;
    const deleteMenu = menus.filter((m) => m.id !== menu.id);
    this.setState({
      menus: deleteMenu,
    });
  };

  deleteTable = (table) => {
    const { tables } = this.state;
    const deleteTable = tables.filter((t) => t.id !== table.id);
    this.setState({
      tables: deleteTable,
    });
  };

  render() {
    const { statusLog, menus, tables } = this.state;
    console.log(tables);
    return (
      <div>
        {!statusLog ? (
          <Login setLoginStatus={this.setLoginStatus} />
        ) : (
          <Home
            menus={menus}
            tables={tables}
            setMenus={this.setMenus}
            setTables={this.setTables}
            setLoginStatus={this.setLoginStatus}
            deleteFood={this.deleteFood}
            deleteTable={this.deleteTable}
          />
        )}
      </div>
    );
  }
}

export default App;
