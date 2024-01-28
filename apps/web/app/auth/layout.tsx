const Authlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center min-h-[90vh] h-full flex-col">
      {children}
    </div>
  );
};
export default Authlayout;
