export const Typesarray = ({ selectedTypes, setSelectedTypes, setCurrentPage }) => {
    const typesArray = ['Десерт', 'Завтрак', 'Обед', 'Ужин'];

    const choiceType = type => {
        setSelectedTypes(prevTags =>
            prevTags.includes(type) ? prevTags.filter(t => t !== type) : [...prevTags, type],
        );
        setCurrentPage(1);
    };

    return (
        <div className="flex items-center gap-[8px] flex-wrap">
            {typesArray.map((type, index) => (
                <div
                    key={index}
                    onClick={() => choiceType(type)}
                    className={`px-[16px] py-[8px] border-1 border-solid border-[#a0a0a0] rounded-[30px] text-[16px] leading-[16px] cursor-pointer ${selectedTypes.includes(type) ? 'bg-[#000] text-[#fff]' : 'bg-[#fff] text-[#000]'}`}
                >
                    {type}
                </div>
            ))}
        </div>
    );
};
