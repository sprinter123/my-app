import React, {useEffect} from "react";
import Registration from "../Components/Registration";
import NewEmploee from "../Components/NewEmploee";
import { MainDiv } from "../Style/AppStyle";
import SalaryObj from "../Components/SalaryObj";
import { useDispatch, useSelector } from "react-redux";
import {createUser, deleteUser, fetchUsers, checkFavorite} from "../Redux/actions";
import {findAllByTitle} from "@testing-library/react";


const Organizer = () => {
  const { users } = useSelector((state) => state);
  const dispatch = useDispatch();

  //GET

  const onFetch = async () => {
    await fetch('http://localhost:3001/employee', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: null
    }).then((response) => response.json())
        .then((data) => dispatch(fetchUsers(data)));
  }

  useEffect(() => {
    onFetch();
  }, []);

  // ADD NEW EMPLOEE

  const addNewEmploee = (data) => {
    dispatch(createUser(data));
  };

  // DELETE EMPLOEE

  const deleteItem = async (id) => {
    await fetch('http://localhost:3001/employee/'+id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: null
    }).then((response) => response.json())
      .then((data) => {
        dispatch(deleteUser(id))

      } );
  };

  // ADD AND DELETE FROM AWARD LIST

  const checkedFavorite = async (id, favorite) => {
    await fetch(`http://localhost:3001/employee/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
         favorite: !favorite,
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json())
      .then((data) => {
        dispatch(checkFavorite(id))
      });
  };

  return (
    <MainDiv>
      <Registration total={users.length} salary={users} />
      <SalaryObj
        items={users}
        onDeleted={deleteItem}
        checkedFavorite={checkedFavorite}
      />
      <NewEmploee onAddData={addNewEmploee} />
    </MainDiv>
  );
};

export default Organizer;
