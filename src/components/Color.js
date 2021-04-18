import { React, useState } from "react";

import { BiLeftArrowAlt } from "react-icons/bi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

function Color() {
  const colors = [
    { colorsd: "#FF0000", title: "red" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#00FF00", title: "lime" },
    { colorsd: "#808000", title: "olive" },
    { colorsd: "#000080", title: "navy" },
    { colorsd: "#ec015a", title: "red" },
    { colorsd: "#008000", title: "green" },
    { colorsd: "#70327e", title: "viloet" },
    { colorsd: "#483d8b", title: "blue" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#008080", title: "teal" },
    { colorsd: "#00FFFF", title: "aqua" },,
    { colorsd: "#f0ffff", title: "azure" },
    { colorsd: "#f5f5dc", title: "beige" },
    { colorsd: "#000000", title: "black" },
    { colorsd: "#FF0000", title: "red" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#00FF00", title: "lime" },
    { colorsd: "#808000", title: "olive" },
    { colorsd: "#000080", title: "navy" },
    { colorsd: "#ec015a", title: "red" },
    { colorsd: "#008000", title: "green" },
    { colorsd: "#70327e", title: "viloet" },
    { colorsd: "#1e90ff", title: "blue" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#008080", title: "teal" },
    { colorsd: "#00FFFF", title: "aqua" },,
    { colorsd: "#f0ffff", title: "azure" },
    { colorsd: "#f5f5dc", title: "beige" },
    { colorsd: "#000000", title: "black" },
    { colorsd: "#FF0000", title: "red" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#00FF00", title: "lime" },
    { colorsd: "#808000", title: "olive" },
    { colorsd: "#000080", title: "navy" },
    { colorsd: "#ec015a", title: "red" },
    { colorsd: "#008000", title: "green" },
    { colorsd: "#70327e", title: "viloet" },
    { colorsd: "#0000FFF", title: "blue" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#008080", title: "teal" },
    { colorsd: "#00FFFF", title: "aqua" },,
    { colorsd: "#f0ffff", title: "azure" },
    { colorsd: "#f5f5dc", title: "beige" },
    { colorsd: "#000000", title: "black" },
    { colorsd: "#FF0000", title: "red" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#00FF00", title: "lime" },
    { colorsd: "#808000", title: "olive" },
    { colorsd: "#000080", title: "navy" },
    { colorsd: "#ec015a", title: "red" },
    { colorsd: "#008000", title: "green" },
    { colorsd: "#70327e", title: "viloet" },
    { colorsd: "#0000FF", title: "blue" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#008080", title: "teal" },
    { colorsd: "#00FFFF", title: "aqua" },,
    { colorsd: "#f0ffff", title: "azure" },
    { colorsd: "#f5f5dc", title: "beige" },
    { colorsd: "#000000", title: "black" },
    { colorsd: "#FF0000", title: "red" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#00FF00", title: "lime" },
    { colorsd: "#808000", title: "olive" },
    { colorsd: "#000080", title: "navy" },
    { colorsd: "#ec015a", title: "red" },
    { colorsd: "#008000", title: "green" },
    { colorsd: "#70327e", title: "viloet" },
    { colorsd: "#0000FF", title: "blue" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#008080", title: "teal" },
    { colorsd: "#00FFFF", title: "aqua" },,
    { colorsd: "#f0ffff", title: "azure" },
    { colorsd: "#f5f5dc", title: "beige" },
    { colorsd: "#000000", title: "black" },
    { colorsd: "#FF0000", title: "red" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#00FF00", title: "lime" },
    { colorsd: "#808000", title: "olive" },
    { colorsd: "#000080", title: "navy" },
    { colorsd: "#ec015a", title: "red" },
    { colorsd: "#008000", title: "green" },
    { colorsd: "#70327e", title: "viloet" },
    { colorsd: "#0000FF", title: "blue" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#008080", title: "teal" },
    { colorsd: "#00FFFF", title: "aqua" },,
    { colorsd: "#f0ffff", title: "azure" },
    { colorsd: "#f5f5dc", title: "beige" },
    { colorsd: "#000000", title: "black" },
    { colorsd: "#FF0000", title: "red" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#00FF00", title: "lime" },
    { colorsd: "#808000", title: "olive" },
    { colorsd: "#000080", title: "navy" },
    { colorsd: "#ec015a", title: "red" },
    { colorsd: "#008000", title: "green" },
    { colorsd: "#70327e", title: "viloet" },
    { colorsd: "#0000FF", title: "blue" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#008080", title: "teal" },
    { colorsd: "#00FFFF", title: "aqua" },,
    { colorsd: "#f0ffff", title: "azure" },
    { colorsd: "#f5f5dc", title: "beige" },
    { colorsd: "#000000", title: "black" },
    { colorsd: "#FF0000", title: "red" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#00FF00", title: "lime" },
    { colorsd: "#808000", title: "olive" },
    { colorsd: "#000080", title: "navy" },
    { colorsd: "#ec015a", title: "red" },
    { colorsd: "#008000", title: "green" },
    { colorsd: "#70327e", title: "viloet" },
    { colorsd: "#0000FF", title: "blue" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#008080", title: "teal" },
    { colorsd: "#00FFFF", title: "aqua" },,
    { colorsd: "#f0ffff", title: "azure" },
    { colorsd: "#f5f5dc", title: "beige" },
    { colorsd: "#000000", title: "black" },
    { colorsd: "#FF0000", title: "red" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#00FF00", title: "lime" },
    { colorsd: "#808000", title: "olive" },
    { colorsd: "#000080", title: "navy" },
    { colorsd: "#ec015a", title: "red" },
    { colorsd: "#008000", title: "green" },
    { colorsd: "#70327e", title: "viloet" },
    { colorsd: "#0000FF", title: "blue" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#008080", title: "teal" },
    { colorsd: "#00FFFF", title: "aqua" },,
    { colorsd: "#f0ffff", title: "azure" },
    { colorsd: "#f5f5dc", title: "beige" },
    { colorsd: "#000000", title: "black" },
    { colorsd: "#FF0000", title: "red" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#00FF00", title: "lime" },
    { colorsd: "#808000", title: "olive" },
    { colorsd: "#000080", title: "navy" },
    { colorsd: "#ec015a", title: "red" },
    { colorsd: "#008000", title: "green" },
    { colorsd: "#70327e", title: "viloet" },
    { colorsd: "#0000FF", title: "blue" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#008080", title: "teal" },
    { colorsd: "#00FFFF", title: "aqua" },,
    { colorsd: "#f0ffff", title: "azure" },
    { colorsd: "#f5f5dc", title: "beige" },
    { colorsd: "#000000", title: "black" },
    { colorsd: "#FF0000", title: "red" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#00FF00", title: "lime" },
    { colorsd: "#808000", title: "olive" },
    { colorsd: "#000080", title: "navy" },
    { colorsd: "#ec015a", title: "red" },
    { colorsd: "#008000", title: "green" },
    { colorsd: "#70327e", title: "viloet" },
    { colorsd: "#0000FF", title: "blue" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#008080", title: "teal" },
    { colorsd: "#00FFFF", title: "aqua" },,
    { colorsd: "#f0ffff", title: "azure" },
    { colorsd: "#f5f5dc", title: "beige" },
    { colorsd: "#000000", title: "black" },
    { colorsd: "#FF0000", title: "red" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#00FF00", title: "lime" },
    { colorsd: "#808000", title: "olive" },
    { colorsd: "#000080", title: "navy" },
    { colorsd: "#ec015a", title: "red" },
    { colorsd: "#008000", title: "green" },
    { colorsd: "#70327e", title: "viloet" },
    { colorsd: "#0000FF", title: "blue" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#008080", title: "teal" },
    { colorsd: "#00FFFF", title: "aqua" },,
    { colorsd: "#f0ffff", title: "azure" },
    { colorsd: "#f5f5dc", title: "beige" },
    { colorsd: "#000000", title: "black" },
    { colorsd: "#FF0000", title: "red" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#00FF00", title: "lime" },
    { colorsd: "#808000", title: "olive" },
    { colorsd: "#000080", title: "navy" },
    { colorsd: "#ec015a", title: "red" },
    { colorsd: "#008000", title: "green" },
    { colorsd: "#70327e", title: "viloet" },
    { colorsd: "#0000FF", title: "blue" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#008080", title: "teal" },
    { colorsd: "#00FFFF", title: "aqua" },,
    { colorsd: "#f0ffff", title: "azure" },
    { colorsd: "#f5f5dc", title: "beige" },
    { colorsd: "#000000", title: "black" },
    { colorsd: "#FF0000", title: "red" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#00FF00", title: "lime" },
    { colorsd: "#808000", title: "olive" },
    { colorsd: "#000080", title: "navy" },
    { colorsd: "#ec015a", title: "red" },
    { colorsd: "#008000", title: "green" },
    { colorsd: "#70327e", title: "viloet" },
    { colorsd: "#0000FF", title: "blue" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#008080", title: "teal" },
    { colorsd: "#00FFFF", title: "aqua" },,
    { colorsd: "#f0ffff", title: "azure" },
    { colorsd: "#f5f5dc", title: "beige" },
    { colorsd: "#000000", title: "black" },
    { colorsd: "#FF0000", title: "red" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#00FF00", title: "lime" },
    { colorsd: "#808000", title: "olive" },
    { colorsd: "#000080", title: "navy" },
    { colorsd: "#ec015a", title: "red" },
    { colorsd: "#008000", title: "green" },
    { colorsd: "#70327e", title: "viloet" },
    { colorsd: "#0000FF", title: "blue" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#008080", title: "teal" },
    { colorsd: "#00FFFF", title: "aqua" },,
    { colorsd: "#f0ffff", title: "azure" },
    { colorsd: "#f5f5dc", title: "beige" },
    { colorsd: "#000000", title: "black" },
    { colorsd: "#FF0000", title: "red" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#00FF00", title: "lime" },
    { colorsd: "#808000", title: "olive" },
    { colorsd: "#000080", title: "navy" },
    { colorsd: "#ec015a", title: "red" },
    { colorsd: "#008000", title: "green" },
    { colorsd: "#70327e", title: "viloet" },
    { colorsd: "#0000FF", title: "blue" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#008080", title: "teal" },
    { colorsd: "#00FFFF", title: "aqua" },,
    { colorsd: "#f0ffff", title: "azure" },
    { colorsd: "#f5f5dc", title: "beige" },
    { colorsd: "#000000", title: "black" },
    { colorsd: "#FF0000", title: "red" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#00FF00", title: "lime" },
    { colorsd: "#808000", title: "olive" },
    { colorsd: "#000080", title: "navy" },
    { colorsd: "#ec015a", title: "red" },
    { colorsd: "#008000", title: "green" },
    { colorsd: "#70327e", title: "viloet" },
    { colorsd: "#0000FF", title: "blue" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#008080", title: "teal" },
    { colorsd: "#00FFFF", title: "aqua" },,
    { colorsd: "#f0ffff", title: "azure" },
    { colorsd: "#f5f5dc", title: "beige" },
    { colorsd: "#000000", title: "black" },
    { colorsd: "#FF0000", title: "red" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#00FF00", title: "lime" },
    { colorsd: "#808000", title: "olive" },
    { colorsd: "#000080", title: "navy" },
    { colorsd: "#ec015a", title: "red" },
    { colorsd: "#008000", title: "green" },
    { colorsd: "#70327e", title: "viloet" },
    { colorsd: "#0000FF", title: "blue" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#008080", title: "teal" },
    { colorsd: "#00FFFF", title: "aqua" },,
    { colorsd: "#f0ffff", title: "azure" },
    { colorsd: "#f5f5dc", title: "beige" },
    { colorsd: "#000000", title: "black" },
    { colorsd: "#FF0000", title: "red" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#00FF00", title: "lime" },
    { colorsd: "#808000", title: "olive" },
    { colorsd: "#000080", title: "navy" },
    { colorsd: "#ec015a", title: "red" },
    { colorsd: "#008000", title: "green" },
    { colorsd: "#70327e", title: "viloet" },
    { colorsd: "#0000FF", title: "blue" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#008080", title: "teal" },
    { colorsd: "#00FFFF", title: "aqua" },,
    { colorsd: "#f0ffff", title: "azure" },
    { colorsd: "#f5f5dc", title: "beige" },
    { colorsd: "#000000", title: "black" },
    { colorsd: "#FF0000", title: "red" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#00FF00", title: "lime" },
    { colorsd: "#808000", title: "olive" },
    { colorsd: "#000080", title: "navy" },
    { colorsd: "#ec015a", title: "red" },
    { colorsd: "#008000", title: "green" },
    { colorsd: "#70327e", title: "viloet" },
    { colorsd: "#0000FF", title: "blue" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#008080", title: "teal" },
    { colorsd: "#00FFFF", title: "aqua" },,
    { colorsd: "#f0ffff", title: "azure" },
    { colorsd: "#f5f5dc", title: "beige" },
    { colorsd: "#000000", title: "black" },
    { colorsd: "#FF0000", title: "red" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#00FF00", title: "lime" },
    { colorsd: "#808000", title: "olive" },
    { colorsd: "#000080", title: "navy" },
    { colorsd: "#ec015a", title: "red" },
    { colorsd: "#008000", title: "green" },
    { colorsd: "#70327e", title: "viloet" },
    { colorsd: "#0000FF", title: "blue" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#008080", title: "teal" },
    { colorsd: "#00FFFF", title: "aqua" },,
    { colorsd: "#f0ffff", title: "azure" },
    { colorsd: "#f5f5dc", title: "beige" },
    { colorsd: "#000000", title: "black" },
    { colorsd: "#FF0000", title: "red" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#00FF00", title: "lime" },
    { colorsd: "#808000", title: "olive" },
    { colorsd: "#000080", title: "navy" },
    { colorsd: "#ec015a", title: "red" },
    { colorsd: "#008000", title: "green" },
    { colorsd: "#70327e", title: "viloet" },
    { colorsd: "#0000FF", title: "blue" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#008080", title: "teal" },
    { colorsd: "#00FFFF", title: "aqua" },,
    { colorsd: "#f0ffff", title: "azure" },
    { colorsd: "#f5f5dc", title: "beige" },
    { colorsd: "#000000", title: "black" },
    { colorsd: "#FF0000", title: "red" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#00FF00", title: "lime" },
    { colorsd: "#808000", title: "olive" },
    { colorsd: "#000080", title: "navy" },
    { colorsd: "#ec015a", title: "red" },
    { colorsd: "#008000", title: "green" },
    { colorsd: "#70327e", title: "viloet" },
    { colorsd: "#0000FF", title: "blue" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#008080", title: "teal" },
    { colorsd: "#00FFFF", title: "aqua" },,
    { colorsd: "#f0ffff", title: "azure" },
    { colorsd: "#f5f5dc", title: "beige" },
    { colorsd: "#000000", title: "black" },
    { colorsd: "#FF0000", title: "red" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#00FF00", title: "lime" },
    { colorsd: "#808000", title: "olive" },
    { colorsd: "#000080", title: "navy" },
    { colorsd: "#ec015a", title: "red" },
    { colorsd: "#008000", title: "green" },
    { colorsd: "#70327e", title: "viloet" },
    { colorsd: "#0000FF", title: "blue" },
    { colorsd: "#ffff00", title: "yellow" },
    { colorsd: "#008080", title: "teal" },
    { colorsd: "#00FFFF", title: "aqua" },,
    { colorsd: "#f0ffff", title: "azure" },
    { colorsd: "#f5f5dc", title: "beige" },
    { colorsd: "#000000", title: "black" },
    
  ];
  const [background, setBackground] = useState("#071415");
  const [current, setCurrent] = useState();
  const [users, setUsers] = useState(colors);

  console.log(users, "users");

  const searchData = (searchWord) => {
    if (searchWord !== "") {
      const newData = users.filter((item) => {
        const name = item.title ? item.title.toUpperCase() : "".toUpperCase();

        const searchWordData = searchWord.toUpperCase();
        if (name.indexOf(searchWordData) > -1) {
          return name.indexOf(searchWordData) > -1;
        }
      });
      setUsers(newData);
    } else {
      setUsers(colors);
      // console.log(users, "hello");
    }
  };

  //   const colorData = () => {
  //     return users.map((user, index) => {
  //       return (

  //           <div className="card">
  //             <div className="colorcode">{user.colorcode} {user.name}</div>
  //           </div>

  //       );
  //     });
  //   };
  return users && users !== null && users.length > 0 ? (
    <div className="color">
      <Link to="/page" className="back">
        <BiLeftArrowAlt /> Back
      </Link>
      <div className="App">
        <div className="">
          {current !== null && <h1>Copied{current}</h1>}
          <div className="container">
            {users.map((color, index) => (
              <div key={index} className="card">
                <div
                  style={{
                    background: color.colorsd,
                    filter: "brightness(85%)",
                    boxShadow:
                      color.colorsd === background ? "0 0 5px #000" : "",
                  }}
                  className="box"
                  onClick={() => setBackground(color.colorsd)}
                />
                <CopyToClipboard text={`color:${color.colorsd};`}>
                  <p>{color.colorsd}</p>
                </CopyToClipboard>
              </div>
            ))}
          </div>
        </div>
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
