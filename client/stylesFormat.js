import styled, {createGlobalStyle, css, keyframes } from 'styled-components';
// import MaisonNeueBookWoffTwo from './assets/fonts/maisonNeueBook.woff2';
// import MaisonNeueBookWoff from './assets/fonts/maisonNeueBook.woff';
// import MaisonNeueBookTtf from './assets/fonts/maisonNeueBook.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Monsterrat';
    src:
      url("'https://fonts.googleapis.com/css?family=Montserrat|Roboto'")
    font-weight: 600;
    font-style: normal;
  }
  html, body {
    font-family: 'Montserrat', sans-serif;
  }
  /* body {
    background: #fff;
    color: red;
    font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
    line-height: 3rem;
    margin-bottom: 3rem;
    list-style: none;
  } */
  box-sizing: border-box;
`;

// export const FontFaces = css`
//   @font-face {
//     font-family: 'Maison Neue Book';
//     src: local('Maison Neue Book'), url(${fontURL}) format('tff'),
//     font-weight: 600;
//     font-style: normal;
//   },
// `;

export const StyledDesc = styled.div`
  background: #fff;
  color: #282828;
  font-family: 'Maison Neue Book', sans-serif;
`;

export const Ul = styled.ul`
list-style-type: none;
`;

export const NavButton = styled.button`
  cursor: pointer;
  font-size: 17px;
  text-decoration: underline;
  color: grey;
  background:none;
  border: none;
  outline:none;

  &:hover {
    color: #009E74;
  }
  &:focus {
    color: #009E74;
    font-weight: 700;
  }
`;

export const ButtonWithBottom = styled(NavButton)`
  border-bottom-width: 0.1rem;
  border-bottom-style: solid;
  border-bottom-color: rgb(220, 222, 221);
`;

export const NavHeader = styled.h3`
  display: block;
  font-size: 2.1rem;
  font-weight: 400;
  line-height: 30px;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

export const SectionHeader = styled.h1`
  color: #282828;
  line-height: 40px;
  font-weight: bold;
`;

export const Caption = styled.figcaption`
  font-size: 14px;
  font-style: italic;
  color: #9B9E9E;
  padding-right: 1.2rem !important;
  padding-left: 1.2rem !important;
`;
