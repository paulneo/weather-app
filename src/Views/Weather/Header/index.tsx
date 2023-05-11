import { faGrip, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {

  return (
    <div className="flex justify-around items-center">
      <FontAwesomeIcon icon={faSearch} size='lg'/>
      <p className="text-lg font-bold">City/Country</p>
      <FontAwesomeIcon icon={faGrip} size='lg'/>
    </div>
  );
};

export default Header;
