import { Link } from 'react-router-dom';

export const Cardsinfo = ({ selectedCard, setSelectedAuthor }) => {
    return (
        <section>
            {selectedCard && (
                <div className="max-w-[1200px] px-[50px] pb-[50px] pt-[20px] my-[0] mx-auto max-[730px]:px-[20px]">
                    <div className="flex w-full gap-[30px] max-[850px]:flex-col">
                        <div className="w-[370px] h-[440px] max-[850px]:w-full max-[730px]:h-[240px]">
                            <img
                                className="w-full h-full object-cover object-center"
                                src={`${import.meta.env.BASE_URL}/images/${selectedCard.img}.jpg`}
                                alt={selectedCard.img}
                            />
                        </div>
                        <div className="flex-1">
                            <h1 className="text-[54px] font-[600] mb-[30px] leading-[54px] max-[730px]:text-[34px] max-[730px]:leading-[110%]">
                                {selectedCard.name}
                            </h1>
                            <div className="flex items-center gap-[16px] mb-[40px] flex-wrap">
                                <div className="flex gap-[8px] flex-wrap">
                                    {selectedCard.type.map((type, index) => (
                                        <div
                                            key={index}
                                            className="bg-[#fff] px-[16px] py-[8px] border-1 border-solid border-[#a0a0a0] rounded-[30px] text-[16px] leading-[16px]"
                                        >
                                            {type}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center gap-x-[16px]">
                                    <div>{selectedCard.time} мин.</div>
                                    <div className="flex items-center">
                                        <div className="max-w-[36px] max-h-[36px] mr-[12px]">
                                            <img
                                                className="w-full h-full"
                                                src={`${import.meta.env.BASE_URL}/images/${selectedCard.authorImg}`}
                                                alt="person"
                                            />
                                        </div>
                                        <Link to="/author">
                                            <div
                                                className="cursor-pointer opacity-[1] transition-opacity duration-200 hover:opacity-[.8]"
                                                title={selectedCard.author}
                                                onClick={() => setSelectedAuthor(selectedCard.author)}
                                            >
                                                {selectedCard.author}
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-[60px]">
                                <h3 className="text-[32px] font-[600] leading-[32px] mb-[24px] max-[730px]:text-[26px] max-[730px]:leading-[110%]">
                                    Ингредиенты:
                                </h3>
                                <ul className="list-disc list-inside flex flex-wrap gap-x-[14px] text-[18px]">
                                    <li>говядина - 200 г</li>
                                    <li>капуста белокочанная - 200 г</li>
                                    <li>картофель - 100 г</li>
                                    <li>морковь - 100 г</li>
                                    <li>свекла - 100 г</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-[32px] font-[600] leading-[32px] mb-[24px] max-[730px]:text-[26px] max-[730px]:leading-[110%]">
                                    Описание:
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, qui? Id asperiores
                                    minima, quo velit consequuntur accusamus, architecto soluta optio nam distinctio eos
                                    quaerat alias suscipit incidunt quibusdam harum deserunt?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
