import { faGrip, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Header = () => {
  const [isActiveSearch, setIsActiveSearch] = useState(false);

  const handleClickSearch = () => {
    console.log("click");
  };

  return (
    <div className="flex justify-between items-center h-20 mx-10">
      <div className={`relative ${isActiveSearch && "w-full"}`}>
        <FontAwesomeIcon
          onClick={
            isActiveSearch ? handleClickSearch : () => setIsActiveSearch(true)
          }
          icon={faSearch}
          size="1x"
          className="
            text-primary
            hover:font-semibold
            cursor-pointer 
            absolute 
            left-3
            top-0
            bottom-0
            my-auto
          "
        />
        <input
          type="text"
          className={` ${
            isActiveSearch ? "w-full px-4 pr-10 py-3 pl-10" : "w-0 py-4"
          } transition-all float-left  text-primary rounded-full focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary`}
        />
        <FontAwesomeIcon
          onClick={() => setIsActiveSearch(false)}
          icon={faXmark}
          size="lg"
          className={`
            text-primary
            hover:font-semibold
            cursor-pointer 
            absolute 
            right-3
            top-0
            bottom-0
            my-auto
            ${!isActiveSearch && "w-0"}
          `}
        />
      </div>
      {!isActiveSearch && (
        <>
          <p className="text-lg font-bold text-primary">City/Country</p>
          <FontAwesomeIcon icon={faGrip} size="lg" className="text-primary" />
        </>
      )}
    </div>
  );
};

export default Header;
