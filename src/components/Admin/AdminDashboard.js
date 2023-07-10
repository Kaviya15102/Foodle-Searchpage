import React from "react";
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div>
    <h2>Admin Dashboard</h2>
    <div className="table-container">
        <a className="brand">
            Foodle Users
        </a>
      <table className="color-border-table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone.no</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Ram</td>
            <td>ram@gmail.com</td>
            <td>7305634456</td>
            <td>  
              <button className="deletebutton">Delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Genani</td>
            <td>genani@gmail.com</td>
            <td>9994312356</td>
            <td>  
              <button className="deletebutton">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>


    <div className="table-container">
        <a className="brand">
            Foodle Restaurants
        </a>
      <table className="color-border-table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Geetham</td>
            <td>geetham@gmail.com</td>
            <td>Chennai</td>
            <td>  
              <button className="deletebutton">Delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Thalappakatti</td>
            <td>thalappakatti@gmail.com</td>
            <td>Dindigul</td>
            <td>  
              <button className="deletebutton">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>


    <div className="table-container">
        <a className="brand">
            Foodle Orders
        </a>
      <table className="color-border-table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Order ID</th>
            <th>Restaurant</th>
            <th>Customer</th>
            <th>Cost</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>#0001</td>
            <td>Geetham</td>
            <td>Ram</td>
            <td>150</td>
            <td>Delivered</td>
          </tr>
          <tr>
            <td>2</td>
            <td>#0002</td>
            <td>Thalappakatti</td>
            <td>Genani</td>
            <td>500</td>
            <td>Delivered</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default AdminDashboard;
