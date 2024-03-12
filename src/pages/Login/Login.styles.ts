import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    height: 100%;
    gap: 30px;
`;

export const TitleWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;
`;

export const InputWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ButtonWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    & button:nth-child(3) {
        background-color: #fff;
        height: 40px;
        cursor: pointer;
    }
`;

export const ValidStyle = styled.p`
    font-size: 12px;
    color: red;
    text-align: left;
    margin: 10px 0 20px 0;
`;
