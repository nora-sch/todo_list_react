import React from "react";

function Item(props) {
  const { item } = props;
  const [isChecked, setIsChecked] = React.useState(false);
  const [bg, setBg] = React.useState("");

  const handleMouseOver = () => {
    setBg("red");
  };
  const handleMouseOut = () => {
    setBg("");
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <label
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ backgroundColor: bg }}
      >
        {item}
      </label>
    </div>
  );
}

export default Item;
