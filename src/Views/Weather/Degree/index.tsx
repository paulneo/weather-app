import SnowDark  from '../../../assets/IconsDark/snow.png'
import SnowLight from '../../../assets/IconsLight/snow.png'


const Degree = () => {
  return (
    <div className='flex-1 	bg-center bg-70 bg-no-repeat' style={{
    backgroundImage: `url(${SnowLight})`}}>
      <p className="text-base">dias</p>
      {/* <span>&#8451;</span> */}
      <p className="text-8xl font-bold text-primary">-11°C </p>
      <p className="text-sm">Snow</p>
    </div>
  );
};

export default Degree;