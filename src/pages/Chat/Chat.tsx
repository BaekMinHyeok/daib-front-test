import { useEffect, useState } from "react";
import * as S from "./Chat.styles";
import { IoIosSearch } from "react-icons/io";
import { TbMessageCirclePlus } from "react-icons/tb";
import { VscMusic } from "react-icons/vsc";
import { RiSettings3Line } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import { BiSolidMessageRounded } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { RiKakaoTalkFill } from "react-icons/ri";
import { chatDummy, ChatDummy } from "../../dummy/Chat";

export function Chat() {
    const [messages, setMessages] = useState<ChatDummy[]>([]);

    useEffect(() => {
        setMessages(() => [...chatDummy]);
    }, []);
    return (
        <S.Container>
            <S.HeaderWrap>
                <h2>Chats</h2>
                <S.HeaderIcon>
                    <IoIosSearch />
                    <TbMessageCirclePlus />
                    <VscMusic />
                    <RiSettings3Line />
                </S.HeaderIcon>
            </S.HeaderWrap>
            {messages.map((message) => (
                <S.ContentWrap key={message.id}>
                    <S.Content>
                        <S.KakaoIcon>
                            <RiKakaoTalkFill />
                        </S.KakaoIcon>

                        <S.ContentText>
                            <h3>{message.title}</h3>
                            <p>{message.text}</p>
                        </S.ContentText>
                        <S.TimeWrap>
                            <p>{message.time}</p>
                            <S.NumberIcon>{message.alarm}</S.NumberIcon>
                        </S.TimeWrap>
                    </S.Content>
                </S.ContentWrap>
            ))}

            <S.FooterWrap>
                <GoPerson />
                <S.FooterChat>
                    <BiSolidMessageRounded />
                    <S.SmallNumberIcon>1</S.SmallNumberIcon>
                </S.FooterChat>
                <IoSearchOutline />
                <S.CircleWrap>
                    <S.Circle></S.Circle>
                    <S.Circle></S.Circle>
                    <S.Circle></S.Circle>
                </S.CircleWrap>
            </S.FooterWrap>
        </S.Container>
    );
}
