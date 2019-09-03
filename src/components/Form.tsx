import React from "react"
import { create } from "ol/transform"

const whatOptions = [
  "Praktikum im Studium",
  "Bachelor- oder Masterarbeit",
  "Stellen f&uuml;r Doktoranden und Doktorandinnen",
  "Stellen f&uuml;r Duales Studium",
  "Werkstudentent&auml;tigkeit",
  "Studentenjob",
  "Stelle f&uuml;r Absolventen und Absolventinnen",
  "Traineeprogramm",
  "Stelle, die erste Berufserfahrung voraussetzt",
  "Stellen f&uuml;r Studienabbrecher",
]
const facultyOptions = [
  "Angewandte Chemie",
  "Angewandte Mathematik, Physik und Allgemeinwissenschaften",
  "Architektur",
  "Bauingenieurwesen",
  "Betriebswirtschaft",
  "Design",
  "Elektrotechnik Feinwerktechnik Informationstechnik",
  "Informatik",
  "Maschinenbau und Versorgungstechnik",
  "Sozialwissenschaften",
  "Verfahrenstechnik",
  "Werkstofftechnik",
]
const branchOptions = [
  "Abfallwirtschaft",
  "Anlagen- und Maschinenbau",
  "Automatisierungstechnik",
  "Automobilbau",
  "Banken, Versicherung, Immobilien,",
  "Finanzdienstleistung",
  "Bauwesen, Architektur",
  "Bergbau",
  "Bildung&amp;Training",
  "Biotechnik, Pharmazie",
  "Chemie- und erd&ouml;lverarbeitende Industrie",
  "Druck, Papier und Verpackungsindustrie",
  "Einzel-, Gro&szlig;- und Au&szlig;enhandel",
  "Elektrotechnik, Feinmechanik, Optik",
  "Energie-/Wasserversorgung",
  "Fahrzeugbau/-zulieferer",
  "Gastronomie, Touristik",
  "Gesundheit, Soziale Dienste",
  "Glas, Keramik",
  "Holz- und M&ouml;belindustrie",
  "Ingenieurdienstleistung",
  "Internet",
  "IT-Dienstleistung, EDV-Schulung",
  "IT-Hardware – Programmierung und Design",
  "IT-Softwareentwicklung",
  "Konsumg&uuml;ter",
  "Kunst, Kultur",
  "Kunststoffindustrie, -verarbeitung",
  "Land-, Forst-, Fischwirtschaft",
  "Luft- und Raumfahrt",
  "Management, Beratung",
  "Marketing, Werbung &amp; PR",
  "Marktforschung",
  "Medien",
  "Medizintechnik",
  "Metall",
  "Nahrungs- und Genussmittel",
  "&Ouml;ffentlicher Dienst und Verb&auml;nde",
  "Personaldienstleistung",
  "Petrochemie",
  "Recht, Steuern, Finanzen, Controlling",
  "Sonstige Branche",
  "Sonstige Dienstleistung",
  "Telekommunikation",
  "Textil, Leder, Bekleidung",
  "Verkehr, Lager, Logistik",
  "Wissenschaft, Forschung &amp; Entwicklung",
]
const contractOptions = [
  "Befristet",
  "Festanstellung",
  "Freie Mitarbeit",
  "Projektarbeit",
  "Teilzeit",
  "Vollzeit",
]
const languageOptions = [
  "Deutsch",
  "Deutscher Dialekt (Schweizerdeutsch)",
  "Englisch",
  "Englisch (Technisches Englisch)",
  "Englisch (Wirtschafts- oder Businessenglisch)d",
  "Spanisch",
  "Franz&ouml;sisch",
  "Afrikaansd",
  "Akan/Twi (Westafrika)d",
  "Albanischd",
  "Amharisch (&Auml;thiopien)",
  "Arabischd",
  "Aram&auml;isch/Syrischd",
  "Armenischd",
  "Aserbaidschanischd",
  "Bambara (Westafrika, Mali)",
  "Bengalid",
  "Birmanischd",
  "Bosnischd",
  "Bulgarischd",
  "Chinesischd",
  "D&auml;nischd",
  "Estnischd",
  "Filipino (Tagalog)d",
  "Finnischd",
  "Georgischd",
  "Griechischd",
  "Gujaratid",
  "Hausa (Westafrika)",
  "Hebr&auml;ischd",
  "Hindid",
  "Indonesischd",
  "Isl&auml;ndischd",
  "Italienisch",
  "Jamaika-Kreolisch (Patois)",
  "Kambodschanisch (Khmer)d",
  "Kasachischd",
  "Kirgisischd",
  "Koreanischd",
  "Kroatischd",
  "Kurdischd",
  "Laotischd",
  "Lettischd",
  "Letzeburgisch (Luxemburg)",
  "Malayalamd",
  "Marathid",
  "Mazedonischd",
  "Mongolischd",
  "Nepalesischd",
  "Niederl&auml;ndisch/Fl&auml;misch",
  "Pakistanisch/Urdud",
  "Paschtu/Paschto/Pashto (Afghanistan)",
  "Portugiesischd",
  "Punjabid",
  "Romanid",
  "Rum&auml;nischd",
  "Russisch",
  "Schwedischd",
  "Serbischd",
  "Singhalesischd",
  "Slowakischd",
  "Slowenischd",
  "Somalid",
  "Sorbisch/Wendischd",
  "Suaheli (Ostafrika)d",
  "Taiwanischd",
  "Tamild",
  "Telugud",
  "Thaid",
  "Tibetischd",
  "Tigrinja (Eritrea)d",
  "Tschechischd",
  "Tschetschenischd",
  "T&uuml;rkisch",
  "Uigurischd",
  "Ukrainischd",
  "Ungarischd",
  "Usbekischd",
  "Vietnamesischd",
  "Wei&szlig;russisch",
  "Yoruba (Westafrika)",
]

export function createSelectOptions(options: string[]): JSX.Element[] {
  return options.map((t, i) => (
    <option key={i} value={t}>
      {t}
    </option>
  ))
}

const Form: React.FunctionComponent = () => {
  return (
    <form>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Was?
          </label>
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            {createSelectOptions(whatOptions)}
          </select>
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            {createSelectOptions(facultyOptions)}
          </select>
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            {createSelectOptions(branchOptions)}
          </select>
          <input
            className="w-full"
            type="text"
            placeholder="Stichworte"
          ></input>
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Wo?
          </label>
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Ort oder Adresse"
          ></input>
          Umkreissuche mit <input type="number" value="10"></input>km Radius.
        </div>
      </div>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Und Ausserdem...
      </label>
      <div className="flex flex-wrap">
        <select
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-state"
          placeholder="Vertragsart"
        >
          {createSelectOptions(contractOptions)}
        </select>
        <select
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-state"
        >
          {createSelectOptions(languageOptions)}
        </select>
        <select
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-state"
        >
          {createSelectOptions(languageOptions)}
        </select>
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Ohne diese Stichworte"
        ></input>
      </div>
    </form>
    /*
     <form className="w-full max-w-xl">
       <div className="flex flex-wrap -mx-3 mb-6">
         <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
           <label
             className="block
         uppercase
         tracking-wide
         text-gray-800
         text-xs
         font-bold
         mb-2"
             htmlFor="grid-name"
           >
             Name
           </label>
           <input
             className="block
         w-full
         bg-transparent
         text-gray-800
         border
         border-gray-400
         py-3
         px-4
         leading-tight focus:outline-none focus:bg-gray-100 focus:border-orange-500"
             id="grid-name"
             type="text"
             placeholder="Your Name"
           ></input>
         </div>
         <div className="w-full md:w-1/2 px-3">
           <label
             className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
             htmlFor="grid-email"
           >
             Email
           </label>
           <input
             className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
             id="grid-email"
             type="email"
             placeholder="Your Email"
           ></input>
         </div>
       </div>
       <div className="flex flex-wrap -mx-3 mb-6">
         <div className="w-full px-3">
           <label
             className="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2"
             htmlFor="grid-message"
           >
             Message
           </label>
         </div>
       </div>
       <div className="flex justify-end">
         <button
           className="
           bg-transparent
           border
           border-gray-500
           font-semibold
           hover:bg-gray-200
           hover:text-gray-900
           px-4
           py-2
           text-gray-800
           hover:border-transparent
 "
         >
           Submit
         </button>
       </div>
     </form>
     */
  )
}

export default Form
