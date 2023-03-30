import { styled } from "..";

export const Container = styled("div", {
  background: "$white",
  width: 300,
  height: 30,
  borderRadius: 5,
  border: "3px solid white",
  transition: "all 0.2s",
  

  margin: 20,
  padding: 5,
  variants: {
    focus: {
      true: {
        border: "3px solid purple",
      },
    },
  },
  "@bp1": {
    width: '80vw',
  },
});
Container.defaultProps = {
  focus: false,
};
export const InputText = styled("input", {
  outline: "none",
  border: "none",
  font: 'message-box',
  padding: "0 10px",
});
