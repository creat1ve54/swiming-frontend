import React, { useState } from "react";
import {
  useFloating,
  useClick,
  useInteractions,
  flip,
  autoUpdate,
  offset,
  FloatingPortal,
  FloatingFocusManager,
  useDismiss,
} from "@floating-ui/react";
import Svg from "../../assets/svg/Svg";

//

const DropDown = ({
  title,
  saveItem,
  items,
  text,
  returnValue,
  isSearch,
  isArrayName,
  customList,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    placement: "bottom-start",
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [offset(0), flip({ padding: 10 })],
  });

  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items?.filter((item) => {
    if (!isArrayName) {
      return item[`${text}`].toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      return item[`${text[0]}`]
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    }
  });

  const dismiss = useDismiss(context);

  const click = useClick(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ]);

  return (
    <>
      {isSearch ? (
        <div className="dropdown">
          <div
            className="dropdown__title"
            ref={refs.setReference}
            {...getReferenceProps()}
          >
            {title.name}
          </div>
          {isOpen && (
            <FloatingPortal>
              <FloatingFocusManager context={context} modal={false}>
                <div
                  ref={refs.setFloating}
                  style={{
                    ...floatingStyles,
                    // overflowY: "auto",
                    // background: "#eee",
                    // minWidth: 100,
                    // borderRadius: 8,
                    // outline: 0,
                  }}
                  {...getFloatingProps()}
                >
                  <div className="dropdown__list">
                    <input
                      className="dropdown__search"
                      type="text"
                      placeholder="Поиск..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    <ul className="dropdown__list-container">
                      {filteredItems.length == 0 ? (
                        <li style={{ cursor: "default" }}>Пусто</li>
                      ) : (
                        filteredItems?.map((item) => (
                          <li
                            key={item.id}
                            onClick={(e) => {
                              if (saveItem) {
                                saveItem(item);
                              }
                              setIsOpen(false);
                            }}
                          >
                            {item[`${text}`]}
                          </li>
                        ))
                      )}
                    </ul>
                  </div>
                </div>
              </FloatingFocusManager>
            </FloatingPortal>
          )}
        </div>
      ) : isArrayName ? (
        <div className="dropdown">
          <div
            className="dropdown__title"
            ref={refs.setReference}
            {...getReferenceProps()}
          >
            {title.name}
          </div>
          {isOpen && (
            <FloatingPortal>
              <FloatingFocusManager context={context} modal={false}>
                <ul
                  ref={refs.setFloating}
                  style={{
                    ...floatingStyles,
                    overflowY: "auto",
                    background: "#eee",
                    minWidth: 100,
                    borderRadius: 8,
                    outline: 0,
                  }}
                  {...getFloatingProps()}
                  className="dropdown__list"
                >
                  {items?.map((item) => (
                    <li
                      className="dropdown__item-info"
                      key={item.id}
                      onClick={(e) => {
                        if (saveItem) {
                          saveItem(item);
                        }
                        // save(
                        //   // item.id
                        //   //   { id: item.id
                        //   //   // , name: item[`${text}`]
                        //   // }
                        // );
                        setIsOpen(false);
                      }}
                    >
                      {text.map((textItem, idx) => (
                        <span key={idx}>{item[`${textItem}`]}</span>
                      ))}
                    </li>
                  ))}
                </ul>
              </FloatingFocusManager>
            </FloatingPortal>
          )}
        </div>
      ) : customList ? (
        <div className="dropdown">
          <div
            className="dropdown__title"
            ref={refs.setReference}
            {...getReferenceProps()}
          >
            {title}
          </div>
          {isOpen && (
            <FloatingPortal>
              <FloatingFocusManager context={context} modal={false}>
                <div
                  ref={refs.setFloating}
                  style={{
                    ...floatingStyles,
                  }}
                  {...getFloatingProps()}
                  className="dropdown__list"
                >
                  <ul className="dropdown__list-container">{typeof children === "function" ? children({ setIsOpen }) : children}</ul>
                </div>
              </FloatingFocusManager>
            </FloatingPortal>
          )}
        </div>
      ) : (
        <div className="dropdown">
          <div
            className="dropdown__title"
            ref={refs.setReference}
            {...getReferenceProps()}
          >
            {title.name}
            <Svg width={24} height={24} name={"arrowDown"} />
          </div>
          {isOpen && (
            <FloatingPortal>
              <FloatingFocusManager context={context} modal={false}>
                <div
                  ref={refs.setFloating}
                  style={{
                    ...floatingStyles,
                    // overflowY: "auto",
                    // background: "#eee",
                    // minWidth: 100,
                    // borderRadius: 8,
                    // outline: 0,
                  }}
                  {...getFloatingProps()}
                  className="dropdown__list"
                >
                  <ul className="dropdown__list-container">
                    {items?.map((item) => (
                      <li
                        key={item.id}
                        onClick={(e) => {
                          if (saveItem) {
                            saveItem(item);
                          }
                          // save(
                          //   // item.id
                          //   //   { id: item.id
                          //   //   // , name: item[`${text}`]
                          //   // }
                          // );
                          setIsOpen(false);
                        }}
                      >
                        {item[`${text}`]}
                      </li>
                    ))}
                  </ul>
                </div>
              </FloatingFocusManager>
            </FloatingPortal>
          )}
        </div>
      )}
    </>
  );
};

export default DropDown;
