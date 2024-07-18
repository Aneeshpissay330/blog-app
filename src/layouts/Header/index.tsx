import { images } from '../../constants';
import { colors } from '../../theme/colors';

const Header = () => {
    return (
        <section>
            <header className='container mx-auto p-5 flex justify-between items-center'>
                <div>
                    <img src={images.Logo} alt='Logo' />
                </div>
                <div className='flex gap-x-9 items-center'>
                    <ul className='flex gap-x-5 font-semibold'>
                        <li className='hover:text-[#FFA500]'>
                            <a href='#'>Home</a>
                        </li>
                        <li className='hover:text-[#FFA500]'>
                            <a href='#'>Articles</a>
                        </li>
                        <li className='hover:text-[#FFA500]'>
                            <a href='#'>Pages</a>
                        </li>
                    </ul>
                    <button
                        className="border-2 px-6 py-2 rounded-full font-semibold text-[#FFA500] border-[#FFA500] hover:bg-[#FFA500] hover:text-[#FFFFFF] transition-all duration-300"
                    >
                        Sign in
                    </button>
                </div>
            </header>
        </section>
    )
}

export default Header;