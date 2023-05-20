import { faGrip, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useState } from "react";

const PARAMS = {
  appid: 'b173b46b28d94c1d706b29ea31117d49',
  limit:'4', 
  q:'arequipa',
  lang:'es'
}

const Header = () => {
  const [isActiveSearch, setIsActiveSearch] = useState(false);
  const [valSearch, setValSearch] = useState('')

  const getWeatherCity = async () => {
    try {
      const res = await fetch("https://api.openweathermap.org/data/2.5/weather?" + new URLSearchParams(PARAMS))
      const jsonData = await res.json();
      console.log(jsonData);
      console.log(res)
    } catch {
    }
  }

  const handleClickSearch = () => {
    console.log("click");
    getWeatherCity()
  };



  const handleChangeSearch = (val: ChangeEvent<HTMLInputElement>) => {
    setValSearch(val.target.value)
  }

  

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
          value={valSearch}
          onChange={handleChangeSearch}
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
