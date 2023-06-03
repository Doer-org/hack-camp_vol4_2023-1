import { FC } from "react";
import "../../styles/App.css"

type LayoutProps = {
  children:React.ReactNode;
}

export const HomeContainer:FC<LayoutProps> = ({ children }) => {
  
  return (
    <div
    id="home_bg"
      className="w-screen h-screen justify-center flex text-center bg-no-repeat bg-cover"
    >
      {children}
    </div>
  );
};