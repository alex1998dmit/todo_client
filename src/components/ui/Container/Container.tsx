import styled from "@emotion/styled"
import { theme } from "../../../theme";
import { ContainerProps } from './Container.d'

const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
    return (
        <ContainerStyled>
            {props.children}
        </ContainerStyled>
    )
    
}

const ContainerStyled = styled.div`
    width: 100%;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    display: block;
    padding-left: 24px;
    padding-right: 24px;
    ${theme.breakpoint.max.sm} {
        padding-left: 12px;
        padding-right: 12px;
    }
`;

export { Container };
