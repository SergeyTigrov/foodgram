import { useState } from 'react';

export const Signin = () => {
    const [formSignIn, setFormSignIn] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setFormSignIn({ ...formSignIn, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formSignIn);
    };

    return (
        <section className="flex-1 flex items-center justify-center bg-[url(/images/honey.jpg)] bg-center bg-no-repeat bg-cover p-[20px] max-[730px]:py-[70px]">
            <form
                onSubmit={handleSubmit}
                className="bg-[#fff] flex items-center flex-col p-[60px] rounded-[40px] w-full max-w-[530px] max-[730px]:px-[20px] max-[730px]:py-[40px]"
            >
                <h1 className="text-[54px] font-[600] leading-[100%] max-[730px]:text-[34px]">Войти</h1>
                <div className="w-full flex flex-col text-[16px] font-[600] gap-[16px] my-[36px] ">
                    <input
                        className="w-full bg-[#fff] py-[10px] px-[12px] rounded-[10px] border border-solid border-[#a0a0a0]"
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={formSignIn.email}
                        onChange={handleInputChange}
                    />
                    <input
                        className="w-full bg-[#fff] py-[10px] px-[12px] rounded-[10px] border border-solid border-[#a0a0a0]"
                        type="text"
                        placeholder="Пароль"
                        name="password"
                        value={formSignIn.password}
                        onChange={handleInputChange}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-[#000] text-[#fff] text-[18px] font-[600] px-[36px] py-[17px] leading-[100%] border border-solid border-black rounded-[10px] cursor-pointer hover:bg-[#fff] hover:text-[#000] transition-all duration-200 max-[730px]:text-[16px]"
                >
                    Войти
                </button>
            </form>
        </section>
    );
};
