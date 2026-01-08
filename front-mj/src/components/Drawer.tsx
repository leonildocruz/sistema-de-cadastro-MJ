import { Plus, X } from "lucide-react";
import { PropsWithChildren } from "react";
import { Button } from "./ui/Button";

export const Drawer = ({
  isOpen,
  onClose,
  onOpen,
  label,
  icon,
  children,
  headerding,
}: {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  label?: string;
  icon?: React.ReactNode;
  headerding?: string;
} & PropsWithChildren) => {
  return (
    <>
      <Button onClick={onOpen}>
        {icon}
        {label}
      </Button>
      <div
        onClick={onClose}
        className={`${
          isOpen ? "w-full" : "w-0"
        } z-10 overflow-hidden transition-[width] h-full fixed bg-black/80 top-0 right-0`}
      ></div>
      <div
        className={`${
          isOpen ? "w-xl" : "w-0"
        } z-20 overflow-hidden transition-[width] h-full fixed bg-[#191938] top-0 right-0`}
      >
        <div className="flex justify-between flex-flex-nowrap overflow-hidden items-center p-2 border-b border-white/20">
          <span className="text-lg text-nowrap font-bold">{headerding}</span>
          <button>
            <X onClick={onClose} />
          </button>
        </div>
        {children}
      </div>
    </>
  );
};
