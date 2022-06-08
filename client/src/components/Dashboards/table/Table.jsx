import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

const List = () => {
  const rows = [
    {
      id: 1,
      car: " Avanza",
      price: " 50000",
      uploadImg: "8c7e92e82b01ed4951ac3bdcbc938eb4_tn.jfif",
      startRent: "03/27/2022",
      finishRent: "03/28/2022",
      createdAt: "03/28/2022",
      updatedAt: "03/28/2022",
      status: "Approved",
    },
    {
      id: 2,
      car: " isuzuu",
      price: " 430000",
      uploadImg: "5f7ec703ae956.jpg",
      startRent: "03/29/2022",
      finishRent: "03/29/2022",
      createdAt: "03/29/2022",
      updatedAt: "03/29/2022",
      status: "Pending",
    },
    {
      id: 3,
      car: " Inovaaa",
      price: " 60000",
      uploadImg: "8c7e92e82b01ed4951ac3bdcbc938eb4_tn.jfif",
      startRent: "03/29/2022",
      finishRent: "03/29/2022",
      createdAt: "03/29/2022",
      updatedAt: "03/29/2022",
      status: "Pending",
    },
    {
      id: 4,
      car: " Avanza",
      price: " 430000",
      uploadImg: "05aa5caf-efdc-4ae1-8dc4-c98982522ccf.jpg",
      startRent: "03/30/2022",
      finishRent: "03/30/2022",
      createdAt: "03/30/2022",
      updatedAt: "03/30/2022",
      status: "Approved",
    },
    {
      id: 5,
      car: " Inovaaa",
      price: " 500",
      uploadImg: "boomelas.jpg",
      startRent: "03/30/2022",
      finishRent: "03/30/2022",
      createdAt: "03/30/2022",
      updatedAt: "03/30/2022",
      status: "Pending",
    },
  ];
  return (
    <div className="data">
      <div className="top d-flex">
        <div className="title">Dashboard</div>
        <ChevronRightOutlinedIcon />
        <div className="subtitle">Dashboard</div>
      </div>
      <div className="page">Dashboard</div>
      <div className="line d-flex">
        <div className="title-table"></div>
        List Order
      </div>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 1020 }} aria-label="simple table">
          <TableHead>
            <TableRow className="headCell">
              <TableCell className="tableCell">No</TableCell>
              <TableCell className="tableCell">User Email</TableCell>
              <TableCell className="tableCell">Car</TableCell>
              <TableCell className="tableCell">Start Rent</TableCell>
              <TableCell className="tableCell">Finish Rent</TableCell>
              <TableCell className="tableCell">Price</TableCell>

              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell className="tableCell">user@email.com</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">{row.car}</div>
                </TableCell>
                <TableCell className="tableCell">{row.startRent}</TableCell>
                <TableCell className="tableCell">{row.finishRent}</TableCell>
                <TableCell className="tableCell">{row.price}</TableCell>
                <TableCell className="tableCell">
                  <div className={`status ${row.status}`}>{row.status}</div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default List;
