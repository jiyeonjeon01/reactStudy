import "./Main.css";

function Main() {
  const number = 9;
  const obj = {
    name: "jjy", 
    age: 24,
    isLogin: false
  }; 


  return (
    <>
      {obj.isLogin === false ? 
        (<div className="logout">로그아웃</div>):
        (<div className="login">로그인</div>)
      }



    </>
  );

};

export default Main;
