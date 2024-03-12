import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input/Input";
import * as S from "./Login.styles";
import { Button } from "../../components/Button/Button";
import { userDummy } from "../../dummy/User";

export function Login() {
    // 로그인 폼
    const [inputForm, setInputForm] = useState({ id: "", password: "" });
    //유효성 메세지
    const [validMessage, setValidMessage] = useState({
        idMessage: "",
        passwordMessage: "",
    });
    //유효성 검사
    const [isValid, setIsValid] = useState({
        id: false,
        password: false,
    });

    //ref
    const inputIdRef = useRef<HTMLInputElement>(null);
    const inputPwRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        // 초기 포커스 설정
        if (inputIdRef.current) {
            inputIdRef.current.focus();
        }
    }, []);
    //이메일 조건
    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    //핸드폰번호 조건
    const validatePhoneNumber = (phoneNumber: string) => {
        const regex = /^01([016789])(?:\d{3}|\d{4})\d{4}$/;
        return regex.test(phoneNumber);
    };
    //비밀번호 유효성검사
    const validatePassword = (password: string) => {
        const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,15}$/;

        if (!regex.test(password)) {
            setValidMessage((prev) => ({
                ...prev,
                passwordMessage: "* Password format is not correct.",
            }));
            setIsValid({ ...isValid, password: false });
        } else {
            setValidMessage((prev) => ({
                ...prev,
                passwordMessage: "",
            }));
            setIsValid({ ...isValid, password: true });
        }
    };
    // 이메일, 비밀번호 유효성 검사
    const handleForm = (name: string, value: string) => {
        setInputForm({
            ...inputForm,
            [name]: value,
        });
        // 아이디 유효성 검사
        if (name === "id") {
            const isEmailValid = validateEmail(value);
            const isPhoneValid = validatePhoneNumber(value);

            if (!isEmailValid && !isPhoneValid) {
                setValidMessage((prev) => ({
                    ...prev,
                    idMessage: "* ID format is not correct.",
                }));
                setIsValid({ ...isValid, id: false });
            } else {
                setValidMessage((prev) => ({
                    ...prev,
                    idMessage: "",
                }));
                setIsValid({ ...isValid, id: true });
            }
        } else if (name === "password") {
            validatePassword(value);
        }
    };
    // 유효성 검사 결과를 저장한 객체를 반환
    const validatedInput = useMemo(() => {
        return {
            idIsValid:
                validateEmail(inputForm.id) ||
                validatePhoneNumber(inputForm.id),
            passwordIsValid: validatePassword(inputForm.password),
        };
    }, [inputForm.id, inputForm.password]);
    const handleLogin = () => {
        if (validatedInput) {
            const foundUser = userDummy.find(
                (user) =>
                    user.id === inputForm.id &&
                    user.password === inputForm.password
            );

            if (foundUser) {
                alert("Login successful!");
                navigate(`/chat`);
            } else {
                alert("ID or password is invalid.");
            }
        }
    };

    return (
        <S.Container>
            <S.TitleWrap>
                <h2>Welcome to KaKaoTalk</h2>
                <p>
                    if you have a KaKao Account, <br />
                    log in with your email or phone number
                </p>
            </S.TitleWrap>
            <S.InputWrap>
                <Input
                    type="text"
                    placeholder="Email or phone number"
                    value={inputForm.id}
                    onChange={(value) => handleForm("id", value)}
                    ref={inputIdRef}
                />
                {isValid.id === false && (
                    <S.ValidStyle>{validMessage.idMessage}</S.ValidStyle>
                )}
                <Input
                    type="password"
                    placeholder="Password"
                    value={inputForm.password}
                    onChange={(value) => handleForm("password", value)}
                    ref={inputPwRef}
                />

                {isValid.password === false && (
                    <S.ValidStyle>{validMessage.passwordMessage}</S.ValidStyle>
                )}
            </S.InputWrap>

            <S.ButtonWrap>
                <Button onClick={handleLogin}>Log in</Button>
                <Button onClick={() => {}}>Sign up</Button>
                <Button onClick={() => {}}>
                    Find KaKao Account or Password
                </Button>
            </S.ButtonWrap>
        </S.Container>
    );
}
