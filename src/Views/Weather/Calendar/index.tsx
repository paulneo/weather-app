
import Tab from './tab'
import Snow from '../../../assets/IconsLight/snow.png'
import Widget from './widget';
const Calendar = () => {
  return (
    <div>
      <div className="flex justify-around">
        <Tab title='Hoy'/>
        <Tab title='Mañana'/>
        <Tab title='Semana'/>
      </div>
      <div className='flex justify-around'>
        <Widget Img={Snow} degree='11°C' text='now'/>
        <Widget Img={Snow} degree='11°C' text='now'/>
        <Widget Img={Snow} degree='11°C' text='now'/>
        <Widget Img={Snow} degree='11°C' text='now'/>
        <Widget Img={Snow} degree='11°C' text='now'/>

      </div>
    </div>
  );
};

export default Calendar;