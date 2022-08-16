import React from "react";
import Salary from "./Salary";
// import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrash } from "@fortawesome/free-solid-svg-icons";


const SalaryObj = (props) => {
  const { items, onDeleted, checkedFavorite } = props;
  // const todos = useSelector();

  return (
    <div>
      {items.map((data) => (
        <Salary
          checkedFavorite={checkedFavorite}
          onDelete={() => onDeleted(data.id)}
          id={data.id}
          key={data.id}
          name={data.name}
          income={data.income}
          canIcon={<FontAwesomeIcon icon={faTrash} />}
          star={<FontAwesomeIcon icon={faStar} />}
          favorite={data.favorite}
        />
      ))}
    </div>
  );
};

export default SalaryObj;
