import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  SalaryConteiner,
  EmploeeName,
  EmploeeSalary,
  CanButton,
  StarButton,
} from "../Style/SalaryStyle";

const Salary = (props) => {
  return (
    <SalaryConteiner>
      <Link to={`/emploee/${props.id}`}>
        <EmploeeName>{props.name}</EmploeeName>
      </Link>
      <EmploeeSalary>{props.income}</EmploeeSalary>
      <CanButton onClick={props.onDelete}>  <FontAwesomeIcon icon={faTrash} /></CanButton>
      <StarButton
        onClick={() => props.checkedFavorite(props.id, props.favorite)}
        checked={props.favorite}
      >
          <FontAwesomeIcon icon={faStar} />
        <span>{props.favorite}</span>
      </StarButton>
    </SalaryConteiner>
  );
};

export default Salary;
