import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export default function MyText(props) {
  const { icontag: IconTag, mycolor, iconclass, inputtype, hinttext, visibility,value,onChange} = props;
  const [mypass, setPass] = useState(inputtype); 
  const toggle = () => {
    setPass((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <div className="input">
      <IconTag color={mycolor} size={40} className={iconclass} />
      <input 
        type={mypass} 
        placeholder={hinttext}    
        value={value}
        onChange={(e) => onChange(e.target.value)}
    />

      {visibility ? (
        mypass === "password" ? (
          <MdVisibilityOff
            color="#797979"
            size={40}
            className="icon eye"
            onClick={toggle}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <MdVisibility
            color="#797979"
            size={40}
            className="icon eye"
            onClick={toggle}
            style={{ cursor: "pointer" }}
          />
        )
      ) : null}
    </div>
  );
}
