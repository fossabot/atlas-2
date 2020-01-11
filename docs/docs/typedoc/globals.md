---
id: "globals"
title: "Atlas documentation"
sidebar_label: "Globals"
---

[Atlas documentation](index.md) › [Globals](globals.md)

## Index

### Classes

* [Charon](classes/charon.md)
* [ClusterLayer](classes/clusterlayer.md)
* [ClusterStyle](classes/clusterstyle.md)
* [Logger](classes/logger.md)
* [Nominatim](classes/nominatim.md)
* [OLCluster](classes/olcluster.md)
* [OLControl](classes/olcontrol.md)
* [OLFeature](classes/olfeature.md)
* [OLInteraction](classes/olinteraction.md)
* [OLLayer](classes/ollayer.md)
* [OLMap](classes/olmap.md)
* [OLNotification](classes/olnotification.md)
* [OLSelect](classes/olselect.md)
* [OLStyle](classes/olstyle.md)
* [OLVectorSource](classes/olvectorsource.md)
* [Sample](classes/sample.md)

### Interfaces

* [AddCountryAction](interfaces/addcountryaction.md)
* [AddNotificationAction](interfaces/addnotificationaction.md)
* [AddSelectedCountriesAction](interfaces/addselectedcountriesaction.md)
* [ContextEntity](interfaces/contextentity.md)
* [CountriesState](interfaces/countriesstate.md)
* [DispatchProps](interfaces/dispatchprops.md)
* [DropdownProps](interfaces/dropdownprops.md)
* [FeaturesEntity](interfaces/featuresentity.md)
* [ForwardResult](interfaces/forwardresult.md)
* [Geocoder](interfaces/geocoder.md)
* [GeocodingResponseObject](interfaces/geocodingresponseobject.md)
* [Geometry](interfaces/geometry.md)
* [Job](interfaces/job.md)
* [JobState](interfaces/jobstate.md)
* [Location](interfaces/location.md)
* [MapInterface](interfaces/mapinterface.md)
* [MenuProps](interfaces/menuprops.md)
* [ModalProps](interfaces/modalprops.md)
* [Notification](interfaces/notification.md)
* [NotificationState](interfaces/notificationstate.md)
* [OwnProps](interfaces/ownprops.md)
* [Properties](interfaces/properties.md)
* [RawJob](interfaces/rawjob.md)
* [RawLocation](interfaces/rawlocation.md)
* [RawSearch](interfaces/rawsearch.md)
* [RemoveNotificationAction](interfaces/removenotificationaction.md)
* [RemoveSelectedCountriesAction](interfaces/removeselectedcountriesaction.md)
* [SearchState](interfaces/searchstate.md)
* [SetAllJobsAction](interfaces/setalljobsaction.md)
* [SetSearchAction](interfaces/setsearchaction.md)
* [SetShowJobsAction](interfaces/setshowjobsaction.md)
* [StateProps](interfaces/stateprops.md)
* [TextInputProps](interfaces/textinputprops.md)

### Type aliases

* [CountriesActionTypes](globals.md#countriesactiontypes)
* [JobActionTypes](globals.md#jobactiontypes)
* [LogObject](globals.md#logobject)
* [NotificationActionTypes](globals.md#notificationactiontypes)
* [NotificationProps](globals.md#notificationprops)
* [NotificationsProps](globals.md#notificationsprops)
* [Props](globals.md#props)
* [SearchActionTypes](globals.md#searchactiontypes)
* [State](globals.md#state)

### Variables

* [ADD_COUNTRY](globals.md#const-add_country)
* [ADD_NOTIFICATION](globals.md#const-add_notification)
* [ADD_SELECTED_COUNTRIES](globals.md#const-add_selected_countries)
* [REMOVE_NOTIFICATION](globals.md#const-remove_notification)
* [REMOVE_SELECTED_COUNTRIES](globals.md#const-remove_selected_countries)
* [SET_ALL_JOBS](globals.md#const-set_all_jobs)
* [SET_SEARCH](globals.md#const-set_search)
* [SET_SHOWN_JOBS](globals.md#const-set_shown_jobs)
* [branchOptions](globals.md#const-branchoptions)
* [contractOptions](globals.md#const-contractoptions)
* [facultyOptions](globals.md#const-facultyoptions)
* [languageOptions](globals.md#const-languageoptions)
* [log](globals.md#const-log)
* [notificationID](globals.md#let-notificationid)
* [rootReducer](globals.md#const-rootreducer)
* [scoreImages](globals.md#const-scoreimages)
* [store](globals.md#const-store)
* [whatOptions](globals.md#const-whatoptions)

### Functions

* [App](globals.md#const-app)
* [Dropdown](globals.md#const-dropdown)
* [Form](globals.md#const-form)
* [JobDetail](globals.md#const-jobdetail)
* [Map](globals.md#const-map)
* [Menu](globals.md#const-menu)
* [Modal](globals.md#const-modal)
* [Notification](globals.md#const-notification)
* [Notifications](globals.md#const-notifications)
* [Popup](globals.md#const-popup)
* [SearchBar](globals.md#const-searchbar)
* [Statistics](globals.md#const-statistics)
* [TextInput](globals.md#const-textinput)
* [addCountry](globals.md#const-addcountry)
* [addNotification](globals.md#const-addnotification)
* [addSelectedCountries](globals.md#const-addselectedcountries)
* [areCoordinatesInGeometry](globals.md#const-arecoordinatesingeometry)
* [bound](globals.md#bound)
* [convertGeoJsonToGeometries](globals.md#const-convertgeojsontogeometries)
* [countryLayer](globals.md#const-countrylayer)
* [countryLayerStyle](globals.md#const-countrylayerstyle)
* [createNotification](globals.md#createnotification)
* [createSelectOptions](globals.md#createselectoptions)
* [default](globals.md#default)
* [filterJobs](globals.md#const-filterjobs)
* [filterJobsByGeometry](globals.md#const-filterjobsbygeometry)
* [getCachedGeometry](globals.md#const-getcachedgeometry)
* [getJobsInGeometry](globals.md#const-getjobsingeometry)
* [mapDispatchToProps](globals.md#const-mapdispatchtoprops)
* [mapStateToProps](globals.md#const-mapstatetoprops)
* [polygonStyle](globals.md#const-polygonstyle)
* [removeFrom](globals.md#removefrom)
* [removeListFromList](globals.md#removelistfromlist)
* [removeNotification](globals.md#const-removenotification)
* [removeSelectedCountries](globals.md#const-removeselectedcountries)
* [setAllJobs](globals.md#const-setalljobs)
* [setSearch](globals.md#const-setsearch)
* [setShownJobs](globals.md#const-setshownjobs)

### Object literals

* [initialState](globals.md#const-initialstate)

## Type aliases

###  CountriesActionTypes

Ƭ **CountriesActionTypes**: *[AddSelectedCountriesAction](interfaces/addselectedcountriesaction.md) | [AddCountryAction](interfaces/addcountryaction.md) | [RemoveSelectedCountriesAction](interfaces/removeselectedcountriesaction.md)*

*Defined in [src/redux/countries/types.ts:26](https://github.com/chronark/atlas/blob/157126a/src/redux/countries/types.ts#L26)*

___

###  JobActionTypes

Ƭ **JobActionTypes**: *[SetAllJobsAction](interfaces/setalljobsaction.md) | [SetShowJobsAction](interfaces/setshowjobsaction.md)*

*Defined in [src/redux/jobs/types.ts:24](https://github.com/chronark/atlas/blob/157126a/src/redux/jobs/types.ts#L24)*

___

###  LogObject

Ƭ **LogObject**: *Record‹string, any› | number*

*Defined in [src/types/customTypes.ts:84](https://github.com/chronark/atlas/blob/157126a/src/types/customTypes.ts#L84)*

___

###  NotificationActionTypes

Ƭ **NotificationActionTypes**: *[AddNotificationAction](interfaces/addnotificationaction.md) | [RemoveNotificationAction](interfaces/removenotificationaction.md)*

*Defined in [src/redux/notifications/types.ts:24](https://github.com/chronark/atlas/blob/157126a/src/redux/notifications/types.ts#L24)*

___

###  NotificationProps

Ƭ **NotificationProps**: *StateProps & DispatchProps*

*Defined in [src/components/Notification.tsx:14](https://github.com/chronark/atlas/blob/157126a/src/components/Notification.tsx#L14)*

___

###  NotificationsProps

Ƭ **NotificationsProps**: *StateProps*

*Defined in [src/components/Notifications.tsx:13](https://github.com/chronark/atlas/blob/157126a/src/components/Notifications.tsx#L13)*

___

###  Props

Ƭ **Props**: *DispatchProps & StateProps*

*Defined in [src/components/Map.tsx:28](https://github.com/chronark/atlas/blob/157126a/src/components/Map.tsx#L28)*

*Defined in [src/components/SearchBar.tsx:15](https://github.com/chronark/atlas/blob/157126a/src/components/SearchBar.tsx#L15)*

*Defined in [src/components/Statistics.tsx:13](https://github.com/chronark/atlas/blob/157126a/src/components/Statistics.tsx#L13)*

*Defined in [src/components/App.tsx:27](https://github.com/chronark/atlas/blob/157126a/src/components/App.tsx#L27)*

*Defined in [src/components/JobDetail.tsx:5](https://github.com/chronark/atlas/blob/157126a/src/components/JobDetail.tsx#L5)*

###  job

• **job**: *[Job](interfaces/job.md)*

*Defined in [src/components/JobDetail.tsx:6](https://github.com/chronark/atlas/blob/157126a/src/components/JobDetail.tsx#L6)*

___

###  SearchActionTypes

Ƭ **SearchActionTypes**: *[SetSearchAction](interfaces/setsearchaction.md)*

*Defined in [src/redux/search/types.ts:12](https://github.com/chronark/atlas/blob/157126a/src/redux/search/types.ts#L12)*

___

###  State

Ƭ **State**: *ReturnType‹function›*

*Defined in [src/redux/index.ts:14](https://github.com/chronark/atlas/blob/157126a/src/redux/index.ts#L14)*

*Defined in [src/components/App.tsx:15](https://github.com/chronark/atlas/blob/157126a/src/components/App.tsx#L15)*

###  isFullsceen

• **isFullsceen**: *boolean*

*Defined in [src/components/App.tsx:17](https://github.com/chronark/atlas/blob/157126a/src/components/App.tsx#L17)*

###  modal

• **modal**: *object*

*Defined in [src/components/App.tsx:16](https://github.com/chronark/atlas/blob/157126a/src/components/App.tsx#L16)*

#### Type declaration:

* **isShowing**: *boolean*

## Variables

### `Const` ADD_COUNTRY

• **ADD_COUNTRY**: *"ADD_COUNTRY"* = "ADD_COUNTRY"

*Defined in [src/redux/countries/types.ts:9](https://github.com/chronark/atlas/blob/157126a/src/redux/countries/types.ts#L9)*

___

### `Const` ADD_NOTIFICATION

• **ADD_NOTIFICATION**: *"ADD_NOTIFICACTION"* = "ADD_NOTIFICACTION"

*Defined in [src/redux/notifications/types.ts:1](https://github.com/chronark/atlas/blob/157126a/src/redux/notifications/types.ts#L1)*

___

### `Const` ADD_SELECTED_COUNTRIES

• **ADD_SELECTED_COUNTRIES**: *"ADD_SELECTED_COUNTRIES"* = "ADD_SELECTED_COUNTRIES"

*Defined in [src/redux/countries/types.ts:10](https://github.com/chronark/atlas/blob/157126a/src/redux/countries/types.ts#L10)*

___

### `Const` REMOVE_NOTIFICATION

• **REMOVE_NOTIFICATION**: *"REMOVE_NOTIFICATION"* = "REMOVE_NOTIFICATION"

*Defined in [src/redux/notifications/types.ts:2](https://github.com/chronark/atlas/blob/157126a/src/redux/notifications/types.ts#L2)*

___

### `Const` REMOVE_SELECTED_COUNTRIES

• **REMOVE_SELECTED_COUNTRIES**: *"REMOVE_SELECTED_COUNTRIES"* = "REMOVE_SELECTED_COUNTRIES"

*Defined in [src/redux/countries/types.ts:11](https://github.com/chronark/atlas/blob/157126a/src/redux/countries/types.ts#L11)*

___

### `Const` SET_ALL_JOBS

• **SET_ALL_JOBS**: *"SET_ALL_JOBS"* = "SET_ALL_JOBS"

*Defined in [src/redux/jobs/types.ts:11](https://github.com/chronark/atlas/blob/157126a/src/redux/jobs/types.ts#L11)*

___

### `Const` SET_SEARCH

• **SET_SEARCH**: *"SET_SEARCH"* = "SET_SEARCH"

*Defined in [src/redux/search/types.ts:5](https://github.com/chronark/atlas/blob/157126a/src/redux/search/types.ts#L5)*

___

### `Const` SET_SHOWN_JOBS

• **SET_SHOWN_JOBS**: *"SET_SHOWN_JOBS"* = "SET_SHOWN_JOBS"

*Defined in [src/redux/jobs/types.ts:12](https://github.com/chronark/atlas/blob/157126a/src/redux/jobs/types.ts#L12)*

___

### `Const` branchOptions

• **branchOptions**: *string[]* =  [
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

*Defined in [src/components/Form.tsx:32](https://github.com/chronark/atlas/blob/157126a/src/components/Form.tsx#L32)*

___

### `Const` contractOptions

• **contractOptions**: *string[]* =  ["Befristet", "Festanstellung", "Freie Mitarbeit", "Projektarbeit", "Teilzeit", "Vollzeit"]

*Defined in [src/components/Form.tsx:81](https://github.com/chronark/atlas/blob/157126a/src/components/Form.tsx#L81)*

___

### `Const` facultyOptions

• **facultyOptions**: *string[]* =  [
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

*Defined in [src/components/Form.tsx:18](https://github.com/chronark/atlas/blob/157126a/src/components/Form.tsx#L18)*

___

### `Const` languageOptions

• **languageOptions**: *string[]* =  [
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

*Defined in [src/components/Form.tsx:82](https://github.com/chronark/atlas/blob/157126a/src/components/Form.tsx#L82)*

___

### `Const` log

• **log**: *[Logger](classes/logger.md)‹›* =  new Logger()

*Defined in [src/lib/logger.ts:59](https://github.com/chronark/atlas/blob/157126a/src/lib/logger.ts#L59)*

___

### `Let` notificationID

• **notificationID**: *number* = 0

*Defined in [src/redux/notifications/factory.ts:3](https://github.com/chronark/atlas/blob/157126a/src/redux/notifications/factory.ts#L3)*

___

### `Const` rootReducer

• **rootReducer**: *function* =  combineReducers({
  jobs: jobsReducer,
  notifications: notificationReducer,
  search: searchReducer,
  countries: countriesReducer,
})

*Defined in [src/redux/index.ts:7](https://github.com/chronark/atlas/blob/157126a/src/redux/index.ts#L7)*

#### Type declaration:

▸ (`state`: S | undefined, `action`: A): *S*

**Parameters:**

Name | Type |
------ | ------ |
`state` | S &#124; undefined |
`action` | A |

___

### `Const` scoreImages

• **scoreImages**: *"*.png"[]* =  [score1, score2, score3, score4, score5]

*Defined in [src/lib/imageLoader.ts:13](https://github.com/chronark/atlas/blob/157126a/src/lib/imageLoader.ts#L13)*

___

### `Const` store

• **store**: *Store‹object & object, [SetAllJobsAction](interfaces/setalljobsaction.md) | [SetShowJobsAction](interfaces/setshowjobsaction.md) | [AddNotificationAction](interfaces/addnotificationaction.md) | [RemoveNotificationAction](interfaces/removenotificationaction.md) | [SetSearchAction](interfaces/setsearchaction.md) | [AddSelectedCountriesAction](interfaces/addselectedcountriesaction.md) | [AddCountryAction](interfaces/addcountryaction.md) | [RemoveSelectedCountriesAction](interfaces/removeselectedcountriesaction.md)› & object* =  createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))

*Defined in [src/redux/store.ts:9](https://github.com/chronark/atlas/blob/157126a/src/redux/store.ts#L9)*

___

### `Const` whatOptions

• **whatOptions**: *string[]* =  [
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

*Defined in [src/components/Form.tsx:6](https://github.com/chronark/atlas/blob/157126a/src/components/Form.tsx#L6)*

## Functions

### `Const` App

▸ **App**(`props`: DispatchProps & StateProps & object): *Element‹›*

*Defined in [src/components/App.tsx:29](https://github.com/chronark/atlas/blob/157126a/src/components/App.tsx#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | DispatchProps & StateProps & object |

**Returns:** *Element‹›*

___

### `Const` Dropdown

▸ **Dropdown**(`props`: [DropdownProps](interfaces/dropdownprops.md) & object): *Element‹›*

*Defined in [src/components/Dropdown.tsx:19](https://github.com/chronark/atlas/blob/157126a/src/components/Dropdown.tsx#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [DropdownProps](interfaces/dropdownprops.md) & object |

**Returns:** *Element‹›*

___

### `Const` Form

▸ **Form**(): *Element‹›*

*Defined in [src/components/Form.tsx:177](https://github.com/chronark/atlas/blob/157126a/src/components/Form.tsx#L177)*

**Returns:** *Element‹›*

___

### `Const` JobDetail

▸ **JobDetail**(`props`: Props & object): *Element‹›*

*Defined in [src/components/JobDetail.tsx:9](https://github.com/chronark/atlas/blob/157126a/src/components/JobDetail.tsx#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | Props & object |

**Returns:** *Element‹›*

___

### `Const` Map

▸ **Map**(`props`: [StateProps](interfaces/stateprops.md) & [DispatchProps](interfaces/dispatchprops.md) & object): *Element‹›*

*Defined in [src/components/Map.tsx:29](https://github.com/chronark/atlas/blob/157126a/src/components/Map.tsx#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [StateProps](interfaces/stateprops.md) & [DispatchProps](interfaces/dispatchprops.md) & object |

**Returns:** *Element‹›*

###  constructor

\+ **new Map**(`mapID`: string): *[Map](globals.md#const-map)*

*Defined in [src/lib/map.ts:43](https://github.com/chronark/atlas/blob/157126a/src/lib/map.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`mapID` | string |

**Returns:** *[Map](globals.md#const-map)*

### `Private` clusterLayer

• **clusterLayer**: *[ClusterLayer](classes/clusterlayer.md)*

*Defined in [src/lib/map.ts:42](https://github.com/chronark/atlas/blob/157126a/src/lib/map.ts#L42)*

###  jobs

• **jobs**: *[Job](interfaces/job.md)[]*

*Defined in [src/lib/map.ts:39](https://github.com/chronark/atlas/blob/157126a/src/lib/map.ts#L39)*

### `Private` mapID

• **mapID**: *string*

*Defined in [src/lib/map.ts:40](https://github.com/chronark/atlas/blob/157126a/src/lib/map.ts#L40)*

###  olmap

• **olmap**: *[OLMap](classes/olmap.md)*

*Defined in [src/lib/map.ts:41](https://github.com/chronark/atlas/blob/157126a/src/lib/map.ts#L41)*

### `Private` zIndices

• **zIndices**: *Record‹string, number›*

*Defined in [src/lib/map.ts:43](https://github.com/chronark/atlas/blob/157126a/src/lib/map.ts#L43)*

### `Private` addCircleSelect

▸ **addCircleSelect**(): *void*

*Defined in [src/lib/map.ts:165](https://github.com/chronark/atlas/blob/157126a/src/lib/map.ts#L165)*

**Returns:** *void*

### `Private` addControls

▸ **addControls**(): *any*

*Defined in [src/lib/map.ts:127](https://github.com/chronark/atlas/blob/157126a/src/lib/map.ts#L127)*

**Returns:** *any*

###  addCountryLayer

▸ **addCountryLayer**(): *void*

*Defined in [src/lib/map.ts:76](https://github.com/chronark/atlas/blob/157126a/src/lib/map.ts#L76)*

**Returns:** *void*

###  addVectorLayer

▸ **addVectorLayer**(`name`: string, `layer`: VectorLayer, `map`: Map‹›): *VectorLayer*

*Defined in [src/lib/map.ts:70](https://github.com/chronark/atlas/blob/157126a/src/lib/map.ts#L70)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`name` | string | - |
`layer` | VectorLayer | - |
`map` | Map‹› |  this.olmap |

**Returns:** *VectorLayer*

### `Private` applyMapboxStyle

▸ **applyMapboxStyle**(`mapboxLayer`: VectorTileLayer): *Promise‹void›*

*Defined in [src/lib/map.ts:331](https://github.com/chronark/atlas/blob/157126a/src/lib/map.ts#L331)*

**Parameters:**

Name | Type |
------ | ------ |
`mapboxLayer` | VectorTileLayer |

**Returns:** *Promise‹void›*

### `Private` buildClusterLayer

▸ **buildClusterLayer**(): *void*

*Defined in [src/lib/map.ts:343](https://github.com/chronark/atlas/blob/157126a/src/lib/map.ts#L343)*

**Returns:** *void*

### `Private` buildMap

▸ **buildMap**(): *[OLMap](classes/olmap.md)*

*Defined in [src/lib/map.ts:288](https://github.com/chronark/atlas/blob/157126a/src/lib/map.ts#L288)*

**Returns:** *[OLMap](classes/olmap.md)*

### `Private` circleSelectRemoveButton

▸ **circleSelectRemoveButton**(): *void*

*Defined in [src/lib/map.ts:137](https://github.com/chronark/atlas/blob/157126a/src/lib/map.ts#L137)*

**Returns:** *void*

### `Private` clearSource

▸ **clearSource**(`layer`: VectorLayer): *VectorLayer*

*Defined in [src/lib/map.ts:231](https://github.com/chronark/atlas/blob/157126a/src/lib/map.ts#L231)*

**Parameters:**

Name | Type |
------ | ------ |
`layer` | VectorLayer |

**Returns:** *VectorLayer*

###  countryLayerFromGeometry

▸ **countryLayerFromGeometry**(`geometry`: Record‹string, any›[]): *VectorLayer*

*Defined in [src/lib/map.ts:80](https://github.com/chronark/atlas/blob/157126a/src/lib/map.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`geometry` | Record‹string, any›[] |

**Returns:** *VectorLayer*

###  featureLayerFromGeoJson

▸ **featureLayerFromGeoJson**(`geojson`: [GeocodingResponseObject](interfaces/geocodingresponseobject.md)): *VectorLayer*

*Defined in [src/lib/map.ts:103](https://github.com/chronark/atlas/blob/157126a/src/lib/map.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`geojson` | [GeocodingResponseObject](interfaces/geocodingresponseobject.md) |

**Returns:** *VectorLayer*

### `Private` getDrawLayer

▸ **getDrawLayer**(`__namedParameters`: object): *VectorLayer*

*Defined in [src/lib/map.ts:217](https://github.com/chronark/atlas/blob/157126a/src/lib/map.ts#L217)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*=  {}

Name | Type | Default |
------ | ------ | ------ |
`clear` | boolean | false |

**Returns:** *VectorLayer*

### `Private` getLayersByNames

▸ **getLayersByNames**(`names`: string[]): *BaseLayer[]*

*Defined in [src/lib/map.ts:258](https://github.com/chronark/atlas/blob/157126a/src/lib/map.ts#L258)*

**Parameters:**

Name | Type |
------ | ------ |
`names` | string[] |

**Returns:** *BaseLayer[]*

### `Private` getOrCreateLayer

▸ **getOrCreateLayer**(`name`: string, `opts`: Record‹string, any›): *[VectorLayer, boolean]*

*Defined in [src/lib/map.ts:269](https://github.com/chronark/atlas/blob/157126a/src/lib/map.ts#L269)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`opts` | Record‹string, any› |

**Returns:** *[VectorLayer, boolean]*

### `Private` getRadius

▸ **getRadius**(`circle`: Feature): *number*

*Defined in [src/lib/map.ts:238](https://github.com/chronark/atlas/blob/157126a/src/lib/map.ts#L238)*

**Parameters:**

Name | Type |
------ | ------ |
`circle` | Feature |

**Returns:** *number*

### `Private` handleCircleSelectEvents

▸ **handleCircleSelectEvents**(`draw`: Draw, `modify`: Modify): *void*

*Defined in [src/lib/map.ts:186](https://github.com/chronark/atlas/blob/157126a/src/lib/map.ts#L186)*

**Parameters:**

Name | Type |
------ | ------ |
`draw` | Draw |
`modify` | Modify |

**Returns:** *void*

###  loadJobs

▸ **loadJobs**(): *void*

*Defined in [src/lib/map.ts:64](https://github.com/chronark/atlas/blob/157126a/src/lib/map.ts#L64)*

**Returns:** *void*

### `Private` makeFeatureFromCircle

▸ **makeFeatureFromCircle**(`circleFeature`: Feature): *Feature*

*Defined in [src/lib/map.ts:242](https://github.com/chronark/atlas/blob/157126a/src/lib/map.ts#L242)*

**Parameters:**

Name | Type |
------ | ------ |
`circleFeature` | Feature |

**Returns:** *Feature*

### `Private` removeLayersByNames

▸ **removeLayersByNames**(`names`: string[]): *void*

*Defined in [src/lib/map.ts:148](https://github.com/chronark/atlas/blob/157126a/src/lib/map.ts#L148)*

**Parameters:**

Name | Type |
------ | ------ |
`names` | string[] |

**Returns:** *void*

###  setJobs

▸ **setJobs**(`jobs`: [Job](interfaces/job.md)[]): *void*

*Defined in [src/lib/map.ts:349](https://github.com/chronark/atlas/blob/157126a/src/lib/map.ts#L349)*

**Parameters:**

Name | Type |
------ | ------ |
`jobs` | [Job](interfaces/job.md)[] |

**Returns:** *void*

### `Private` setView

▸ **setView**(`lon`: number, `lat`: number, `zoom`: number): *void*

*Defined in [src/lib/map.ts:355](https://github.com/chronark/atlas/blob/157126a/src/lib/map.ts#L355)*

**Parameters:**

Name | Type |
------ | ------ |
`lon` | number |
`lat` | number |
`zoom` | number |

**Returns:** *void*

### `Private` zoomTo

▸ **zoomTo**(`center`: number[], `zoom`: number): *void*

*Defined in [src/lib/map.ts:157](https://github.com/chronark/atlas/blob/157126a/src/lib/map.ts#L157)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`center` | number[] | - |
`zoom` | number | 16 |

**Returns:** *void*

###  zoomToBBox

▸ **zoomToBBox**(`bbox`: [number, number, number, number]): *void*

*Defined in [src/lib/map.ts:365](https://github.com/chronark/atlas/blob/157126a/src/lib/map.ts#L365)*

**Parameters:**

Name | Type |
------ | ------ |
`bbox` | [number, number, number, number] |

**Returns:** *void*

###  zoomToLayer

▸ **zoomToLayer**(`layer`: VectorLayer): *void*

*Defined in [src/lib/map.ts:360](https://github.com/chronark/atlas/blob/157126a/src/lib/map.ts#L360)*

**Parameters:**

Name | Type |
------ | ------ |
`layer` | VectorLayer |

**Returns:** *void*

___

### `Const` Menu

▸ **Menu**(`props`: [MenuProps](interfaces/menuprops.md) & object): *Element‹›*

*Defined in [src/components/Menu.tsx:11](https://github.com/chronark/atlas/blob/157126a/src/components/Menu.tsx#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [MenuProps](interfaces/menuprops.md) & object |

**Returns:** *Element‹›*

___

### `Const` Modal

▸ **Modal**(`props`: [ModalProps](interfaces/modalprops.md) & object): *null | Element‹›*

*Defined in [src/components/Modal.tsx:9](https://github.com/chronark/atlas/blob/157126a/src/components/Modal.tsx#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [ModalProps](interfaces/modalprops.md) & object |

**Returns:** *null | Element‹›*

___

### `Const` Notification

▸ **Notification**(`props`: StateProps & DispatchProps & object): *Element‹›*

*Defined in [src/components/Notification.tsx:16](https://github.com/chronark/atlas/blob/157126a/src/components/Notification.tsx#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | StateProps & DispatchProps & object |

**Returns:** *Element‹›*

___

### `Const` Notifications

▸ **Notifications**(`props`: StateProps & object): *Element‹›*

*Defined in [src/components/Notifications.tsx:15](https://github.com/chronark/atlas/blob/157126a/src/components/Notifications.tsx#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | StateProps & object |

**Returns:** *Element‹›*

___

### `Const` Popup

▸ **Popup**(): *Element‹›*

*Defined in [src/components/Popup.tsx:3](https://github.com/chronark/atlas/blob/157126a/src/components/Popup.tsx#L3)*

**Returns:** *Element‹›*

___

### `Const` SearchBar

▸ **SearchBar**(`props`: StateProps & DispatchProps & [OwnProps](interfaces/ownprops.md) & object): *Element‹›*

*Defined in [src/components/SearchBar.tsx:17](https://github.com/chronark/atlas/blob/157126a/src/components/SearchBar.tsx#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | StateProps & DispatchProps & [OwnProps](interfaces/ownprops.md) & object |

**Returns:** *Element‹›*

___

### `Const` Statistics

▸ **Statistics**(`props`: StateProps & object): *Element‹›*

*Defined in [src/components/Statistics.tsx:15](https://github.com/chronark/atlas/blob/157126a/src/components/Statistics.tsx#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | StateProps & object |

**Returns:** *Element‹›*

___

### `Const` TextInput

▸ **TextInput**(`props`: [TextInputProps](interfaces/textinputprops.md) & object): *Element‹›*

*Defined in [src/components/TextInput.tsx:8](https://github.com/chronark/atlas/blob/157126a/src/components/TextInput.tsx#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [TextInputProps](interfaces/textinputprops.md) & object |

**Returns:** *Element‹›*

___

### `Const` addCountry

▸ **addCountry**(`country`: Record‹string, any›): *[AddCountryAction](interfaces/addcountryaction.md)*

*Defined in [src/redux/countries/actions.ts:17](https://github.com/chronark/atlas/blob/157126a/src/redux/countries/actions.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`country` | Record‹string, any› |

**Returns:** *[AddCountryAction](interfaces/addcountryaction.md)*

___

### `Const` addNotification

▸ **addNotification**(`level`: string, `content`: string): *[AddNotificationAction](interfaces/addnotificationaction.md)*

*Defined in [src/redux/notifications/actions.ts:4](https://github.com/chronark/atlas/blob/157126a/src/redux/notifications/actions.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`level` | string |
`content` | string |

**Returns:** *[AddNotificationAction](interfaces/addnotificationaction.md)*

___

### `Const` addSelectedCountries

▸ **addSelectedCountries**(`countries`: Record‹string, any›[]): *[AddSelectedCountriesAction](interfaces/addselectedcountriesaction.md)*

*Defined in [src/redux/countries/actions.ts:14](https://github.com/chronark/atlas/blob/157126a/src/redux/countries/actions.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`countries` | Record‹string, any›[] |

**Returns:** *[AddSelectedCountriesAction](interfaces/addselectedcountriesaction.md)*

___

### `Const` areCoordinatesInGeometry

▸ **areCoordinatesInGeometry**(`lonLat`: [number, number], `geometry`: Record‹string, any›, `checkExtentFirst`: boolean): *boolean*

*Defined in [src/lib/geometry.ts:7](https://github.com/chronark/atlas/blob/157126a/src/lib/geometry.ts#L7)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`lonLat` | [number, number] | - |
`geometry` | Record‹string, any› | - |
`checkExtentFirst` | boolean | true |

**Returns:** *boolean*

___

###  bound

▸ **bound**(`lower`: number, `value`: number, `upper`: number): *number*

*Defined in [src/lib/util.ts:42](https://github.com/chronark/atlas/blob/157126a/src/lib/util.ts#L42)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`lower` | number | - |
`value` | number | - |
`upper` | number |   |

**Returns:** *number*

___

### `Const` convertGeoJsonToGeometries

▸ **convertGeoJsonToGeometries**(`geojson`: Record‹string, any›): *undefined | object[]*

*Defined in [src/lib/countryLayer.ts:12](https://github.com/chronark/atlas/blob/157126a/src/lib/countryLayer.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`geojson` | Record‹string, any› |

**Returns:** *undefined | object[]*

___

### `Const` countryLayer

▸ **countryLayer**(`map`: [Map](globals.md#const-map)): *void*

*Defined in [src/lib/countryLayer.ts:26](https://github.com/chronark/atlas/blob/157126a/src/lib/countryLayer.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`map` | [Map](globals.md#const-map) |

**Returns:** *void*

___

### `Const` countryLayerStyle

▸ **countryLayerStyle**(`__namedParameters`: object): *Style*

*Defined in [src/styles/countryStyle.ts:5](https://github.com/chronark/atlas/blob/157126a/src/styles/countryStyle.ts#L5)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*=  {}

Name | Type | Default |
------ | ------ | ------ |
`isSelected` | boolean | false |

**Returns:** *Style*

___

###  createNotification

▸ **createNotification**(`options`: object): *[Notification](interfaces/notification.md)*

*Defined in [src/redux/notifications/factory.ts:7](https://github.com/chronark/atlas/blob/157126a/src/redux/notifications/factory.ts#L7)*

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`content` | string |
`level` | string |

**Returns:** *[Notification](interfaces/notification.md)*

___

###  createSelectOptions

▸ **createSelectOptions**(`options`: string[]): *Element[]*

*Defined in [src/components/Dropdown.tsx:6](https://github.com/chronark/atlas/blob/157126a/src/components/Dropdown.tsx#L6)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | string[] |   |

**Returns:** *Element[]*

___

###  default

▸ **default**(`state`: [JobState](interfaces/jobstate.md), `action`: [JobActionTypes](globals.md#jobactiontypes)): *[JobState](interfaces/jobstate.md)*

*Defined in [src/redux/jobs/reducer.ts:9](https://github.com/chronark/atlas/blob/157126a/src/redux/jobs/reducer.ts#L9)*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`state` | [JobState](interfaces/jobstate.md) |  initialState | - |
`action` | [JobActionTypes](globals.md#jobactiontypes) | - |   |

**Returns:** *[JobState](interfaces/jobstate.md)*

___

### `Const` filterJobs

▸ **filterJobs**(`jobs`: [Job](interfaces/job.md)[], `filter`: object): *[Job](interfaces/job.md)[]*

*Defined in [src/lib/jobFilter.ts:37](https://github.com/chronark/atlas/blob/157126a/src/lib/jobFilter.ts#L37)*

**Parameters:**

▪ **jobs**: *[Job](interfaces/job.md)[]*

▪ **filter**: *object*

Name | Type |
------ | ------ |
`circle?` | Record‹string, any› |
`countries?` | Record‹string, any›[] |

**Returns:** *[Job](interfaces/job.md)[]*

___

### `Const` filterJobsByGeometry

▸ **filterJobsByGeometry**(`jobs`: [Job](interfaces/job.md)[], `geometry`: Record‹string, any›[]): *[Job](interfaces/job.md)[]*

*Defined in [src/lib/jobFilter.ts:30](https://github.com/chronark/atlas/blob/157126a/src/lib/jobFilter.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`jobs` | [Job](interfaces/job.md)[] |
`geometry` | Record‹string, any›[] |

**Returns:** *[Job](interfaces/job.md)[]*

___

### `Const` getCachedGeometry

▸ **getCachedGeometry**(`event`: any): *Record‹string, any›*

*Defined in [src/lib/countryLayer.ts:18](https://github.com/chronark/atlas/blob/157126a/src/lib/countryLayer.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | any |

**Returns:** *Record‹string, any›*

___

### `Const` getJobsInGeometry

▸ **getJobsInGeometry**(`jobs`: [Job](interfaces/job.md)[], `geometry`: Record‹string, any›[]): *[Job](interfaces/job.md)[]*

*Defined in [src/lib/jobFilter.ts:10](https://github.com/chronark/atlas/blob/157126a/src/lib/jobFilter.ts#L10)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`jobs` | [Job](interfaces/job.md)[] | - |
`geometry` | Record‹string, any›[] |   |

**Returns:** *[Job](interfaces/job.md)[]*

___

### `Const` mapDispatchToProps

▸ **mapDispatchToProps**(`dispatch`: ThunkDispatch‹__type, __type, any›): *[DispatchProps](interfaces/dispatchprops.md)*

*Defined in [src/components/Map.tsx:105](https://github.com/chronark/atlas/blob/157126a/src/components/Map.tsx#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`dispatch` | ThunkDispatch‹__type, __type, any› |

**Returns:** *[DispatchProps](interfaces/dispatchprops.md)*

▸ **mapDispatchToProps**(`dispatch`: any): *DispatchProps*

*Defined in [src/components/SearchBar.tsx:88](https://github.com/chronark/atlas/blob/157126a/src/components/SearchBar.tsx#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`dispatch` | any |

**Returns:** *DispatchProps*

▸ **mapDispatchToProps**(`dispatch`: any): *DispatchProps*

*Defined in [src/components/Notification.tsx:56](https://github.com/chronark/atlas/blob/157126a/src/components/Notification.tsx#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`dispatch` | any |

**Returns:** *DispatchProps*

▸ **mapDispatchToProps**(`dispatch`: any): *DispatchProps*

*Defined in [src/components/App.tsx:69](https://github.com/chronark/atlas/blob/157126a/src/components/App.tsx#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`dispatch` | any |

**Returns:** *DispatchProps*

___

### `Const` mapStateToProps

▸ **mapStateToProps**(`state`: [StateProps](interfaces/stateprops.md)): *[StateProps](interfaces/stateprops.md)*

*Defined in [src/components/Map.tsx:99](https://github.com/chronark/atlas/blob/157126a/src/components/Map.tsx#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | [StateProps](interfaces/stateprops.md) |

**Returns:** *[StateProps](interfaces/stateprops.md)*

▸ **mapStateToProps**(`state`: StateProps): *StateProps*

*Defined in [src/components/SearchBar.tsx:84](https://github.com/chronark/atlas/blob/157126a/src/components/SearchBar.tsx#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | StateProps |

**Returns:** *StateProps*

▸ **mapStateToProps**(`state`: StateProps): *StateProps*

*Defined in [src/components/Notifications.tsx:34](https://github.com/chronark/atlas/blob/157126a/src/components/Notifications.tsx#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | StateProps |

**Returns:** *StateProps*

▸ **mapStateToProps**(`state`: StateProps): *StateProps*

*Defined in [src/components/Statistics.tsx:30](https://github.com/chronark/atlas/blob/157126a/src/components/Statistics.tsx#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | StateProps |

**Returns:** *StateProps*

▸ **mapStateToProps**(`state`: StateProps): *StateProps*

*Defined in [src/components/App.tsx:73](https://github.com/chronark/atlas/blob/157126a/src/components/App.tsx#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | StateProps |

**Returns:** *StateProps*

___

### `Const` polygonStyle

▸ **polygonStyle**(`__namedParameters`: object): *Style*

*Defined in [src/styles/polygon.ts:5](https://github.com/chronark/atlas/blob/157126a/src/styles/polygon.ts#L5)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*=  {}

Name | Type | Default |
------ | ------ | ------ |
`isSelected` | boolean | false |

**Returns:** *Style*

___

###  removeFrom

▸ **removeFrom**(`list`: any[], `entry`: any): *any[]*

*Defined in [src/lib/util.ts:8](https://github.com/chronark/atlas/blob/157126a/src/lib/util.ts#L8)*

Remove an item from a list.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`list` | any[] | A list of items. |
`entry` | any | A single item. |

**Returns:** *any[]*

List without entry.

___

###  removeListFromList

▸ **removeListFromList**(`list1`: any[], `list2`: any[]): *any[]*

*Defined in [src/lib/util.ts:21](https://github.com/chronark/atlas/blob/157126a/src/lib/util.ts#L21)*

Remove every item in list1 from list2.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`list1` | any[] | A subset of list2. |
`list2` | any[] | A list of items. |

**Returns:** *any[]*

List2 without all items present in list1.

___

### `Const` removeNotification

▸ **removeNotification**(`id`: number): *[RemoveNotificationAction](interfaces/removenotificationaction.md)*

*Defined in [src/redux/notifications/actions.ts:11](https://github.com/chronark/atlas/blob/157126a/src/redux/notifications/actions.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |

**Returns:** *[RemoveNotificationAction](interfaces/removenotificationaction.md)*

___

### `Const` removeSelectedCountries

▸ **removeSelectedCountries**(`countries`: Record‹string, any›[]): *[RemoveSelectedCountriesAction](interfaces/removeselectedcountriesaction.md)*

*Defined in [src/redux/countries/actions.ts:20](https://github.com/chronark/atlas/blob/157126a/src/redux/countries/actions.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`countries` | Record‹string, any›[] |

**Returns:** *[RemoveSelectedCountriesAction](interfaces/removeselectedcountriesaction.md)*

___

### `Const` setAllJobs

▸ **setAllJobs**(`jobs`: [Job](interfaces/job.md)[]): *[SetAllJobsAction](interfaces/setalljobsaction.md)*

*Defined in [src/redux/jobs/actions.ts:12](https://github.com/chronark/atlas/blob/157126a/src/redux/jobs/actions.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`jobs` | [Job](interfaces/job.md)[] |

**Returns:** *[SetAllJobsAction](interfaces/setalljobsaction.md)*

___

### `Const` setSearch

▸ **setSearch**(`search`: string): *[SetSearchAction](interfaces/setsearchaction.md)*

*Defined in [src/redux/search/actions.ts:3](https://github.com/chronark/atlas/blob/157126a/src/redux/search/actions.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`search` | string |

**Returns:** *[SetSearchAction](interfaces/setsearchaction.md)*

___

### `Const` setShownJobs

▸ **setShownJobs**(`jobs`: [Job](interfaces/job.md)[]): *[SetShowJobsAction](interfaces/setshowjobsaction.md)*

*Defined in [src/redux/jobs/actions.ts:8](https://github.com/chronark/atlas/blob/157126a/src/redux/jobs/actions.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`jobs` | [Job](interfaces/job.md)[] |

**Returns:** *[SetShowJobsAction](interfaces/setshowjobsaction.md)*

## Object literals

### `Const` initialState

### ▪ **initialState**: *object*

*Defined in [src/redux/jobs/reducer.ts:6](https://github.com/chronark/atlas/blob/157126a/src/redux/jobs/reducer.ts#L6)*

*Defined in [src/redux/notifications/reducer.ts:3](https://github.com/chronark/atlas/blob/157126a/src/redux/notifications/reducer.ts#L3)*

*Defined in [src/redux/search/reducer.ts:3](https://github.com/chronark/atlas/blob/157126a/src/redux/search/reducer.ts#L3)*

*Defined in [src/redux/countries/reducer.ts:13](https://github.com/chronark/atlas/blob/157126a/src/redux/countries/reducer.ts#L13)*

*Defined in [src/redux/store.ts:7](https://github.com/chronark/atlas/blob/157126a/src/redux/store.ts#L7)*

###  allCountries

• **allCountries**: *never[]* =  []

*Defined in [src/redux/countries/reducer.ts:15](https://github.com/chronark/atlas/blob/157126a/src/redux/countries/reducer.ts#L15)*

###  allJobs

• **allJobs**: *never[]* =  []

*Defined in [src/redux/jobs/reducer.ts:7](https://github.com/chronark/atlas/blob/157126a/src/redux/jobs/reducer.ts#L7)*

###  notifications

• **notifications**: *never[]* =  []

*Defined in [src/redux/notifications/reducer.ts:3](https://github.com/chronark/atlas/blob/157126a/src/redux/notifications/reducer.ts#L3)*

###  query

• **query**: *string* = ""

*Defined in [src/redux/search/reducer.ts:4](https://github.com/chronark/atlas/blob/157126a/src/redux/search/reducer.ts#L4)*

###  selectedCountries

• **selectedCountries**: *never[]* =  []

*Defined in [src/redux/countries/reducer.ts:14](https://github.com/chronark/atlas/blob/157126a/src/redux/countries/reducer.ts#L14)*

###  shownJobs

• **shownJobs**: *never[]* =  []

*Defined in [src/redux/jobs/reducer.ts:8](https://github.com/chronark/atlas/blob/157126a/src/redux/jobs/reducer.ts#L8)*
