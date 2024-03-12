import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 20px;
    box-sizing: border-box;
    height: 100vh;
`;

export const HeaderWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & h2 {
        font-weight: bold;
    }
    padding: 0 20px;
`;

export const HeaderIcon = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    & svg {
        font-size: 30px;
    }
`;

export const ContentWrap = styled.ul`
    height: 100%;
`;
export const Content = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    margin-top: 20px;
`;

export const KakaoIcon = styled.div`
    font-size: 70px;
    height: 70px;
    color: #491822;
    background-color: #ffe100;
    border-radius: 35px;
    padding: 10px;
`;

export const ContentText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-top: 10px;
    & h3 {
        font-size: 20px;
    }
`;
export const TimeWrap = styled.div`
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: end;
`;
export const NumberIcon = styled.div`
    background-color: red;
    border-radius: 50px;
    font-size: 14px;
    display: block;
    width: 25px;
    height: 25px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;
export const FooterWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f2f2f2;
    font-size: 40px;
    padding: 0 30px;
    box-sizing: border-box;
    height: 100px;
`;

export const FooterChat = styled.div`
    position: relative;
`;

export const SmallNumberIcon = styled(NumberIcon)`
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(40%, -65%);
`;
export const CircleWrap = styled.div`
    display: flex;
    gap: 4px;
`;
export const Circle = styled.div`
    background-color: inherit;
    border: 2px solid #000;
    border-radius: 50px;
    width: 5px;
    height: 5px;
`;
