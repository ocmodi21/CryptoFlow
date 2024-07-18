const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2">
        <div className="grid grid-rows-2 grid-cols-1 gap-4">
          <div className="bg-light-bgcolor-primary dark:bg-dark-bgcolor-primary rounded-md">
            01
          </div>
          <div className="bg-light-bgcolor-primary dark:bg-dark-bgcolor-primary rounded-md">
            02
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-rows-3 grid-cols-1 gap-4">
          <div className="bg-light-bgcolor-primary dark:bg-dark-bgcolor-primary rounded-md">
            03
          </div>
          <div className="bg-light-bgcolor-primary dark:bg-dark-bgcolor-primary rounded-md">
            04
          </div>
          <div className="bg-light-bgcolor-primary dark:bg-dark-bgcolor-primary rounded-md">
            05
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
