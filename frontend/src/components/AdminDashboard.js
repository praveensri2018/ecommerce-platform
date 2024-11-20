import React, { useState, useEffect } from "react";
import axios from "axios";

function AdminDashboard() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/admin/customers", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setCustomers(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching customers", err);
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  if (loading) return <p>Loading customers...</p>;

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <h3>Customers</h3>
      <ul>
        {customers.map((customer) => (
          <li key={customer._id}>
            <h3>{customer.name}</h3>
            <p>Email: {customer.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
