import { styled } from "..";

export const Container = styled("div", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  
    gap: "15px",
    marginBottom: "30px",
});

export const Button = styled("button", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  
    cursor: "pointer",
    background: "$buttons",
    border: "none",
  
    transition: "background 0.3s",
  
    height: 40,
    width: 40,
    borderRadius: 20,
  
    "&:hover": {
      background: "$text",
    },
    variants: {
      focus: {
          true: {
              background: "$text"
          }
      }
    }
  });
  
  Button.defaultProps = {
      focus: false,
  };