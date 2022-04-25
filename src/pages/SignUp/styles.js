import styled, { css } from "styled-components";
import {
  Form as ReactstrapForm,
  FormText as ReactstrapFormText,
} from "reactstrap";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  justify-content: center;
  margin: 3em 0 10em 0;
  ${(props) =>
    props.edit &&
    css`
      margin: 0;
      min-height: 0px;
    `}
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 40px 10px 10px 0;
  -webkit-box-shadow: 4px 6px 8px 2px rgba(0, 0, 0, 0.27);
  box-shadow: 4px 6px 8px 2px rgba(0, 0, 0, 0.27);
  ${(props) =>
    props.edit &&
    css`
      padding: 0;
      min-height: 0;
      -webkit-box-shadow: none;
      box-shadow: none;
    `}
`;

export const Form = styled(ReactstrapForm)`
  min-width: 390px;
  padding: 25px 20px 20px 20px;
  ${(props) =>
    props.edit &&
    css`
      padding: 0 0 20px 0;
    `}
`;

export const ImageContainer = styled.div`
  max-width: 250px;
  padding: 20px 0 20px 0;
`;

export const Image = styled.img`
  width: 100%;
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5em;
  margin-bottom: 10px;
`;

export const Error = styled(ReactstrapFormText)`
  color: red !important;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const FormDivider = styled.hr`
  margin: 20px 0 20px 0;
`;
