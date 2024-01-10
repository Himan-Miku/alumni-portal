const Authlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center h-full flex-col">
      {children}
      </div>
    
  );
};
export default Authlayout;