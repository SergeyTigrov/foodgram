import { useState } from 'react';
import Cardslist from './Cardslist';
import { Typesarray } from './Typesarray';

export const Authorsrecipes = ({ cardsArray, setSelectedCard, setSelectedAuthor, selectedAuthor }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedTypes, setSelectedTypes] = useState([]);

    return (
        <section>
            <div className="max-w-[1200px] px-[50px] pb-[50px] pt-[20px] my-[0] mx-auto max-[730px]:px-[20px]">
                <div className="flex items-center justify-between mb-[40px] gap-x-[107px] gap-y-[30px] flex-wrap">
                    <div className="flex items-center">
                        <div className="max-w-[60px] max-h-[60px] mr-[24px] shrink-0">
                            <img
                                className="w-full h-full"
                                src={`${import.meta.env.BASE_URL}/images/person.png`}
                                alt="person"
                            />
                        </div>
                        <h1 className="text-[54px] font-[600] leading-[54px] max-[730px]:text-[34px] max-[770px]:leading-[110%]">
                            {selectedAuthor}
                        </h1>
                    </div>
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
