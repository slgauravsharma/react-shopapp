import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import MyJugTourTable from "../components/myJugTour/myJugTourTable";
import AddEditMyJugTourModal from "../components/myJugTour/addEditMyJugTourModal";
import {
  setSelectedFormValuesTour,
  deleteSelectedTour,
  setShowAddEditMyJugTourModal,
  updateListAndResetValues,
} from "../store/slices/myJugTourSlice";

const MyJugTourContainer = () => {
  const dispatch = useDispatch();
  const { list, showAddEditMyJugTourModal, defaultFormValues } = useSelector(
    (state) => state.myJugTour
  );

  const onEdit = (id) => {
    const currentSelectedFormValue = list.find((item) => item.id === id);
    dispatch(setSelectedFormValuesTour(currentSelectedFormValue));
    dispatch(setShowAddEditMyJugTourModal(true));
  };

  const onDelete = (id) => {
    dispatch(deleteSelectedTour(id));
  };

  const onSubmit = (e, formFields) => {
    e.preventDefault();
    dispatch(updateListAndResetValues(formFields));
  };

  console.log({ showAddEditMyJugTourModal });
  return (
    <Container className="mt-5">
      <section className="d-flex justify-content-between">
        <h3 className="">My JUG Tour</h3>
        <Button
          className="bg-success"
          onClick={() => dispatch(setShowAddEditMyJugTourModal(true))}
        >
          Add Group
        </Button>
      </section>
      <div className="mt-3">
        {showAddEditMyJugTourModal && (
          <AddEditMyJugTourModal
            defaultFormValues={defaultFormValues}
            show={showAddEditMyJugTourModal}
            onHide={() => dispatch(setShowAddEditMyJugTourModal(false))}
            onSubmit={onSubmit}
          />
        )}
        <MyJugTourTable list={list} onEdit={onEdit} onDelete={onDelete} />
      </div>
    </Container>
  );
};

export default MyJugTourContainer;
