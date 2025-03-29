import { Link } from 'react-router-dom';

export default function Foodcard({ card, setSelectedCard, setSelectedAuthor }) {
    return (
        <div className="bg-[#fff] rounded-[20px] shadow-[0_15px_45px_rgba(107,106,131,.15)] overflow-hidden">
            <div className="w-full h-[279px] relative z-0" onClick={() => setSelectedCard(card)}>
                <Link to="/info">
                    <img
                        className="w-full h-full object-cover object-center opacity-[1] cursor-pointer transition-opacity duration-200 hover:opacity-[.8]"
                        src={`${import.meta.env.BASE_URL}/images/${card.img}.jpg`}
                        alt={card.img}
                    />
                </Link>
                <div className="absolute top-[12px] right-[12px]">
                    <div className="w-full flex gap-[8px] flex-wrap justify-end">
                        {card.type.map((type, index) => (
                            <div
                                key={index}
                                className="bg-[#fff] px-[16px] py-[8px] border-1 border-solid border-[#a0a0a0] rounded-[30px] text-[16px] leading-[16px]"
                            >
                                {type}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#fff] py-[30px] px-[24px] rounded-tl-[20px] rounded-tr-[20px] -mt-[20px] relative z-1 max-[830px]:px-[14px] max-[830px]:py-[24px] max-[830px]:-mt-[98px]">
                <Link to="/info">
                    <h2
                        className="w-full truncate text-[24px] leading-[24px] font-[700] mb-[24px] cursor-pointer inline-block opacity-[1] transition-opacity duration-200 hover:opacity-[.8]"
                        onClick={() => setSelectedCard(card)}
                    >
                        {card.name}
                    </h2>
                </Link>
                <div className="flex items-center mb-[36px] text-[14px] leading-[17px]">
                    <div className="max-w-[36px] max-h-[36px] mr-[12px]">
                        <img
                            className="w-full h-full"
                            src={`${import.meta.env.BASE_URL}/images/${card.authorImg}`}
                            alt="person"
                        />
                    </div>
                    <Link to="/author">
                        <div
                            className="w-[120px] truncate border-r-2 border-solid border-[#a0a0a0] pr-[18px] cursor-pointer opacity-[1] transition-opacity duration-200 hover:opacity-[.8]"
                            title={card.author}
                            onClick={() => setSelectedAuthor(card.author)}
                        >
                            {card.author}
                        </div>
                    </Link>
                    <div className="pl-[18px]">{card.time} мин.</div>
                </div>
                <div className="flex justify-between items-center gap-x-[10px]">
                    <button className="bg-[#fff] text-[#000] text-[18px] font-[600] px-[24px] py-[8px] border-1 border-solid border-black rounded-[10px] cursor-pointer hover:bg-[#000] hover:text-[#fff] transition-background duration-200 max-[1125px]:px-[11px] max-[1047px]:px-[24px] max-[730px]:text-[16px]">
                        <span className="text-[24px] leading-[22px] font-[400] max-[730px]:text-[20px]">+</span>{' '}
                        Добавить в покупки
                    </button>
                    <div className="text-[transparent] transition-text duration-200 hover:cursor-pointer hover:text-[#000]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="28" fill="currentColor">
                            <path
                                stroke="#000"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M20.916 26.75 11 19.667 1.083 26.75V4.083A2.833 2.833 0 0 1 3.916 1.25h14.167a2.833 2.833 0 0 1 2.833 2.833V26.75Z"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
