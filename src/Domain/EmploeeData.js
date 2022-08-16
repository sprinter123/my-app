import React from "react";
import { Link, useParams } from "react-router-dom";
import { salaryInitial } from "../mock";


const EmploeeData = (props) => {
  // const { items } = props;
  const { id } = useParams();
  const curentPerson = id ? salaryInitial.find((item) => item.id === id) : null;
  console.log(curentPerson);

  return (
    <div>
      <Link to="/">
        <h1>Back :{curentPerson?.name || "Unknown Person"}</h1>
        <h1>Back :{curentPerson?.income || "0"}</h1>
      </Link>
    </div>
  );
};
// };

export default EmploeeData;
