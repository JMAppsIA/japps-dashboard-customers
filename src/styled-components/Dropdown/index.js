import styled from "styled-components"

export const DropdownItem = styled.li`
  width: calc(60px * 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DropdownLink = styled.a`
    width: var(calc(60px * 0.5));
    height: var(calc(60px * 0.5));
    background-color: #484a4d;
    border-radius: 50%;
    padding: 5px;
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;
`;