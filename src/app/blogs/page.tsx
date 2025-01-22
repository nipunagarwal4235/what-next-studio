import {StickyNavbar} from "../../components/sticky-navbar";
import MadeByMeFooter from "@/components/made-by-me-footer";

export default function BlogsPage() {
    return (
        <>
        <div className="bg-black">
        <StickyNavbar />
        <div className="h-screen container mx-auto">
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-20 relative z-20 py-6 bg-clip-text text-white">
                Blogs
            </h1>
            <p className="text-sm md:text-lg text-center text-neutral-500 max-w-2xl mx-auto py-4">Stay tuned for insights, stories,  inspiration are on the way in our upcoming blogs.</p>
        </div>
        <MadeByMeFooter />
        </div>
        </>
    )
}