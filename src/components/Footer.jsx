import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="bg-[#000] text-[#fff]">
            <div className="max-w-[1200px] p-[50px] my-[0] mx-auto max-[730px]:h-[290px]">
                <div className="flex items-center justify-between h-full max-[730px]:flex-col">
                    <div className="max-w-[154px] max-h-[43px] -mt-[12px] cursor-pointer">
                        <Link to="/">
                            <img className="w-full h-full" src="/images/logoWhite.png" alt="logo foodgram" />
                        </Link>
                    </div>
                    <div className="flex items-center gap-x-[28px] text-[16px] font-[500] max-[730px]:flex-col max-[730px]:gap-y-[24px]">
                        <Link
                            to="about"
                            className="cursor-pointer opacity-[1] transition-opacity duration-200 hover:opacity-[.7]"
                        >
                            О проекте
                        </Link>
                        <Link
                            to="/technologies"
                            className="cursor-pointer opacity-[1] transition-opacity duration-200 hover:opacity-[.7]"
                        >
                            Технологии
                        </Link>
                    </div>
                    <div className="text-[#a0a0a0]">© 2025</div>
                </div>
            </div>
        </footer>
    );
};
