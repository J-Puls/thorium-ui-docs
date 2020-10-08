// Custom style definition. Can be functional or static

export const customStyles = (theme, colors) => {
  return {
    body: {
      overflow: "hidden",
      "font-size": "16px",
      "font-family": "'Open Sans', 'Roboto', 'Monsterrat', 'Arial', sans-sarif",
    },
    topNav: {
      marginLeft: 0,
      marginRight: 0,
      color: colors.neutral.w4,
      boxShadow: "0px 2px 3px #000000aa",
      paddingTop: ".5rem",
      paddingBottom: ".5rem",
      height: "75px",
      maxHeight: "50px",
    },
    h1: {
      fontSize: "3.3rem",
      fontFamily: "'Nunito', sans-serif",
      fontWeight: 700,
      marginBottom: ".75rem",
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 700,
      marginBottom: ".25rem",
    },
    h3: {
      fontSize: "1.3rem",
      fontWeight: 500,
      marginBottom: ".25rem",
    },

    mb10: {
      marginBottom: 10,
    },
    mx0: {
      marginLeft: 0,
      marginRight: 0,
    },
    navh3: {
      color: theme.colors.primary,
      marginBottom: 0,
      marginTop: "1rem",
      paddingLeft: "1rem",
    },
    pageBody: {
      overflowY: "auto",
      height: "95vh",
      margin: 0,
    },
    pb2: {
      border: `2px solid ${theme.colors.secondary}`,
    },
    px0: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    p10: {
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
    },
    sideMenu: {
      height: "100vh",
      left: 0,
      marginLeft: 0,
      overflowY: "auto",
      paddingBottom: "5rem",
      paddingTop: "2rem",
      paddingLeft: 0,
      paddingRight: 0,
      position: "fixed",
    },
    subheading: {
      fontSize: "1.3rem",
      fontWeight: 100,
    },
    mtp5: {
      marginTop: ".5rem",
    },
    diagram: {
      a: {
        border: `2px solid ${theme.colors.secondary}`,
        fontWeight: 700,
        marginTop: "1rem",
      },
      b: {
        border: `2px solid ${theme.colors.primary}`,
        marginBottom: ".5rem",
      },
      c: {
        border: `2px solid ${theme.colors.success}`,
        marginBottom: ".5rem",
      },
    },
  };
};
export default customStyles;
