import { useNavigate } from 'react-router-dom';

export const Notfound = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <section className="flex-1 flex items-center">
            <div className="max-w-[1200px] px-[50px] pb-[50px] pt-[20px] my-[0] mx-auto">
                <div className="flex items-center flex-col">
                    <div className="max-w-[215px] max-h-[109px]">
                        <img className="w-full h-full" src="oops.png" alt="oops" />
                    </div>
                    <div className="my-[50px] text-[34px] font-[600] text-center">Страница не найдена</div>
                    <button
                        className="bg-[#000] text-[#fff] text-[18px] font-[600] px-[24px] py-[8px] border-1 border-solid border-black rounded-[10px] cursor-pointer hover:bg-[#fff] hover:text-[#000] transition-background duration-200"
                        onClick={handleClick}
                    >
                        На главную
                    </button>
                </div>
            </div>
        </section>
    );
};
