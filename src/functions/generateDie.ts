import { nanoid } from "nanoid";

const generateDie = () => {
  return {
    id: nanoid(),
    isHeld: false,
    value: Math.ceil(Math.random() * 6),
  };
};
export default generateDie;
