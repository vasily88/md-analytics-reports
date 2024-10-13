import Logo from '../../assets/logo.webp'

const Header = () => {
    return (
        <header className='flex p-10'>
            <img className='logoHeader' src={Logo} alt="logo" />
        </header>
    )
}

export default Header
