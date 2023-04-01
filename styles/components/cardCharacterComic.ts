import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  gap: "20px",

  borderRadius: "10px",
  cursor: "pointer",

  "@bp1": {
    overflowX: "hidden",
  },

  img: {
    borderRadius: "10px",
    background: "$white",
    padding: "10px",
    transition: "transform 0.5s",

    "&:hover": {
      transform: 'translate(5px, 12px)'
    },

    "@bp1": {
      width: "70vw",
      height: 200,
    },
  },

  h3: {
    color: "$main",
    fontSize: "2rem",
    transition: "transform 0.5s",

    "&:hover": {
      transform: 'translate(5px, 12px)'
    },
  },

  h4: {
    color: "$text",
    fontSize: "1.5rem",
    transition: "transform 0.5s",
    width: 500,
    textAlign: "center",
    "&:hover": {
      transform: 'translate(5px, 12px)'
    },
    "@bp1": {
      width: "70vw",
      fontSize: "1.2rem",
    },
  },
});

export const ButtonBack = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  border: "none",

  fontSize: "1rem",
  cursor: "pointer",

  padding: "1rem 3rem",
  borderRadius: "10px",
  background: "$main",

  fontFamily: 'Oswald',

  transition: "all 0.3s",

  "&:hover": {
    background: "$text",
    transform: 'translate(15px)',

  },

  "@bp1": {
    padding: "0.7rem 3rem",
  },
});

export const CarrouselContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  height: "400px",
  maxWidth: "800px",
  overflowX: "auto",
  overflowY: 'none',

  margin: "20px 0",
  padding: 10,

  gap: "15px",

  background: "$white",
  borderRadius: "10px",

  "@bp1": {
    flexDirection: "column",
    overflowX: "hidden",
    overflowY: "auto",

    borderRadius: 5,

  }
});
