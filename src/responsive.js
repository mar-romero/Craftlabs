import { css } from "styled-components";


export const Responsive1900 = (props) => {
  return css`
    @media only screen and (max-width: 1900px) {
      ${props}
    }
  `;
};
export const Responsive1200 = (props) => {
  return css`
    @media only screen and (max-width: 1200px) {
      ${props}
    }
  `;
};
export const Responsive800 = (props) => {
  return css`
    @media only screen and (max-width: 800px) {
      ${props}
    }
  `;
};
export const Responsive450 = (props) => {
  return css`
    @media only screen and (max-width: 450px) {
      ${props}
    }
  `;
};


