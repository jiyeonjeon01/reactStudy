function Button({text, color, size, children}) {
  // 내부 함수 정의 (선언식, 표현식, 람다식)
  const onClickButton = function (e) {
    console.log(e);
    alert(text);
  };



    return(
      <>
      <button onClick={onClickButton} style={{color: color}}>{text} {children} </button>
      </>
    );
};

Button.defaultProps = {
  text: '게시판',
  color: 'yellow'
};

export default Button;
