import styled from 'styled-components/native';

export const StyledContainer = styled.View`
    margin: 20px 25px;
    border: 2px solid #eee;
`;

export const StyledHeader = styled.View`
    height: 40px;

    color: ${({ theme }) => theme.colors.emphasis};
    font-size: 12px;
    border-bottom-width: 1px;
    border-color: #eee;

    flex-direction: row;
    align-items: center;
`;

export const StyledText = styled.Text`
    width: 150px;

    color: ${({ theme }) => theme.colors.emphasis_secondary};
    font-size: 16px;
    border-right-width: 2px;
    border-color: #eee;
    text-align: center;
    font-weight: bold;

    padding: 9px 0;
`;

export const StyledName = styled.Text`
    color: ${({ theme }) => theme.colors.emphasis};
    font-size: 12px;
    text-align: center;
    font-weight: bold;

    flex-grow: 1;
`;

export const StyledImage = styled.Image`
    width: 220px;
    height: 150px;
    margin: 0 auto;
`;

export const StyledInnerContainer = styled.View`
    background-color: #333333;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.text_color};
`;

export const StyledDescriptionContainer = styled.View`
    margin: 30px 20px;
`;

export const StyledPrice = styled.Text`
    color: ${({ theme }) => theme.colors.emphasis_secondary};
    font-weight: bold;
`;

export const StyledEmphasis = styled.Text`
    width: 100px;
    margin-top: -10px;
    margin-left: 20px;
    background-color: ${({ theme }) => theme.colors.emphasis};
    text-align: center;
`;