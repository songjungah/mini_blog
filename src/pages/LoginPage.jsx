import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";




export default function LoginPage() {

  const navigete = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  // 이메일 입력
  const handelEmailChange = (e) =>{
    setEmail(e.target.value);
    // console.log("email : ", e.target.value)

  }

  // 비밀번호 입력
  const handlePasswordChange = (e) =>{
    setPassword(e.target.value);
    // console.log("password : ", e.target.value)

  }



  return (
    <>
      <div className="login-container">
        <div className="title">회원 로그인</div>

        <div className="input-box">
          <div className="email-box">
            <p>이메일 주소</p>
            <input id={"email"} type="text" name="email" placeholder="email@gmail.com" value={email} onChange={handelEmailChange}/>
          </div>
          <div className="password-box">
            <p>비밀번호</p>
            <input id={"password"} type="password" name="password" placeholder="영문, 숫자, 특수문자 포함 8자 이상" value={password} onChange={handlePasswordChange}/>
          </div>
          <button className="login" type="button" >로그인</button>
          <button className="google-login" type="button" >구글 로그인</button>
          <div>
          <div className="signup-box">
            <span>계정이 없으신가요?</span>
              <Link to={"/signup"}>
                <span className="signup">회원가입</span>
              </Link>
          </div>
          </div>
        </div>

      </div>
    </>
  );
}
