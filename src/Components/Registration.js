import React from "react";
import { HeaderConteiner, Emploees, Avard } from "../Style/RegistrationStyle";

const Registration = ({ total, salary }) => {


return(
  <HeaderConteiner>
    <Emploees>Учет сотрудников в компании N</Emploees>
    <Avard>Общее число сотрудников:{total}</Avard>
    <Avard>
      Премию получат: <span>{salary.filter((i) => i.favorite).length}</span>
    </Avard>
  </HeaderConteiner>
)};

export default Registration;
