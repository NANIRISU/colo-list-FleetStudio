import { React, useState } from "react";
import { Card } from "antd";
import {BiLeftArrowAlt} from "react-icons/bi"
import {
    Link
  } from "react-router-dom";
import data from "../data.json";
const { Meta } = Card;
function Color() {
  const [users, setUsers] = useState(data);
  console.log(users, "users");
  const searchData = (searchWord) => {
    console.log("searchWord", searchWord);
    if (searchWord !== "") {
      const newData = data.filter((item) => {
        const name = item.name ? item.name.toUpperCase() : "".toUpperCase();

        const searchWordData = searchWord.toUpperCase();
        if (name.indexOf(searchWordData) > -1) {
          return name.indexOf(searchWordData) > -1;
        }
      });
      setUsers(newData);
    } else {
      setUsers(data);
      // console.log(users, "hello");
    }
  };

  const colorData = () => {
    return users.map((user, index) => {
      return (
          
       
          <div className="card">
            <div className="colorcode">{user.colorcode} {user.name}</div>
          </div>
       
      );
    });
  };
  return users && users !== null && users.length > 0 ? (
    <div className="color">
        <Link to="/page" className="back"><BiLeftArrowAlt/> Back</Link>
    <div className="card-container">  
      {colorData()}
      </div>
  
      <input
        className="color-input"
        type="text"
        placeholder="search color"
        onChange={(e) => searchData(e.target.value.toString())}
      ></input>
    </div>
  ) : (
    <div>no data</div>
  );
}

export default Color;
