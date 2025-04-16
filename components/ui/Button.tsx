import { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button className="relative px-3 py-2 rounded-full font-medium text-sm text-white bg-gradient-to-b from-[#190D2E] to-[#4A208A] shadow-[0px_0px_12px_#8C45FF]">
      <div className="absolute inset-0 ">
        <div className="border rounded-lg border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="border rounded-lg absolute inset-0 border-white/40  [mask-image:linear-gradient(to_top,black,transparent)]"></div>
        <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
      </div>
      <span>{children}</span>
    </button>
  );
};

export default Button;
