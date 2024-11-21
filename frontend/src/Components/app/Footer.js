import "../../css/footer.css"

function Footer() {
	return (
		<footer className="py-4 bg-light footer  border-top">
          <div className="container text-center">
            <ul className="nav justify-content-center mb-3">
              <li className="nav-item">
                <a className="nav-link" href="/">Top</a>
              </li>
            </ul>

            <p>
              <small>Copyright &copy;SunEun Kim</small>
            </p>
          </div>
        </footer>
	);
}

export default Footer;