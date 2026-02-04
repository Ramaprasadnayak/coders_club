import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import "./component_css/mytextfield.css";

export default function MyTextField(props) {
  const { icontag: IconTag, mycolor, iconclass, inputtype, hinttext, visibility, value, onChange } = props;
  const [mypass, setPass] = useState(inputtype);

  const toggle = () => {
    setPass((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <div className="input">
      {/* icon tag */}
      <IconTag color={mycolor} size={40} className={iconclass} />
      {/* input box */}
      <input type={mypass} placeholder={hinttext} value={value} onChange={(e) => onChange(e.target.value)} />
      {/* bool variable visibility to display eye button */}
      {visibility ? (
        mypass === "password" ? (<MdVisibilityOff color="#797979" size={40} className="icon eye" onClick={toggle}/>) :
          (<MdVisibility color="#797979" size={40} className="icon eye" onClick={toggle}/>)
      ) : null}
    </div>
  );
}
