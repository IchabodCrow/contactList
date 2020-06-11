import styled from "styled-components";

export const Input = styled.input`
  width: 155px;
  height: 30px;
  background: #fff;
  border: 1px solid;
  margin: 10px 5px;
  color: #5f5d5d;
`;

export const Button = styled.button`
  width: 120px;
  height: 30px;
  background: #34547a;
  border: none;
  border-radius: 5px;
  padding: 3px;
  margin: 10px;
  cursor: pointer;

  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  text-align: center;
  letter-spacing: 0.15em;
  transition: ease 0.4s;

  color: #ffffff;

  &:hover {
    background: #ffffff;
    color: #34547a;
  }
`;

export const ContactCard = styled.div`
  width: 340px;
  height: 300px;
  background: #eeeff1;
  margin: 15px;
  padding: 15px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;
export const CardInputsForm = styled.form`
  margin-left: 140px;
  margin-top: -250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-wrap: nowrap;
  align-content: stretch;
`;
export const ContactCardText = styled.div`
  margin-left: 63px;
  display: inline-block;
`;
export const ContactCardRow = styled.div`
  margin: 13px;
  width: 85px;
  display: inline-block;
`;

export const SearchHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  border-bottom-left-radius: 15px;
  width: 100%;
  height: 55px;
  background: #eee;
`;
export const NewContactCard = styled.div`
  padding: 10px;
  border-radius: 5px;

  background: #eeeff1;
  margin: 15px;
`;

export const LoginFormBox = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px auto;
  justify-content: space-around;
  padding: 10px;
  width: 350px;
  border-radius: 5px;

  background: #eeeff1;
`;
export const LegendForm = styled.legend`
  font-family: "Roboto";
  font-size: 18px;
  align-self: flex-start;
`;

export const MessageNotFound = styled.div`
  margin: 10px;
  font-size: 18px;
  transition: 1s;
`;
