import React, { useState } from "react";
import FiltersBar from "./FiltersBar";
import Popup from "./Popup";
import "antd/dist/antd.css";

import { Card } from "antd";
import { Popover, Button } from "antd";

import { Select } from "semantic-ui-react";

const Test = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClick = (e) => {
    console.log("click!");
  };
  const levelOptions = [
    { key: 1, value: 12, text: "100-299" },
    { key: 2, value: 8, text: "300-399" },
    { key: 3, value: 9, text: "400-499" },
    { key: 4, value: 10, text: "Graduate Level Courses" },
    { key: 5, value: 13, text: "Honors Level Courses" },
  ];

  // <select
  //   className="homeFilterDisplay fBtn2"
  //   name="level"
  //   onChange={handleChange}
  // >
  //   <option value="">Course Level</option>
  //   <option value={12}>100–299</option>
  //   <option value={8}>300–399</option>
  //   <option value={9}>400–499</option>
  //   <option value={10}>Graduate Level Courses</option>
  //   <option value={13}>Honors Level Courses</option>
  // </select>;

  const content = (
    <div>
      <Select
        className="select-space"
        placeholder="Course Level"
        options={levelOptions}
      />
      <Button>Clear</Button>
    </div>
  );

  return (
    <Card title={"Filters"} style={{ width: 300 }}>
      <Popover
        placement="bottomLeft"
        title={"Requirements"}
        content={content}
        trigger="click"
      >
        <Button onClick={handleClick}>Course Level</Button>
      </Popover>
      <br />
      <Popover
        placement="bottomLeft"
        title={"Requirements"}
        content={content}
        trigger="click"
      >
        <Button>Requirements</Button>
      </Popover>
      <br />
      <Popover
        placement="bottomLeft"
        title={"Requirements"}
        content={content}
        trigger="click"
      >
        <Button>Credit Hours</Button>
      </Popover>
      <br />
      <Popover
        placement="bottomLeft"
        title={"Requirements"}
        content={content}
        trigger="click"
      >
        <Button>Other Filter</Button>
      </Popover>
      <br />
      <Popover
        placement="bottomLeft"
        title={"Requirements"}
        content={content}
        trigger="click"
      >
        <Button>Last Filter</Button>
      </Popover>
    </Card>
  );
};

// return (
//   <div>
//     <div>
//       <FiltersBar showMenu={showMenu} handleShowMenu={handleShowMenu} />
//       {showMenu ? (
//         <div>
//           <Popup />
//         </div>
//       ) : null}
//     </div>
//     <div>
//       <h2>I'm a header!</h2>
//     </div>
//   </div>
// );

export default Test;
