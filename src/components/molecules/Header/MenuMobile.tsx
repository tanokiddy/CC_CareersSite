import { Bars, Close } from "@/components/atoms/icons";

const MenuMobile = ({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className="pr-4"
      onClick={() => {
        setOpen(!isOpen);
      }}
    >
      {isOpen ? <Close /> : <Bars />}
    </div>
  );
};

export default MenuMobile;
