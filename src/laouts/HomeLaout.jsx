import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import NavBar from '../components/NavBar';
import LeftAside from './LeftAside';
import RightAside from './RightAside';

const HomeLaout = () => {
    const { state } = useNavigation()
    return (
        <div>
            <header className='pt-5'>
                <Header></Header>
                <section className='w-11/12 mx-auto my-4'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-4'>
                    <NavBar></NavBar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto my-4 grid grid-cols-12 gap-4'>
                <aside className='left_nav col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-6'>
                    {state === "loading" ? <div className='w-full flex justify-center items-center'><span className="loading loading-bars loading-xl"></span></div> : <Outlet></Outlet>}
                </section>
                <aside className='right_nav col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>

        </div>
    );
};

export default HomeLaout;