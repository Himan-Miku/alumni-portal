const Authlayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="flex justify-center items-center min-h-[90vh] h-full flex-col w-full">
        {children}
      </div>
    );
  };
  export default Authlayout;