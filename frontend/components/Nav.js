import Link from 'next/link'
import NavStyles from './styles/NavStyles';

const Nav = () => (
    <NavStyles>
        <Link href="/sell">
            <a>Sell</a>
        </Link>
        <Link href="/index">
            <a>Home</a>
        </Link>
        <Link href="/signup">
            <a>Signup</a>
        </Link>
        <Link href="/index">
            <a>Orders</a>
        </Link>
        <Link href="/index">
            <a>Account</a>
        </Link>
    </NavStyles>
)
export default Nav;