import React, {useState} from "react";
import {InputContainer, InputField, InputButton} from '../Style/EmploeeFormStyle'
import {fetchUsers, postUsers} from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";


const EmploeeForm = () => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredSalary, setEnteredSalary] = useState('');
  const { users } = useSelector((state) => state);
  const dispatch = useDispatch();

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const salaryChangeHandler = (event) => {
    setEnteredSalary(event.target.value);
  };

  // const clickHandler = (event)=> {
  //   event.preventDefault();
  //   const inputData={
  //     name:enteredName,
  //     income:enteredSalary
  //   }
  //
  //   props.onEmploeeForm(inputData);
  //   setEnteredName('');
  //   setEnteredSalary('')
  // }

  const postData = async () => {
    const obj= {id:Math.floor(Math.random() * (1000 - 1) + 1).toString(), name: enteredName, income: enteredSalary, favorite: true}
    let objToJSON = JSON.stringify(obj)
    await fetch('http://localhost:3001/employee', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: objToJSON
    })
      .then((response) => response.json())
      .then((data) => dispatch(postUsers(data)))
      .catch((e)=>console.log(e))}

  return (
    <InputContainer>
      <InputField type="text" value={enteredName} placeholder={"Как его зовут?"} onChange={nameChangeHandler}/>
      <InputField type="text" value={enteredSalary} placeholder={"З/П в $?"} onChange={salaryChangeHandler}/>
      <InputButton onClick={()=>postData()}>Добавить</InputButton>
    </InputContainer>

  );
};

export default EmploeeForm;
