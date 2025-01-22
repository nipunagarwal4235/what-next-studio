import {StickyNavbar} from "../../components/sticky-navbar";
import MadeByMeFooter from "@/components/made-by-me-footer";

export default function BlogsPage() {
    return (
        <>
        <div className="bg-black">
        <StickyNavbar />
        <div className="h-screen container mx-auto">
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-20 relative z-20 py-6 bg-clip-text text-white">
                Success Stories
            </h1>
            <p className="text-sm md:text-lg text-center text-neutral-500 max-w-2xl mx-auto py-4">Get ready to be inspired&mdash;our success stories are coming soon to show you what&apos;s possible!</p>
        </div>
        <MadeByMeFooter />
        </div>
        </>
    )
}