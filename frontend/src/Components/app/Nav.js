import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Nav() {

  const { auth, setAuth } = useContext(AuthContext);

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">BBS</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              {
                (auth) ?
                  <>
                    <a class="nav-link" href="/logout">로그아웃</a>
                  </>
                  :
                  <>
                    <a class="nav-link" href="/login">로그인</a>
                  </>
              }
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/join">회원 가입</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;