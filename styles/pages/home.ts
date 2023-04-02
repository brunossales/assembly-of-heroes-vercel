import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  padding: "0 20px",
  margin: "25px 0"
});


export const ContainerLoading = styled("div", {
  minWidth: '100vw',
  minHeight: '100vh',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const CardsContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "15px",

  marginBottom: "20px",

  '@bp1': {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
  }
});

export const Footer = styled("footer", {
  textAlign: 'center',
  "h2": {
    color: "$main",
    textAlign: 'center',

  }
})

export const FontName = styled("h3", {
  color: "$text",
  cursor: "pointer"
})
