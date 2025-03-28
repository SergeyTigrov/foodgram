import Foodcard from './Foodcard';

export default function Cardslist({
    cardsArray,
    setSelectedCard,
    setSelectedAuthor,
    currentPage,
    setCurrentPage,
    selectedTypes,
}) {
    const filteredCardsArray = cardsArray.filter(
        card => selectedTypes.length === 0 || card.type.some(type => selectedTypes.includes(type)),
    );

    const countCardsOnPage = 6;
    const lastIndex = currentPage * countCardsOnPage;
    const firstIndex = lastIndex - countCardsOnPage;
    const currentCardsArray = filteredCardsArray.slice(firstIndex, lastIndex);

    let pages = [];
    for (let i = 1; i <= Math.ceil(filteredCardsArray.length / countCardsOnPage); i++) {
        pages.push(i);
    }

    const plusPages = () => {
        currentPage < pages.length && setCurrentPage(prevPage => prevPage + 1);
    };

    const minusPages = () => {
        currentPage > 1 && setCurrentPage(prevPage => prevPage - 1);
    };

    return (
        <>
            <div className="grid gap-[40px] grid-cols-3 grid-rows-auto max-[1047px]:grid-cols-2 max-[650px]:grid-cols-1">
                {currentCardsArray.map((card, index) => (
                    <Foodcard
                        key={index}
                        card={card}
                        setSelectedCard={setSelectedCard}
                        setSelectedAuthor={setSelectedAuthor}
                    />
                ))}
            </div>
            <div className={`flex justify-center items-center mt-[50px] ${pages.length === 1 ? 'hidden' : 'block'}`}>
                <button
                    className={`w-[44px] h-[44px] rounded-[50%] text-[28px] ${currentPage === 1 ? 'bg-[#efefef] text-[#a0a0a0] cursor-not-allowed' : 'bg-[#000] text-[#fff] cursor-pointer'} leading-[44px]`}
                    onClick={minusPages}
                >
                    &lsaquo;
                </button>
                <div className="flex gap-x-[10px] mx-[24px] text-[32px] font-[600]">
                    {pages.map((page, index) => (
                        <button
                            className={`${page === currentPage ? 'text-[#000]' : 'text-[#a0a0a0]'}  cursor-pointer`}
                            key={index}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </button>
                    ))}
                </div>
                <button
                    className={`w-[44px] h-[44px] rounded-[50%] text-[28px] ${currentPage === pages.length ? 'bg-[#efefef] text-[#a0a0a0] cursor-not-allowed' : 'bg-[#000] text-[#fff] cursor-pointer'} leading-[44px]`}
                    onClick={plusPages}
                >
                    &rsaquo;
                </button>
            </div>
        </>
    );
}
