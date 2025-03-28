import { useEffect, useState } from 'react';
import Cardslist from './Cardslist';
import { Typesarray } from './Typesarray';

export const Recipes = ({ cardsArray, setSelectedCard, setSelectedAuthor }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedTypes, setSelectedTypes] = useState([]);

    return (
        <section>
            <div className="max-w-[1200px] px-[50px] pb-[50px] pt-[20px] my-[0] mx-auto max-[730px]:px-[20px]">
                <div className="flex items-center justify-between mb-[40px] gap-x-[107px] gap-y-[30px] flex-wrap">
                    <h1 className="text-[54px] font-[600] leading-[54px] max-[730px]:text-[34px] max-[730px]:leading-[110%">
                        Рецепты
                    </h1>
                    <Typesarray
                        selectedTypes={selectedTypes}
                        setSelectedTypes={setSelectedTypes}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
                <Cardslist
                    cardsArray={cardsArray}
                    setSelectedCard={setSelectedCard}
                    setSelectedAuthor={setSelectedAuthor}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    selectedTypes={selectedTypes}
                />
            </div>
        </section>
    );
};
