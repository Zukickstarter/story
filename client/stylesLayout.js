import styled from 'styled-components';

export const Grid = styled.div`
  max-width: 1365px;
  border: solid 1px red;
`;

export const Row = styled.div`
  border: solid 1px yellow;
  display: flex;
`;

// this xs function returns a media query passed with some styles based on the screen sizes we want to accommodate
// TODO: set max-width of grid to 1365px
const media = {
  laptop: (styled) => `
    @media only screen and (max-width: 1024px) {
      ${styled}
    }
  `,
  tablet: (styled) => `
    @media only screen and (max-width: 768px) {
      ${styled}
    }
  `,
  mobileLarge: (styled) => `
    @media only screen and (max-width: 425px) {
      ${styled}
    }
  `,
  mobileMedium: (styled) => `
    @media only screen and (max-width: 375px) {
      ${styled}
    }
  `,
  mobileSmall: (styled) => `
    @media only screen and (max-width: 320px) {
      ${styled}
    }
  `,
};

// two props being passed here:
// props.size adjusts column size
// if props.collapse has a value that matches our defined media query size, our column will collapse
export const Col = styled.div`
  border: solid 1px green;
  flex: ${(props) => props.size};
  ${(props) => props.collapse && media[props.collapse](`
    display: none;
  `)};
`;