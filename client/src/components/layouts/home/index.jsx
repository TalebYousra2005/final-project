import { Navbar } from "../../navbar/Navbar";

export const HomeLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      
    </>
  );
};
