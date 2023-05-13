/* eslint-disable @typescript-eslint/no-explicit-any */
interface WidgetType {
  img: string
  degree: string
  text: string
}

const Widget:React.FC<WidgetType> = ({img, degree, text}) => {
  return (
    <div className='flex bg-primary3 flex-col rounded-full	p-4 items-center justify-center gap-2' >
      <p className='text-sm'>{text}</p>
      <img src={img} alt="clima" className='h-10'/>
      <p className='text-base'>{degree}</p>
    </div>
  );
};

export default Widget;