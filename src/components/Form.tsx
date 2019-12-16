import React from "react"

import Dropdown from "./Dropdown"
import TextInput from "./TextInput"

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
const contractOptions = ["Befristet", "Festanstellung", "Freie Mitarbeit", "Projektarbeit", "Teilzeit", "Vollzeit"]
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

/**
 * @param options
 */
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
      <div className="lg:flex lg:flex-wrap">
        <div className="w-full lg:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold">Was?</label>
          <Dropdown label="Praktikumsart" options={whatOptions}></Dropdown>
          <Dropdown label="Faukultät" options={facultyOptions}></Dropdown>
          <Dropdown label="Branche" options={branchOptions}></Dropdown>
          <TextInput label="Stichworte"></TextInput>
        </div>
        <div className="w-full lg:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mt-8 lg:mt-0">Wo?</label>
          <TextInput label="Ort oder Adresse"></TextInput>
          <div className="flex w-full mt-2">
            <span
              className="
            flex
            w-full
            items-center
            bg-gray-100
            rounded-l
            border
            border-r-0
            border-grey-light
            px-3
            text-grey-dark
            text-sm
            whitespace-no-wrap
            "
            >
              Umkreissuche mit
            </span>
            <input
              type="number"
              defaultValue="100"
              className="
              overflow-x-hidden
              text-right
              leading-normal
              border
              h-8
              border-grey-light
              px-3
              focus:border-indigo-500
              focus:outline-none
              hover:bg-gray-200
              "
            ></input>
            <span className="flex flex-shrink items-center leading-normal bg-gray-100 rounded rounded-l-none border border-l-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">
              km Radius
            </span>
          </div>
        </div>
      </div>
      <div>
        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mt-8 ml-3">
          Und Ausserdem...
        </label>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 px-3">
            <Dropdown label="Vertragsart" options={contractOptions}></Dropdown>
            <Dropdown label="Sprachkenntnisse" options={languageOptions}></Dropdown>
          </div>
          <div className="w-full lg:w-1/2 px-3">
            <Dropdown label="Bewerbung in" options={languageOptions}></Dropdown>
            <TextInput label="Ohne diese Stichworte"></TextInput>
          </div>
        </div>
      </div>
      <div className="mx-3 flex justify-end">
        <button
          type="submit"
          className="
          block 
          w-full
          bg-gray-200
          border-b-2
          border-indigo-500
          hover:bg-indigo-200
          text-gray-900
          font-bold
          py-2
          px-8
          mt-8
          rounded
          lg:w-auto
          
          "
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default Form
