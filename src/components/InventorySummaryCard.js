const InventorySummaryCard = ({ icon: Icon, title, value }) => {
    return (
      <div className='bg-green-950 flex items-start p-6 rounded-xl w-full mx-2 min-h-18'>
        {Icon && <Icon color='white' size={40}/>}
        <div className='flex flex-col text-white pl-4 justify-between'>
          <span className='text-xs'>{title}</span>
          <span className='text-5xl mt-4'>{value}</span>
        </div>
      </div>
    );
  };

  export default InventorySummaryCard;