import React, { useEffect, useRef, useState } from "react";

const List = ({ items, text, setTitle, returnValue, check, checkId }) => {
  const [name, setName] = useState("");
  const [active, setActive] = useState(false);

  const clickRef = useRef(null);

  useEffect(() => {
    setName(items[0][`${text}`]);
    window.addEventListener("click", (e) => {
      if (!clickRef.current) return;
      if (!clickRef.current.contains(e.target)) {
        setActive(false);
      }
    });
    if (setTitle) {
      setTitle(items[0][`${returnValue}`]);
    }
  }, [items, setTitle]);

  return (
    <div ref={clickRef} className="open-list">
      <div
        onClick={() => {
          setActive(!active);
        }}
        className=""
      >
        {name}
      </div>
      <ul className={active ? "list list--active" : "list"}>
        {items.map(
          (item) =>
            check == item[`${checkId}`] && (
              <li
                onClick={() => {
                  setName(item[`${text}`]);
                  setActive(!active);
                  if (setTitle) {
                    setTitle(item[`${returnValue}`]);
                  }
                }}
                className="list-item"
                key={item.id}
              >
                {item[`${text}`]}
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default List;
