import { useState } from 'react';

export const Signup = () => {
    const [formSignUp, setFormSignUp] = useState({
        name: '',
        surname: '',
        user_name: '',
        email: '',
        password: '',
    });

    const handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setFormSignUp({ ...formSignUp, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formSignUp);
    };

    return (
        <section
            className={`flex-1 flex items-center justify-center bg-[url(${import.meta.env.BASE_URL}/images/honey.jpg)] bg-center bg-no-repeat bg-cover p-[20px] max-[730px]:py-[70px]`}
        >
            <form
                onSubmit={handleSubmit}
                className="bg-[#fff] flex items-center flex-col p-[60px] rounded-[40px] w-full max-w-[530px] max-[730px]:px-[20px] max-[730px]:py-[40px]"
            >
                <h1 className="text-[54px] font-[600] leading-[100%] max-[730px]:text-[34px]">Регистрация</h1>
                <div className="w-full flex flex-col text-[16px] font-[600] gap-[16px] my-[36px] ">
                    <input
                        className="w-full bg-[#fff] py-[10px] px-[12px] rounded-[10px] border border-solid border-[#a0a0a0]"
                        type="text"
                        placeholder="Имя"
                        name="name"
                        value={formSignUp.name}
                        onChange={handleInputChange}
                    />
                    <input
                        className="w-full bg-[#fff] py-[10px] px-[12px] rounded-[10px] border border-solid border-[#a0a0a0]"
                        type="text"
                        placeholder="Фамилия"
                        name="surname"
                        value={formSignUp.surname}
                        onChange={handleInputChange}
                    />
                    <input
                        className="w-full bg-[#fff] py-[10px] px-[12px] rounded-[10px] border border-solid border-[#a0a0a0]"
                        type="text"
                        placeholder="Имя пользователя"
                        name="user_name"
                        value={formSignUp.user_name}
                        onChange={handleInputChange}
                    />
                    <input
                        className="w-full bg-[#fff] py-[10px] px-[12px] rounded-[10px] border border-solid border-[#a0a0a0]"
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={formSignUp.email}
                        onChange={handleInputChange}
                    />
                    <input
                        className="w-full bg-[#fff] py-[10px] px-[12px] rounded-[10px] border border-solid border-[#a0a0a0]"
                        type="text"
                        placeholder="Пароль"
                        name="password"
                        value={formSignUp.password}
                        onChange={handleInputChange}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-[#000] text-[#fff] text-[18px] font-[600] px-[36px] py-[17px] leading-[100%] border border-solid border-black rounded-[10px] cursor-pointer hover:bg-[#fff] hover:text-[#000] transition-all duration-200 max-[730px]:text-[16px]"
                >
                    Создать аккаунт
                </button>
            </form>
        </section>
    );
};
