import * as verification from './verification.js';

const loginBtn = document.querySelector('#login-button');
const inputId = document.querySelector('.js-input__id');
const inputNickName = document.querySelector('.js-input__nickname');
const inputPw = document.querySelector('.js-input__pw');
const inputCheckPw = document.querySelector('.js-input__checkpw');

let idChk = false;
let nickNameChk = false;
let pwChk = false;
let pwReChk = false;

inputId.addEventListener('focusin', (e) => e.target.classList.remove('error'));
inputId.addEventListener('focusout', (e) => {
  const errorMsg = e.target.parentElement.querySelector('.js-error-msg');

  if (!verification.verifyId(e.target.value)) {
    idChk = false;
    e.target.classList.add('error');

    errorMsg.textContent =
      e.target.textLength === 0
        ? '이메일을 입력해주세요.'
        : '잘못된 이메일 형식입니다';
  } else {
    idChk = true;

    errorMsg.textContent = '';
  }

  loginBtn.disabled = !(idChk && nickNameChk && pwChk && pwReChk);
});

inputNickName.addEventListener('focusin', (e) =>
  e.target.classList.remove('error')
);
inputNickName.addEventListener('focusout', (e) => {
  const errorMsg = e.target.parentElement.querySelector('.js-error-msg');

  if (e.target.textLength === 0) {
    nickNameChk = false;
    e.target.classList.add('error');

    errorMsg.textContent = '닉네임을 입력해주세요.';
  } else {
    nickNameChk = true;

    errorMsg.textContent = '';
  }

  loginBtn.disabled = !(idChk && nickNameChk && pwChk && pwReChk);
});

inputPw.addEventListener('focusin', (e) => e.target.classList.remove('error'));
inputPw.addEventListener('focusout', (e) => {
  const errorMsg =
    e.target.parentElement.parentElement.querySelector('.js-error-msg');

  if (e.target.textLength === 0) {
    pwChk = false;
    e.target.classList.add('error');

    errorMsg.textContent = '비밀번호를 입력해주세요.';
  } else if (e.target.textLength < 8) {
    pwChk = false;
    e.target.classList.add('error');

    errorMsg.textContent = '비밀번호를 8자 이상 입력해주세요.';
  } else {
    pwChk = true;

    errorMsg.textContent = '';
  }

  loginBtn.disabled = !(idChk && nickNameChk && pwChk && pwReChk);
});

inputCheckPw.addEventListener('focusin', (e) =>
  e.target.classList.remove('error')
);
inputCheckPw.addEventListener('focusout', (e) => {
  const errorMsg =
    e.target.parentElement.parentElement.querySelector('.js-error-msg');

  if (inputPw.value !== e.target.value) {
    pwReChk = false;
    e.target.classList.add('error');

    errorMsg.textContent = '비밀번호가 일치하지 않습니다.';
  } else {
    pwReChk = true;

    errorMsg.textContent = '';
  }

  loginBtn.disabled = !(idChk && nickNameChk && pwChk && pwReChk);
});

loginBtn.addEventListener('click', (e) => {
  if (verification.verifyPw(inputId.value, inputPw.value)) {
    alert('사용 중인 이메일입니다');
  } else {
    location.href = '../login';
  }
});
