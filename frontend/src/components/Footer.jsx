import { NavLink, useNavigate } from "react-router-dom";
import SocialButtons from "./SocialButtons";
import datos from '../datos.json'
function Section({ data }) {
    return <div>
        <h5 key="{data.titulo}">{data.titulo}</h5>
        <ul className="nav flex-column">
            {
                data.links.map((i, index) =>
                    <li key={index}><a className='text-decoration-none' target="_blank"
                        href={i.url}>{i.titulo}</a></li>
                )
            }
        </ul>
    </div>
}
export function Footer() {
    return <div className="d-flex justify-content-between mt-4">
        <div className="fs-4">MyCompany</div>
        {
            datos.footer.map((item, index) =>
                <Section data={item} key={index}></Section>
            )
        }
    </div>
}
<footer>
    <NavLink to="/" className="m-3">Home</NavLink>
    <NavLink to="/" className="m-3">About Us</NavLink>
    <NavLink to="/" className="m-3">Privacy</NavLink>
    <NavLink to="/" className="m-3">Terms and Conditions</NavLink>
    <SocialButtons />
</footer>
