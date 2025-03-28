import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [burgerMenu, setBurgerMenu] = useState(false);
    return (
        <header>
            <div className="max-w-[1200px] px-[50px] py-[30px] my-[0] mx-auto max-[730px]:px-[20px]">
                <div className="flex items-center justify-between">
                    <div className="max-w-[154px] max-h-[43px] -mt-[12px] cursor-pointer">
                        <Link to="/">
                            <img
                                className="w-full h-full"
                                src={process.env.PUBLIC_URL + '/images/logo.png'}
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <div>
                        <div className="hidden relative max-[770px]:block">
                            <div
                                onClick={() => setBurgerMenu(!burgerMenu)}
                                className="w-[28px] h-[28px] flex flex-col items-center justify-center"
                            >
                                <div
                                    className={`h-[2px] w-[20px] bg-[#000] rounded-[20px] transition-transform duration-200 ${burgerMenu ? 'rotate-45' : ''}`}
                                ></div>
                                <div
                                    className={`h-[2px] w-[20px] bg-[#000] rounded-[20px] transition-transform duration-200  ${burgerMenu ? '-rotate-45 -mt-[2px]' : 'mt-[5px]'}`}
                                ></div>
                            </div>
                        </div>
                        <div
                            className={`flex gap-x-[36px] gap-y-[24px] text-[18px] font-[500] transition-all duration-300 ${burgerMenu ? 'max-[770px]:opacity-100 max-[770px]:scale-100' : 'max-[770px]:opacity-0 max-[770px]:scale-95'} max-[770px]:bg-[#fff] max-[770px]:absolute max-[770px]:top-[90px] max-[770px]:right-0 max-[770px]:w-screen max-[770px]:justify-center max-[770px]:items-center max-[770px]:py-[20px] max-[770px]:px-[50px] max-[770px]:flex-col`}
                        >
                            <Link
                                to="/signin"
                                onClick={() => setBurgerMenu(false)}
                                className="cursor-pointer opacity-[1] transition-opacity duration-200 hover:opacity-[.8]"
                            >
                                Войти
                            </Link>
                            <Link
                                to="/signup"
                                onClick={() => setBurgerMenu(false)}
                                className="cursor-pointer opacity-[1] transition-opacity duration-200 hover:opacity-[.8]"
                            >
                                Создать аккаунт
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
