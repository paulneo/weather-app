import Degree from "./Degree";
import Header from "./Header";
import Calendar from './Calendar'

const Weather = () => {
  return (
    <div className="
      flex 
      justify-between 
      flex-col 
      h-screen
     bg-primary3
      bg-[radial-gradient(circle,_var(--tw-gradient-stops))]  from-primary2 to-white">
      <Header />
      <Degree />
      <Calendar />
    </div>
  );
};

export default Weather
