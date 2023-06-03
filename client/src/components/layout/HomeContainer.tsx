import { FC } from "react";
import background from "../../../public/assets/home_bg.png"

type LayoutProps = {
  children:React.ReactNode;
}

export const HomeContainer:FC<LayoutProps> = ({ children }) => {
  
  return (
    <div
      className="w-screen h-screenr"
      style={{ backgroundImage: `url(${background})` }}
    >
      {children}
    </div>
  );
};