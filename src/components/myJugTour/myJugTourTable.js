import React from "react";
import Button from "react-bootstrap/Button";

const MyJugTourTable = ({ list = [], onEdit, onDelete }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope="col">Events</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((listItem) => (
            <tr key={listItem.id}>
              <th scope="row">{listItem.name}</th>
              <td>{listItem.location}</td>
              <td>{listItem.events}</td>
              <td>
                <div className="d-flex">
                  <Button onClick={() => onEdit(listItem.id)} size="sm">
                    Edit
                  </Button>
                  <Button
                    onClick={() => onDelete(listItem.id)}
                    size="sm"
                    className="bg-danger"
                  >
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
          {!list.length && (
            <tr className="border-bottom" role="tr">
              <td role="td">No Data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyJugTourTable;
