
interface TabType {
  title: string;
}

const tab: React.FC<TabType> = ({ title }) => {
  return (
    <div className="cursor-pointer group">
      <p className="px-5 text-lg hover:font-bold pt-10 text-primary text-white-dark	">{title}</p>
     <span className="block w-0 h-1	bg-yellow-500 mt-1 transition-all	group-hover:w-full"></span>
    </div>
  );
};

export default tab;
