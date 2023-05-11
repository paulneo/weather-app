/* eslint-disable @typescript-eslint/no-explicit-any */
interface WidgetType {
  Img: string
  degree: string
  text: string
}

const Widget:React.FC<WidgetType> = ({Img, degree, text}) => {
  return (
    <div className='flex bg-blue-100 flex-col rounded-full	p-4 items-center justify-center gap-2' >
      <p className='text-sm'>{text}</p>
      <img src={Img} alt="clima" className='h-10'/>
      <p className='text-base'>{degree}</p>
    </div>
  );
};

export default Widget;