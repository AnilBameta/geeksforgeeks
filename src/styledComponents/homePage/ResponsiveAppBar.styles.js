import styled from "styled-components";

export const Button1 = styled.button`
  padding: 20px;
  font-weight: 500;
  font-size: 18px;
  border: none;
  color: black;
  background-color: white;
  &:hover {
    color: green;
  }
`;

export const Container1 = styled.div`
  position: sticky;
  top: 80px;
  z-index: 1;
  overflow: auto;
  background-color: white;
  box-shadow: 0 8px 6px -6px #888888;
  display: flex;
  justify-content: space-between;

  ::-webkit-scrollbar {
    height: 1px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgb(219, 216, 216);
  }

  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`;
