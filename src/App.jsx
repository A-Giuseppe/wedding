import './App.css'
import photoOne from "/gg_picture_1.svg"
import ceremonySvg from "/ceremony.svg"
import cutlerySvg from "/cutlery.svg"
import partySvg from "/party.svg"
import placeJpg from "/place.jpg"
import parkingJpg from "/parking.jpg"
import logoPlace from "/logo_place.svg"
import Countdown from './components/Countdown'
import Faq from './components/Faq'
import InformationElement from './components/InformationElement'
import i18next from './i18n'

function App() {
  const GOOGLE_FORM_LINK = "https://forms.gle/rXSDnu8KdBrw7qZF6";
  return (
    <section>
      {/* Hero */}
      <div className="hero">
        <h1>Gabrielle & Giuseppe</h1>
      </div>

      {/* Save the date */}
      <section className="flex items-center w-full h-[200px] lg:h-[350px] xl:h-[400px] max-container">
        <div className="flex-1 flex flex-col justify-center items-center font-bad-spript w-full">
          <h2 className="text-6xl lg:text-9xl whitespace-nowrap text-left xl:-translate-x-35">
            {i18next.t("saveTheDate.date")}
          </h2>
          <p className="text-2xl lg:text-3xl xl:text-8xl text-right xl:translate-x-40 p-6"> 
            Save the date ! 
          </p>
        </div>
      </section>

      {/* image */}
      <section className="flex-1 flex w-full items-center">
          <img src={photoOne} alt="Gabrielle & Giuseppe photo" className="object-fill w-full h-full"/>
      </section>

      {/* Countdown */}
      <section className="padding bg-wedding-brown font-bad-spript flex flex-col items-center justify-center w-full py-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 xl:mb-8 whitespace-nowrap">
          {i18next.t("countdown.ticTac")}
        </h2>
        <Countdown date={new Date("2026-06-13T16:00:00")}/>
        <p className="mt-8 text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-semibold max-w-xl">
          {i18next.t("countdown.beautifulYes")}
        </p>
      </section>

      {/* Planning */}
      <section className="padding">
        <div className="flex-1 flex flex-col justify-center items-center font-bad-spript max-container">
          <h2>
            {i18next.t("planning.title")}
          </h2>
          <p className="flex mt-8 text-lg lg:text-3xl text-center max-w-xl leading-relaxed">
            {i18next.t("planning.firstParagraph")}
          </p>
          <p className="flex mt-8 text-lg lg:text-3xl text-center max-w-xl leading-relaxed">
            {i18next.t("planning.secondParagraph")}
          </p>
          <ul className="md:flex sm:justify-between sm:mt-5">
            <InformationElement 
              title={i18next.t("planning.ceremony.title")}
              image={ceremonySvg}
              description={i18next.t("planning.ceremony.description")}
            />
            <InformationElement
              title={i18next.t("planning.dinner.title")} 
              image={cutlerySvg} 
              description={i18next.t("planning.dinner.description")}
            />
            <InformationElement
              title={i18next.t("planning.party.title")} 
              image={partySvg} 
              description={i18next.t("planning.party.description")}
            />
          </ul>
        </div>
      </section>

      {/* Place */}
      <section className="px-6 sm:px-12 lg:px-24 py-6 md:py-12 font-bad-spript bg-[#f4ede4]">
        <div className="flex items-center justify-center text-center mb-12">
          {/* image */}
          <h2 className="hidden">{i18next.t("place.title")}</h2> 
          <img src={logoPlace} alt="logo ferme d'ecavée" className="object-fill w-full"/>
        </div>
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center items-start">
            {/* Left Section */}
            <div>
              <p className="text-lg md:text-xl leading-relaxed">
                {i18next.t("place.leftSection.description")}
              </p>
              <img
                src={placeJpg}
                alt="Entrée principale"
                className="mt-6 rounded-2xl shadow-lg w-full object-cover"
              />
            </div>

            {/* Right Section */}
            <div>
              <p className="text-lg md:text-xl leading-relaxed">
                {i18next.t("place.rightSection.description")}
              </p>
              <img
                src={parkingJpg}
                alt="Parking"
                className="mt-6 rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section className="pt-10 md:pt-20 pb-10 md:pb-20 bg-wedding-brown">
        <div className="flex-1 flex flex-col justify-center items-center font-bad-spript max-container">
          <h2>
            {i18next.t("rsvp.title")}
          </h2>
          <p className="flex mt-8 text-xl md:text-2xl text-center max-w-xl px-5 leading-relaxed">
            {i18next.t("rsvp.description")}
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={GOOGLE_FORM_LINK}
            className="inline-block bg-[#fdf1e3] text-[#1f0e03] text-lg font-medium px-6 py-3 rounded-full shadow-md hover:bg-[#f2e4d0] transition duration-300 mt-6"
          >
            {i18next.t("rsvp.buttonLabel")}
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="pt-10 md:pt-20 pb-10 md:pb-20 padding-x flex flex-col w-full">
        <div className="flex items-center justify-center whitespace-nowrap">
          <h2>{i18next.t("faq.title")}</h2>
        </div>
        <div className="flex items-center justify-center w-full">
          <Faq />
        </div>
      </section>
    </section>
  )
}

export default App
