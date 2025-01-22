import Atd from "../assets/client-logos/atd-webp.webp";
import HundredN from "../assets/client-logos/hundred-n-cafe-webp.webp";
import Kortyard from "../assets/client-logos/kortyard-cafe-webp.webp";
import SevenDays from "../assets/client-logos/seven-days-webp.webp";
import VShine from "../assets/client-logos/v-shine-car-spa-webp.webp";


const logos = [
    {
      name: 'Attention To Detail',
      image: Atd,
    }, 
    {
      name: '100N',
      image: HundredN,
    },
    {
      name: 'Kortyard',
      image: Kortyard,
    },
    {
      name: 'Seven Days',
      image: SevenDays,
    },
    {
      name: 'V Shine',
      image: VShine,
    },
  ]
  

export default function Partners() {
    return (
    <div>

<h3 className="text-2xl text-white font-semibold mb-4 text-center">
    Our Clients 
</h3>
<div className="w-full bg-white ">
      <div className="mx-auto w-full px-4 md:px-8">
        <div
          className="group relative mt-6 flex gap-6 overflow-hidden p-2"
          style={{
            maskImage:
              'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
          }}
        >
          {Array(5)
            .fill(null)
            .map((index) => (
              <div
                key={index + "partners"}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
              >
                {logos.map((logo, key) => (
                  <img
                    key={key + logo.name}
                    src={logo.image.src}
                    className="w-20 px-2"
                    alt={`${logo.name}`}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
    </div>
    )
}
