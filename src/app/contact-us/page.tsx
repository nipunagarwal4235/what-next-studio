import { StickyNavbar } from "@/components/sticky-navbar";
import MadeByMeFooter from "@/components/made-by-me-footer";

export default function ContactUsPage() {
  return (
    <>
    <div className=" bg-black">
      <div className=" h-screen">


    <StickyNavbar />
      <iframe
        src="https://app.youform.com/forms/ji0zjott"
        loading="lazy"
        width="100%"
        height="700"
      ></iframe>
      </div>
      <MadeByMeFooter />
      </div>
    </>
  );
}
