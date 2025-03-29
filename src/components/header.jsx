import logo from '../assets/deDingen.png';

const Header = () => {
    return (
        <header className='header'>
            <div className='flex gap-4 items-center '>
                <img src={logo} alt="Logo" width={50} height={50} />
                <h1 className='text-2xl font-semibold'>deDingen</h1>
            </div>
            <p className='text-2xl font-semibold'>Dashboard</p>
        </header>
    );
};

export default Header;