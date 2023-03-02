import type { NextPage } from 'next';
import { Main } from '../layouts';
import { MainPage } from '../components/MainPage';

const Home: NextPage = () => {
    return (
        <Main>
            <MainPage />
        </Main>
    );
};

export default Home;
