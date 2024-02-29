import { SetStateAction, useState } from "react";

interface UseHandleInputChangeProps {
  value: string | number;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const useHandleInputChange = (
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>
) => {
  const handleInputChange = (e: any) => {
    console.log(typeof e.currentTarget.value);
    setValue(e.currentTarget.value);
  };
  return { value, handleInputChange };
};
export default useHandleInputChange;
