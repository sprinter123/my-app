import styled from "styled-components";
// import {hover} from "@testing-library/user-event/dist/hover";

export const SalaryConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #00458a;
  background: #fff;
`;
export const EmploeeName = styled.span`
  margin: 10px 300px 10px 10px;
  width: 30%;
  font-family: sans-serif;
  font-size: 12px;
  text-decoration: none;
  color: #000;
  transition-all: 0.9s;
  &:hover {
    color: orange;
  }
`;

export const EmploeeSalary = styled.p`
  //margin: 10px 140px 10px 0;
  width: 10%;
  font-family: sans-serif;
  font-size: 12px;
`;
export const CanButton = styled.button`
  margin: 10px 10px 10px 140px;
  padding: 3px;
  color: darkred;
`;
export const StarButton = styled.button`
  margin: 10px 20px 10px 0;
  padding: 3px;
  background: ${(props) => (props.checked ? "#fff" : "#eee")};
  color: ${(props) => (props.checked ? "orange" : "white")};
  border: 1px solid grey;
`;
