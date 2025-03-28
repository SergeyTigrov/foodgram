import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { cards_array } from './cardsarray';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Cardsinfo } from './components/Cardsinfo';
import { Recipes } from './components/Recipes';
import { Authorsrecipes } from './components/Authorsrecipes';
import { Notfound } from './components/Notfound';
import { Signin } from './components/Signin';
import { Signup } from './components/Signup';

export default function App() {
    const [selectedCard, setSelectedCard] = useState(null);

    const [selectedAuthor, setSelectedAuthor] = useState('');
    const authorList = cards_array.filter(card => card.author === selectedAuthor);

    return (
        <section className="flex flex-col min-h-screen">
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Recipes
                            cardsArray={cards_array}
                            setSelectedCard={setSelectedCard}
                            setSelectedAuthor={setSelectedAuthor}
                        />
                    }
                />
                <Route
                    path="/info"
                    element={<Cardsinfo selectedCard={selectedCard} setSelectedAuthor={setSelectedAuthor} />}
                />
                <Route
                    path="/author"
                    element={
                        <Authorsrecipes
                            cardsArray={authorList}
                            setSelectedCard={setSelectedCard}
                            setSelectedAuthor={setSelectedAuthor}
                            selectedAuthor={selectedAuthor}
                        />
                    }
                />
                <Route path="*" element={<Notfound />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
            <Footer />
        </section>
    );
}
