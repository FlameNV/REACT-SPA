import styled from "styled-components";
import {Form, Field } from "formik";

export const StyledCartForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledForm = styled(Form)`
  margin: 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40%;
  font-size: 16px;
  > button{
    width: 50%;
    background-color: #fff;
    height: 35px;
    font-size: 15px;
    font-weight:500;
    border: 1px solid black;
  }
`;

export const StyledFieldPlace= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  width: 40%;
  height: 70px;
`;

export const StyledField = styled(Field)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
