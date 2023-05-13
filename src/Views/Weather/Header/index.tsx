import { faGrip, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {

  return (
    <div className="flex justify-around items-center h-20">
      <FontAwesomeIcon icon={faSearch} size='lg' className='text-primary'/>
      <p className="text-lg font-bold text-primary">City/Country</p>
      <FontAwesomeIcon icon={faGrip} size='lg' className='text-primary'/>
    </div>
  );
};

export default Header;
