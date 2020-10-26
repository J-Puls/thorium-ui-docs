// Custom style definition. Can be functional or static

export const customStyles = (theme, colors) => ({
  body: {
    "font-family": "'Open Sans', 'Roboto', 'Montserrat', 'Arial', sans-serif",
    "font-size": "16px",
    overflow: "hidden"
  },
  colorSwatch: {
    borderRadius: ".5em",
    boxShadow: "inset 0px 0px 4px 1px gray",
    boxSizing: "border-box",
    marginBottom: ".5em",
    marginLeft: ".5rem",
    marginRight: ".5rem",
    paddingBottom: ".5em",
    paddingTop: ".5em"
  },
  diagram: {
    a: {
      border: `2px solid ${theme.colors.secondary}`,
      fontWeight: 700,
      marginTop: "1rem"
    },
    b: {
      border: `2px solid ${theme.colors.primary}`,
      marginBottom: ".5rem"
    },
    c: {
      border: `2px solid ${theme.colors.success}`,
      marginBottom: ".5rem"
    },
    d: {
      border: `2px solid ${theme.colors.danger}`,
      marginBottom: ".5rem"
    }
  },
  h1: {
    fontFamily: "'Nunito', sans-serif",
    fontSize: "3.3rem",
    fontWeight: 700,
    marginBottom: ".75rem"
  },
  h2: {
    fontSize: "1.75rem",
    fontWeight: 700,
    marginBottom: ".25rem"
  },
  h3: {
    fontSize: "1.3rem",
    fontWeight: 500,
    marginBottom: ".25rem"
  },
  mb10: {
    marginBottom: 10
  },
  metaNav: {
    borderLeft: `1px dashed gray`,
    height: "fit-content",
    marginTop: "1rem",
    paddingRight: 0
  },
  mtp5: {
    marginTop: ".5rem"
  },
  mx0: {
    marginLeft: 0,
    marginRight: 0
  },
  navSummary: {
    color: theme.colors.primary,
    cursor: "pointer",
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: 0,
    marginTop: "1rem",
    paddingLeft: "1rem"
  },
  p10: {
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10
  },
  pageBody: {
    height: "calc(100vh - 50px)",
    margin: 0,
    overflowY: "auto"
  },
  pageFooter: {
    marginTop: "2rem",
    paddingBottom: "3rem",
    textAlign: "center"
  },
  pageSection: {
    borderBottom: "1px solid gray",
    paddingBottom: "1rem"
  },
  pb2: {
    border: `2px solid ${theme.colors.secondary}`
  },
  px0: {
    paddingLeft: 0,
    paddingRight: 0
  },
  sideMenu: {
    height: "calc(100vh - 50px)",
    left: 0,
    marginLeft: 0,
    overflowY: "scroll",
    paddingBottom: "5rem",
    paddingLeft: 0,
    paddingRight: 0,
    position: "sticky",
    top: 0
  },
  subheading: {
    fontSize: "1.3rem",
    fontWeight: 100
  },
  topNav: {
    boxShadow: "0px 2px 3px #000000aa",
    color: colors.neutral.w4,
    height: "50px",
    marginLeft: 0,
    marginRight: 0,
    paddingBottom: ".5rem",
    paddingTop: ".5rem"
  }
});

export default customStyles;
