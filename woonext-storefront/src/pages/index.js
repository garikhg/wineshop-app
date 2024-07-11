import SEOHead from "@components/SEOHead/SEOHead";
import { Header } from "../components";

export default function Home() {
    return (
        <>
            <SEOHead/>
            <Header/>
            <main id="main" className="relative" role="main">
                <div className="max-w-screen-2xl px-6 mx-auto">
                    Main
                </div>
            </main>
            <footer>
                <div className="max-w-screen-2xl px-6 mx-auto">
                    Footer
                </div>
            </footer>
        </>
    );
}
