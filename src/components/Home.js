import React from 'react'
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <>
           <Link to="page"  className="home">
               <div>
                COLOR
                <div>
             <b>
             WORD
            </b>
            </div>

            </div>
        </Link>
        </>
    )
 }
// import React, { useState, useEffect } from "react";
// import { CopyToClipboard } from "react-copy-to-clipboard";

// export default function Home() {
//   const colors = [
//     { colorsd: "#FF0000", name: "red" },
//     { colorsd: "#ffff00", name: "yellow" },
//     { colorsd: "#00FF00", name: "lime" },
//     { colorsd: "#808000", name: "olive" },
//     { colorsd: "#000080", name: "navy" },
//     { colorsd: "#ec015a", name: "red" },
//     { colorsd: "#008000", name: "green" },
//     { colorsd: "#70327e", name: "viloet" },
//     { colorsd: "#0000FF", name: "blue" },
//     { colorsd: "#ffff00", name: "yellow" },
//     { colorsd: "#008080", name: "teal" },
//     { colorsd: "#00FFFF", name: "aqua" },
//     { colorsd: "#f0f8ff", name: "aliceblue" },
//     { colorsd: "#f0ffff", name: "azure" },
//     { colorsd: "#f5f5dc", name: "beige" },
//     { colorsd: "#000000", name: "black" },
//     { colorsd: "#FF0000", name: "red" },
//     { colorsd: "#ffff00", name: "yellow" },
//     { colorsd: "#00FF00", name: "lime" },
//     { colorsd: "#808000", name: "olive" },
//     { colorsd: "#000080", name: "navy" },
//     { colorsd: "#ec015a", name: "red" },
//     { colorsd: "#008000", name: "green" },
//     { colorsd: "#70327e", name: "viloet" },
//     { colorsd: "#0000FF", name: "blue" },
//     { colorsd: "#ffff00", name: "yellow" },
//     { colorsd: "#008080", name: "teal" },
//     { colorsd: "#00FFFF", name: "aqua" },
//     { colorsd: "#f0f8ff", name: "aliceblue" },
//     { colorsd: "#f0ffff", name: "azure" },
//     { colorsd: "#f5f5dc", name: "beige" },
//     { colorsd: "#000000", name: "black" },
//     { colorsd: "#FF0000", name: "red" },
//     { colorsd: "#ffff00", name: "yellow" },
//     { colorsd: "#00FF00", name: "lime" },
//     { colorsd: "#808000", name: "olive" },
//     { colorsd: "#000080", name: "navy" },
//     { colorsd: "#ec015a", name: "red" },
//     { colorsd: "#008000", name: "green" },
//     { colorsd: "#70327e", name: "viloet" },
//     { colorsd: "#0000FF", name: "blue" },
//     { colorsd: "#ffff00", name: "yellow" },
//     { colorsd: "#008080", name: "teal" },
//     { colorsd: "#00FFFF", name: "aqua" },
//     { colorsd: "#f0f8ff", name: "aliceblue" },
//     { colorsd: "#f0ffff", name: "azure" },
//     { colorsd: "#f5f5dc", name: "beige" },
//     { colorsd: "#000000", name: "black" },
//     { colorsd: "#FF0000", name: "red" },
//     { colorsd: "#ffff00", name: "yellow" },
//     { colorsd: "#00FF00", name: "lime" },
//     { colorsd: "#808000", name: "olive" },
//     { colorsd: "#000080", name: "navy" },
//     { colorsd: "#ec015a", name: "red" },
//     { colorsd: "#008000", name: "green" },
//     { colorsd: "#70327e", name: "viloet" },
//     { colorsd: "#0000FF", name: "blue" },
//     { colorsd: "#ffff00", name: "yellow" },
//     { colorsd: "#008080", name: "teal" },
//     { colorsd: "#00FFFF", name: "aqua" },
//     { colorsd: "#f0f8ff", name: "aliceblue" },
//     { colorsd: "#f0ffff", name: "azure" },
//     { colorsd: "#f5f5dc", name: "beige" },
//     { colorsd: "#000000", name: "black" },

//     // {"#0000ff",name:"red"},
//     // "#ffff00",
//     // "#008000",
//     // "#9253a1",
//     // "#f063a4",
//     // "#ec015a",
//     // "#70327e",
//     // "#a42963",
//     // "#f89e4f",
//     // "#2dc5f4",
//     // "#000000",
//     // "#0000ff",
//     // "#ffff00",
//     // "#008000",
//     // "#9253a1",
//     // "#f063a4",
//     // "#ec015a",
//     // "#70327e",
//     // "#a42963",
//     // "#f89e4f",
//     // "#2dc5f4",
//     // "#000000",
//     // "#0000ff",
//     // "#ffff00",
//     // "#008000",
//     // "#9253a1",
//     // "#f063a4",
//     // "#ec015a",
//     // "#70327e",
//     // "#a42963",
//     // "#f89e4f",
//     // "#2dc5f4",
//     // "#000000",
//     // "#0000ff",
//     // "#ffff00",
//     // "#008000",
//     // "#9253a1",
//     // "#f063a4",
//     // "#ec015a",
//     // "#70327e",
//     // "#a42963",
//     // "#f89e4f",
//     // "#2dc5f4",
//     // "#000000",
//     // "#0000ff",
//     // "#ffff00",
//     // "#008000",
//     // "#9253a1",
//     // "#f063a4",
//     // "#ec015a",
//     // "#70327e",
//     // "#a42963",
//     // "#f89e4f",
//     // "#2dc5f4",
//     // "#000000",
//     // "#0000ff",
//     // "#ffff00",
//     // "#008000",
//     // "#9253a1",
//     // "#f063a4",
//     // "#ec015a",
//     // "#70327e",
//     // "#a42963",
//     // "#f89e4f",
//     // "#2dc5f4",
//     // "#000000",
//     // "#0000ff",
//     // "#ffff00",
//     // "#008000",
//     // "#9253a1",
//     // "#f063a4",
//     // "#ec015a",
//     // "#70327e",
//     // "#a42963",
//     // "#f89e4f",
//     // "#2dc5f4",
//     // "#000000",
//     // "#0000ff",
//     // "#ffff00",
//     // "#008000",
//     // "#9253a1",
//     // "#f063a4",
//     // "#ec015a",
//     // "#70327e",
//     // "#a42963",
//     // "#f89e4f",
//     // "#2dc5f4",
//     // "#000000",
//     // "#0000ff",
//     // "#ffff00",
//     // "#008000",
//     // "#9253a1",
//     // "#f063a4",
//     // "#ec015a",
//     // "#70327e",
//     // "#a42963",
//     // "#f89e4f",
//     // "#2dc5f4",
//     // "#000000",
//     // "#0000ff",
//     // "#ffff00",
//     // "#008000",
//     // "#9253a1",
//     // "#f063a4",
//     // "#ec015a",
//     // "#70327e",
//     // "#a42963",
//     // "#f89e4f",
//     // "#2dc5f4",
//     // "#000000",
//     // "#0000ff",
//     // "#ffff00",
//     // "#008000",
//     // "#9253a1",
//     // "#f063a4",
//     // "#ec015a",
//     // "#70327e",
//     // "#a42963",
//     // "#f89e4f",
//     // "#2dc5f4",
//   ];
//   const [background, setBackground] = useState("#071415");
//   const [current, setCurrent] = useState(null);
//   return (
//     <div className="App">
//       <div className="">
//         {current !== null && <h1>Copied{current}</h1>}
//         <div className="container">
//           {colors.map((color, index) => (
//             <div key={index} className="card">
//               <div
//                 style={{
//                   background: color.colorsd,
//                   filter: "brightness(85%)",
//                   boxShadow: color.colorsd === background ? "0 0 5px #000" : "",
//                 }}
//                 className="box"
//                 onClick={() => setBackground(color.colorsd)}
//               />
//               <CopyToClipboard text={`color:${color.colorsd};`}>
//                 <p>{color.name}</p>
//               </CopyToClipboard>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
