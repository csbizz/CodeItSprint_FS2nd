import * as verification from './verification.mjs';

const loginBtn = document.querySelector('#login-field').lastElementChild;
const inputId = document.querySelector('.js-input__id');
const inputPw = document.querySelector('.js-input__pw');

let idChk = false;
let pwChk = false;

inputId.addEventListener("focusout", e => {
    const errorMsg = e.target.parentElement.querySelector('.js-error-msg');

    if(!verification.verifyId(e.target.value)) {
        idChk = false;
        e.target.classList.add('error');

        errorMsg.textContent = e.target.textLength === 0 ? '이메일을 입력해주세요.' : '잘못된 이메일 형식입니다'
    } else {
        idChk = true;
        e.target.classList.remove('error');

        errorMsg.textContent = "";
    }

    loginBtn.disabled = !(idChk && pwChk);
});

inputPw.addEventListener("focusout", e => {
    const errorMsg = e.target.parentElement.parentElement.querySelector('.js-error-msg');

    if(e.target.textLength === 0) {
        pwChk = false;
        e.target.classList.add('error');

        errorMsg.textContent = "비밀번호를 입력해주세요.";
    } else if(e.target.textLength < 8) {
        pwChk = false;
        e.target.classList.add('error');

        errorMsg.textContent = "비밀번호를 8자 이상 입력해주세요.";
    } else {
        pwChk = true;
        e.target.classList.remove('error');

        errorMsg.textContent = "";
    }

    loginBtn.disabled = !(idChk && pwChk);
});
