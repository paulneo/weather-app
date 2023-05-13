
import Tab from './tab'
import SnowLight from '../../../assets/IconsLight/snow.png'
import Widget from './widget';
const Calendar = () => {
  return (
    <div className=' bg-white rounded-t-[4.5rem]'>
      <div className="flex justify-around mb-2">
        <Tab title='Hoy'/>
        <Tab title='Mañana'/>
        <Tab title='Semana'/>
      </div>
      <div className='flex justify-around mb-12 px-10'>
        <Widget img={SnowLight} degree='11°C' text='now'/>
        <Widget img={SnowLight} degree='11°C' text='now'/>
        <Widget img={SnowLight} degree='11°C' text='now'/>
        <Widget img={SnowLight} degree='11°C' text='now'/>

      </div>
    </div>
  );
};

export default Calendar;