import DemoRequest from "@/components/landing/DemoRequest";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";

export default function DemoPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <DemoRequest />
            </main>
            <Footer />
        </div>
    )
}