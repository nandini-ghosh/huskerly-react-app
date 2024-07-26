import Header from './Header';
import '../index.css';

function HomeLayout({ children }) {
    return (
        <div>
            <Header /> 
            <main>
                {children}
            </main>
        </div>
    );
}

export default HomeLayout;
