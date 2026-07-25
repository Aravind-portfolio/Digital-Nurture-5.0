import officeImage from "./assets/office1.jpeg";

function App() {
  const office = {
    name: "DBS Business Center",
    rent: 55000,
    address: "Chennai",
  };

  const officeList = [
    {
      name: "DBS Business Center",
      rent: 55000,
      address: "Chennai",
    },
    {
      name: "Tech Park",
      rent: 65000,
      address: "Bangalore",
    },
    {
      name: "Global Towers",
      rent: 72000,
      address: "Hyderabad",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Office Space Rental App</h1>

      <img
        src={officeImage}
        alt="Office"
        width="400"
      />

      <h2>Featured Office</h2>

      <p>
        <strong>Name:</strong> {office.name}
      </p>

      <p
        style={{
          color: office.rent < 60000 ? "red" : "green",
        }}
      >
        <strong>Rent:</strong> ₹{office.rent}
      </p>

      <p>
        <strong>Address:</strong> {office.address}
      </p>

      <hr />

      <h2>Available Office Spaces</h2>

      {officeList.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "15px",
            width: "350px",
          }}
        >
          <h3>{item.name}</h3>

          <p
            style={{
              color: item.rent < 60000 ? "red" : "green",
            }}
          >
            <strong>Rent:</strong> ₹{item.rent}
          </p>

          <p>
            <strong>Address:</strong> {item.address}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;