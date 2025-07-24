import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Solutions from "@/components/landing/Solutions";

export default function SolutionsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <Solutions />
            </main>
            <Footer />
        </div>
    )
}