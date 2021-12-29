import Stories from "./stories";
import Posts from './posts';
import MiniProfile from './mini-profile';
import Suggestion from './suggestions';

const Feed = () => {
    return (

        <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 xl:max-w-6xl mx-auto'>
            <section className="col-span-2 p-3 ">
                <Stories />
                <Posts />

            </section>
            <section className="hidden xl:inline-grid md:col-span-1">
                <div className='fixed top-20'>
                    <MiniProfile />
                    <Suggestion />
                </div>
            </section>
        </main>

    );
}

export default Feed;