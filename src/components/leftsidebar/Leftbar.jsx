import React from "react";
import PieChartRoundedIcon from "@mui/icons-material/PieChartRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./leftbar.css";
import { color } from "echarts";

function DropDown(props) {
  const [open, setOpen] = React.useState(false);
  return (
    <li>
      <button
        class="btn d-flex align-items-center"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={"#" + props.id}
        aria-expanded="false"
        aria-controls="collapseExample"
        onClick={() => setOpen(!open)}
      >
        {props.icon}
        {props.title}
        {open ? (
          <KeyboardArrowUpOutlinedIcon style={{ marginLeft: "auto" }} />
        ) : (
          <KeyboardArrowDownOutlinedIcon style={{ marginLeft: "auto" }} />
        )}
      </button>
      <div class="collapse" id={props.id}>
        <ul class="list-group">
          {props.child.map((child) => {
            return <li class="list-group-item">{child}</li>;
          })}
        </ul>
      </div>
    </li>
  );
}

const Leftbar = () => {
  return (
    <aside className="main-sidebar">
      <div className="card d-flex justify-content-center align-items-center">
        <div className="card-body">
          <AccountCircleIcon
            style={{
              fontSize: "50px",
              color: "#c0c0c0",
              marginBlockEnd: "12px",
            }}
          />
          <h6 style={{ margin: "0" }}>demo@devias.io</h6>
          <p>Your tier: Premium</p>
        </div>
      </div>
      <nav className="sidebar">
        <ul className="sidebar-menu">
          <li className="header">Reports</li>
          <li className="active">
            {" "}
            <PieChartRoundedIcon style={{ marginRight: "10px" }} />
            <a href="#">Dashboard</a>{" "}
          </li>
          <li>
            {" "}
            <BarChartRoundedIcon style={{ marginRight: "10px" }} />
            <a href="#">Dashboard Alternative</a>{" "}
          </li>
          <DropDown
            icon={<PeopleOutlineOutlinedIcon style={{ marginRight: "10px" }} />}
            id="dropdown1"
            title="Customers"
            child={["List Customers", "View Customer", "Edit Customer"]}
          />
          <DropDown
            icon={<ShoppingCartOutlinedIcon style={{ marginRight: "10px" }} />}
            id="dropdown2"
            title="Products"
            child={["List Products", "View Product", "Edit Product"]}
          />
          <DropDown
            icon={<FolderOutlinedIcon style={{ marginRight: "10px" }} />}
            id="dropdown3"
            title="Orders"
            child={["List Orders", "View Order", "Edit Order"]}
          />
          <DropDown
            icon={<DescriptionOutlinedIcon style={{ marginRight: "10px" }} />}
            id="dropdown5"
            title="Invoices"
            child={["List Invoices", "View Invoices", "Edit Invoices"]}
          />
          <li className="header">Application</li>
          <DropDown
            icon={<BusinessCenterIcon style={{ marginRight: "10px" }} />}
            id="dropdown6"
            title="Project Platform"
            child={[
              "List Project Platform",
              "View Project Platform",
              "Edit Project Platform",
            ]}
          />
          <DropDown
            icon={<ShareOutlinedIcon style={{ marginRight: "10px" }} />}
            id="dropdown7"
            title="Social Platform"
            child={[
              "List Social Platform",
              "View Social Platform",
              "Edit Social Platform",
            ]}
          />
        </ul>
      </nav>
    </aside>
  );
};

export default Leftbar;
