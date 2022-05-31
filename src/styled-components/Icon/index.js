import styled from "styled-components"

export const Svg = styled.svg`
    width: 24px;
    height: 24px;
    ${({isLeft, isRight}) => {
        switch (true) {
            case isLeft: {
                return {
                    marginRight: 12,
                }
            }
            case isRight: {
                return {
                    marginLeft: 12,
                }
            }
            default: {
                return {
                    transform: 'rotate(0deg)'
                }
            }
        }
    }}
`;

export const Image = styled.image`
    width: 24px;
    height: 24px;
`;

