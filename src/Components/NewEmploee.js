import React from "react";
import EmploeeForm from "./EmploeeForm";
import { NewEmploeeContainer, NewEmploeeTitle } from "../Style/NewEmploeeStyle";

const NewEmploee = (props) => {
  const SaveEnteredData = (enteredEmploeeData) => {
    const saveEmploeeData = {
      ...enteredEmploeeData,
      id: Math.floor(Math.random() * (1000 - 1) + 1).toString(),
    };
    props.onAddData(saveEmploeeData);
  };

  return (
    <NewEmploeeContainer>
      <NewEmploeeTitle>Добавьте нового сотрудника</NewEmploeeTitle>
      <EmploeeForm onEmploeeForm={SaveEnteredData} />
    </NewEmploeeContainer>
  );
};

export default NewEmploee;
