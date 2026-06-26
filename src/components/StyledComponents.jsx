import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 30px 20px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Title = styled.h1`
  color: #006233;
  text-align: center;
  margin-bottom: 30px;
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  display: block;
  color: #333;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const CardTitle = styled.h2`
  color: #d21034;
  margin-bottom: 8px;
`;

export const BackLink = styled.a`
  display: inline-block;
  margin-bottom: 20px;
  color: #006233;
  text-decoration: none;
  font-weight: bold;
`;

export const Button = styled.button`
  background-color: #006233;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 15px;

  &:hover {
    background-color: #004d28;
  }
`;

export const OptionButton = styled.button`
  display: block;
  width: 100%;
  padding: 14px 18px;
  margin-bottom: 10px;
  border: 2px solid #006233;
  border-radius: 8px;
  background-color: ${(props) =>
    props.status === "correct" ? "#006233" : props.status === "incorrect" ? "#d21034" : "white"};
  color: ${(props) => (props.status ? "white" : "#1a1a1a")};
  font-size: 16px;
  text-align: left;
  cursor: pointer;
`;