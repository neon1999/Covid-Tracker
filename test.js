document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector(".loader-wrapper").style.visibility = "visible";
  } else {
    document.querySelector(".loader-wrapper").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
    document.querySelector("body").style.visibility = "visible";
  }
};

country = [
  {
    name: "Afghanistan",
    dial_code: "+93",
    code: "AF",
  },
  {
    name: "Anguilla",
    dial_code: "+1264",
    code: "AI",
  },
  {
    name: "Antarctica",
    dial_code: "+672",
    code: "AQ",
  },
  {
    name: "Antigua-and-Barbuda",
    dial_code: "+1268",
    code: "AG",
  },
  {
    name: "Argentina",
    dial_code: "+54",
    code: "AR",
  },
  {
    name: "Armenia",
    dial_code: "+374",
    code: "AM",
  },
  {
    name: "Aruba",
    dial_code: "+297",
    code: "AW",
  },
  {
    name: "Australia",
    dial_code: "+61",
    code: "AU",
  },
  {
    name: "Austria",
    dial_code: "+43",
    code: "AT",
  },
  {
    name: "Azerbaijan",
    dial_code: "+994",
    code: "AZ",
  },
  {
    name: "Bahamas",
    dial_code: "+1242",
    code: "BS",
  },
  {
    name: "Bahrain",
    dial_code: "+973",
    code: "BH",
  },
  {
    name: "Bangladesh",
    dial_code: "+880",
    code: "BD",
  },
  {
    name: "Barbados",
    dial_code: "+1246",
    code: "BB",
  },
  {
    name: "Belarus",
    dial_code: "+375",
    code: "BY",
  },
  {
    name: "Belgium",
    dial_code: "+32",
    code: "BE",
  },
  {
    name: "Belize",
    dial_code: "+501",
    code: "BZ",
  },
  {
    name: "Benin",
    dial_code: "+229",
    code: "BJ",
  },
  {
    name: "Bermuda",
    dial_code: "+1441",
    code: "BM",
  },
  {
    name: "Bhutan",
    dial_code: "+975",
    code: "BT",
  },
  {
    name: "Bolivia, Plurinational State of bolivia",
    dial_code: "+591",
    code: "BO",
  },
  {
    name: "Bosnia and Herzegovina",
    dial_code: "+387",
    code: "BA",
  },
  {
    name: "Botswana",
    dial_code: "+267",
    code: "BW",
  },
  {
    name: "Brazil",
    dial_code: "+55",
    code: "BR",
  },
  {
    name: "British Indian Ocean Territory",
    dial_code: "+246",
    code: "IO",
  },
  {
    name: "Brunei Darussalam",
    dial_code: "+673",
    code: "BN",
  },
  {
    name: "Bulgaria",
    dial_code: "+359",
    code: "BG",
  },
  {
    name: "Burkina Faso",
    dial_code: "+226",
    code: "BF",
  },
  {
    name: "Burundi",
    dial_code: "+257",
    code: "BI",
  },
  {
    name: "Cambodia",
    dial_code: "+855",
    code: "KH",
  },
  {
    name: "Cameroon",
    dial_code: "+237",
    code: "CM",
  },
  {
    name: "Canada",
    dial_code: "+1",
    code: "CA",
  },
  {
    name: "Cape Verde",
    dial_code: "+238",
    code: "CV",
  },
  {
    name: "Cayman Islands",
    dial_code: "+ 345",
    code: "KY",
  },
  {
    name: "Central African Republic",
    dial_code: "+236",
    code: "CF",
  },
  {
    name: "Chad",
    dial_code: "+235",
    code: "TD",
  },
  {
    name: "Chile",
    dial_code: "+56",
    code: "CL",
  },
  {
    name: "China",
    dial_code: "+86",
    code: "CN",
  },
  {
    name: "Christmas Island",
    dial_code: "+61",
    code: "CX",
  },
  {
    name: "Cocos (Keeling) Islands",
    dial_code: "+61",
    code: "CC",
  },
  {
    name: "Colombia",
    dial_code: "+57",
    code: "CO",
  },
  {
    name: "Comoros",
    dial_code: "+269",
    code: "KM",
  },
  {
    name: "Congo",
    dial_code: "+242",
    code: "CG",
  },
  {
    name: "Congo, The Democratic Republic of the Congo",
    dial_code: "+243",
    code: "CD",
  },
  {
    name: "Cook Islands",
    dial_code: "+682",
    code: "CK",
  },
  {
    name: "Costa Rica",
    dial_code: "+506",
    code: "CR",
  },
  {
    name: "Cote d'Ivoire",
    dial_code: "+225",
    code: "CI",
  },
  {
    name: "Croatia",
    dial_code: "+385",
    code: "HR",
  },
  {
    name: "Cuba",
    dial_code: "+53",
    code: "CU",
  },
  {
    name: "Cyprus",
    dial_code: "+357",
    code: "CY",
  },
  {
    name: "Czech Republic",
    dial_code: "+420",
    code: "CZ",
  },
  {
    name: "Denmark",
    dial_code: "+45",
    code: "DK",
  },
  {
    name: "Djibouti",
    dial_code: "+253",
    code: "DJ",
  },
  {
    name: "Dominica",
    dial_code: "+1767",
    code: "DM",
  },
  {
    name: "Dominican Republic",
    dial_code: "+1849",
    code: "DO",
  },
  {
    name: "Ecuador",
    dial_code: "+593",
    code: "EC",
  },
  {
    name: "Egypt",
    dial_code: "+20",
    code: "EG",
  },
  {
    name: "El Salvador",
    dial_code: "+503",
    code: "SV",
  },
  {
    name: "Equatorial Guinea",
    dial_code: "+240",
    code: "GQ",
  },
  {
    name: "Eritrea",
    dial_code: "+291",
    code: "ER",
  },
  {
    name: "Estonia",
    dial_code: "+372",
    code: "EE",
  },
  {
    name: "Ethiopia",
    dial_code: "+251",
    code: "ET",
  },
  {
    name: "Falkland Islands (Malvinas)",
    dial_code: "+500",
    code: "FK",
  },
  {
    name: "Faroe Islands",
    dial_code: "+298",
    code: "FO",
  },
  {
    name: "Fiji",
    dial_code: "+679",
    code: "FJ",
  },
  {
    name: "Finland",
    dial_code: "+358",
    code: "FI",
  },
  {
    name: "France",
    dial_code: "+33",
    code: "FR",
  },
  {
    name: "French Guiana",
    dial_code: "+594",
    code: "GF",
  },
  {
    name: "French Polynesia",
    dial_code: "+689",
    code: "PF",
  },
  {
    name: "Gabon",
    dial_code: "+241",
    code: "GA",
  },
  {
    name: "Gambia",
    dial_code: "+220",
    code: "GM",
  },
  {
    name: "Georgia",
    dial_code: "+995",
    code: "GE",
  },
  {
    name: "Germany",
    dial_code: "+49",
    code: "DE",
  },
  {
    name: "Ghana",
    dial_code: "+233",
    code: "GH",
  },
  {
    name: "Gibraltar",
    dial_code: "+350",
    code: "GI",
  },
  {
    name: "Greece",
    dial_code: "+30",
    code: "GR",
  },
  {
    name: "Greenland",
    dial_code: "+299",
    code: "GL",
  },
  {
    name: "Grenada",
    dial_code: "+1473",
    code: "GD",
  },
  {
    name: "Guadeloupe",
    dial_code: "+590",
    code: "GP",
  },
  {
    name: "Guam",
    dial_code: "+1671",
    code: "GU",
  },
  {
    name: "Guatemala",
    dial_code: "+502",
    code: "GT",
  },
  {
    name: "Guernsey",
    dial_code: "+44",
    code: "GG",
  },
  {
    name: "Guinea",
    dial_code: "+224",
    code: "GN",
  },
  {
    name: "Guinea-Bissau",
    dial_code: "+245",
    code: "GW",
  },
  {
    name: "Guyana",
    dial_code: "+592",
    code: "GY",
  },
  {
    name: "Haiti",
    dial_code: "+509",
    code: "HT",
  },
  {
    name: "Holy See (Vatican City State)",
    dial_code: "+379",
    code: "VA",
  },
  {
    name: "Honduras",
    dial_code: "+504",
    code: "HN",
  },
  {
    name: "Hong Kong",
    dial_code: "+852",
    code: "HK",
  },
  {
    name: "Hungary",
    dial_code: "+36",
    code: "HU",
  },
  {
    name: "Iceland",
    dial_code: "+354",
    code: "IS",
  },
  {
    name: "India",
    dial_code: "+91",
    code: "IN",
  },
  {
    name: "Indonesia",
    dial_code: "+62",
    code: "ID",
  },
  {
    name: "Iran",
    dial_code: "+98",
    code: "IR",
  },
  {
    name: "Iraq",
    dial_code: "+964",
    code: "IQ",
  },
  {
    name: "Ireland",
    dial_code: "+353",
    code: "IE",
  },
  {
    name: "Isle of Man",
    dial_code: "+44",
    code: "IM",
  },
  {
    name: "Israel",
    dial_code: "+972",
    code: "IL",
  },
  {
    name: "Italy",
    dial_code: "+39",
    code: "IT",
  },
  {
    name: "Jamaica",
    dial_code: "+1876",
    code: "JM",
  },
  {
    name: "Japan",
    dial_code: "+81",
    code: "JP",
  },
  {
    name: "Jersey",
    dial_code: "+44",
    code: "JE",
  },
  {
    name: "Jordan",
    dial_code: "+962",
    code: "JO",
  },
  {
    name: "Kazakhstan",
    dial_code: "+7",
    code: "KZ",
  },
  {
    name: "Kenya",
    dial_code: "+254",
    code: "KE",
  },
  {
    name: "Kiribati",
    dial_code: "+686",
    code: "KI",
  },
  {
    name: "Korea, Democratic People's Republic of Korea",
    dial_code: "+850",
    code: "KP",
  },
  {
    name: "Korea, Republic of South Korea",
    dial_code: "+82",
    code: "KR",
  },
  {
    name: "Kuwait",
    dial_code: "+965",
    code: "KW",
  },
  {
    name: "Kyrgyzstan",
    dial_code: "+996",
    code: "KG",
  },
  {
    name: "Laos",
    dial_code: "+856",
    code: "LA",
  },
  {
    name: "Latvia",
    dial_code: "+371",
    code: "LV",
  },
  {
    name: "Lebanon",
    dial_code: "+961",
    code: "LB",
  },
  {
    name: "Lesotho",
    dial_code: "+266",
    code: "LS",
  },
  {
    name: "Liberia",
    dial_code: "+231",
    code: "LR",
  },
  {
    name: "Libyan Arab Jamahiriya",
    dial_code: "+218",
    code: "LY",
  },
  {
    name: "Liechtenstein",
    dial_code: "+423",
    code: "LI",
  },
  {
    name: "Lithuania",
    dial_code: "+370",
    code: "LT",
  },
  {
    name: "Luxembourg",
    dial_code: "+352",
    code: "LU",
  },
  {
    name: "Macao",
    dial_code: "+853",
    code: "MO",
  },
  {
    name: "Macedonia",
    dial_code: "+389",
    code: "MK",
  },
  {
    name: "Madagascar",
    dial_code: "+261",
    code: "MG",
  },
  {
    name: "Malawi",
    dial_code: "+265",
    code: "MW",
  },
  {
    name: "Malaysia",
    dial_code: "+60",
    code: "MY",
  },
  {
    name: "Maldives",
    dial_code: "+960",
    code: "MV",
  },
  {
    name: "Mali",
    dial_code: "+223",
    code: "ML",
  },
  {
    name: "Malta",
    dial_code: "+356",
    code: "MT",
  },
  {
    name: "Marshall Islands",
    dial_code: "+692",
    code: "MH",
  },
  {
    name: "Martinique",
    dial_code: "+596",
    code: "MQ",
  },
  {
    name: "Mauritania",
    dial_code: "+222",
    code: "MR",
  },
  {
    name: "Mauritius",
    dial_code: "+230",
    code: "MU",
  },
  {
    name: "Mayotte",
    dial_code: "+262",
    code: "YT",
  },
  {
    name: "Mexico",
    dial_code: "+52",
    code: "MX",
  },
  {
    name: "Micronesia, Federated States of Micronesia",
    dial_code: "+691",
    code: "FM",
  },
  {
    name: "Moldova",
    dial_code: "+373",
    code: "MD",
  },
  {
    name: "Monaco",
    dial_code: "+377",
    code: "MC",
  },
  {
    name: "Mongolia",
    dial_code: "+976",
    code: "MN",
  },
  {
    name: "Montenegro",
    dial_code: "+382",
    code: "ME",
  },
  {
    name: "Montserrat",
    dial_code: "+1664",
    code: "MS",
  },
  {
    name: "Morocco",
    dial_code: "+212",
    code: "MA",
  },
  {
    name: "Mozambique",
    dial_code: "+258",
    code: "MZ",
  },
  {
    name: "Myanmar",
    dial_code: "+95",
    code: "MM",
  },
  {
    name: "Namibia",
    dial_code: "+264",
    code: "NA",
  },
  {
    name: "Nauru",
    dial_code: "+674",
    code: "NR",
  },
  {
    name: "Nepal",
    dial_code: "+977",
    code: "NP",
  },
  {
    name: "Netherlands",
    dial_code: "+31",
    code: "NL",
  },
  {
    name: "Netherlands Antilles",
    dial_code: "+599",
    code: "AN",
  },
  {
    name: "New Caledonia",
    dial_code: "+687",
    code: "NC",
  },
  {
    name: "New Zealand",
    dial_code: "+64",
    code: "NZ",
  },
  {
    name: "Nicaragua",
    dial_code: "+505",
    code: "NI",
  },
  {
    name: "Niger",
    dial_code: "+227",
    code: "NE",
  },
  {
    name: "Nigeria",
    dial_code: "+234",
    code: "NG",
  },
  {
    name: "Niue",
    dial_code: "+683",
    code: "NU",
  },
  {
    name: "Norfolk Island",
    dial_code: "+672",
    code: "NF",
  },
  {
    name: "Northern Mariana Islands",
    dial_code: "+1670",
    code: "MP",
  },
  {
    name: "Norway",
    dial_code: "+47",
    code: "NO",
  },
  {
    name: "Oman",
    dial_code: "+968",
    code: "OM",
  },
  {
    name: "Pakistan",
    dial_code: "+92",
    code: "PK",
  },
  {
    name: "Palau",
    dial_code: "+680",
    code: "PW",
  },
  {
    name: "Palestinian Territory, Occupied",
    dial_code: "+970",
    code: "PS",
  },
  {
    name: "Panama",
    dial_code: "+507",
    code: "PA",
  },
  {
    name: "Papua New Guinea",
    dial_code: "+675",
    code: "PG",
  },
  {
    name: "Paraguay",
    dial_code: "+595",
    code: "PY",
  },
  {
    name: "Peru",
    dial_code: "+51",
    code: "PE",
  },
  {
    name: "Philippines",
    dial_code: "+63",
    code: "PH",
  },
  {
    name: "Pitcairn",
    dial_code: "+64",
    code: "PN",
  },
  {
    name: "Poland",
    dial_code: "+48",
    code: "PL",
  },
  {
    name: "Portugal",
    dial_code: "+351",
    code: "PT",
  },
  {
    name: "Puerto Rico",
    dial_code: "+1939",
    code: "PR",
  },
  {
    name: "Qatar",
    dial_code: "+974",
    code: "QA",
  },
  {
    name: "Romania",
    dial_code: "+40",
    code: "RO",
  },
  {
    name: "Russia",
    dial_code: "+7",
    code: "RU",
  },
  {
    name: "Rwanda",
    dial_code: "+250",
    code: "RW",
  },
  {
    name: "Reunion",
    dial_code: "+262",
    code: "RE",
  },
  {
    name: "Saint Barthelemy",
    dial_code: "+590",
    code: "BL",
  },
  {
    name: "Saint Helena, Ascension and Tristan Da Cunha",
    dial_code: "+290",
    code: "SH",
  },
  {
    name: "Saint Kitts and Nevis",
    dial_code: "+1869",
    code: "KN",
  },
  {
    name: "Saint Lucia",
    dial_code: "+1758",
    code: "LC",
  },
  {
    name: "Saint Martin",
    dial_code: "+590",
    code: "MF",
  },
  {
    name: "Saint Pierre and Miquelon",
    dial_code: "+508",
    code: "PM",
  },
  {
    name: "Saint Vincent and the Grenadines",
    dial_code: "+1784",
    code: "VC",
  },
  {
    name: "Samoa",
    dial_code: "+685",
    code: "WS",
  },
  {
    name: "San Marino",
    dial_code: "+378",
    code: "SM",
  },
  {
    name: "Sao Tome and Principe",
    dial_code: "+239",
    code: "ST",
  },
  {
    name: "Saudi Arabia",
    dial_code: "+966",
    code: "SA",
  },
  {
    name: "Senegal",
    dial_code: "+221",
    code: "SN",
  },
  {
    name: "Serbia",
    dial_code: "+381",
    code: "RS",
  },
  {
    name: "Seychelles",
    dial_code: "+248",
    code: "SC",
  },
  {
    name: "Sierra Leone",
    dial_code: "+232",
    code: "SL",
  },
  {
    name: "Singapore",
    dial_code: "+65",
    code: "SG",
  },
  {
    name: "Slovakia",
    dial_code: "+421",
    code: "SK",
  },
  {
    name: "Slovenia",
    dial_code: "+386",
    code: "SI",
  },
  {
    name: "Solomon Islands",
    dial_code: "+677",
    code: "SB",
  },
  {
    name: "Somalia",
    dial_code: "+252",
    code: "SO",
  },
  {
    name: "South-Africa",
    dial_code: "+27",
    code: "ZA",
  },
  {
    name: "South Sudan",
    dial_code: "+211",
    code: "SS",
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    dial_code: "+500",
    code: "GS",
  },
  {
    name: "Spain",
    dial_code: "+34",
    code: "ES",
  },
  {
    name: "Sri Lanka",
    dial_code: "+94",
    code: "LK",
  },
  {
    name: "Sudan",
    dial_code: "+249",
    code: "SD",
  },
  {
    name: "Suriname",
    dial_code: "+597",
    code: "SR",
  },
  {
    name: "Svalbard and Jan Mayen",
    dial_code: "+47",
    code: "SJ",
  },
  {
    name: "Swaziland",
    dial_code: "+268",
    code: "SZ",
  },
  {
    name: "Sweden",
    dial_code: "+46",
    code: "SE",
  },
  {
    name: "Switzerland",
    dial_code: "+41",
    code: "CH",
  },
  {
    name: "Syrian Arab Republic",
    dial_code: "+963",
    code: "SY",
  },
  {
    name: "Taiwan",
    dial_code: "+886",
    code: "TW",
  },
  {
    name: "Tajikistan",
    dial_code: "+992",
    code: "TJ",
  },
  {
    name: "Tanzania, United Republic of Tanzania",
    dial_code: "+255",
    code: "TZ",
  },
  {
    name: "Thailand",
    dial_code: "+66",
    code: "TH",
  },
  {
    name: "Timor-Leste",
    dial_code: "+670",
    code: "TL",
  },
  {
    name: "Togo",
    dial_code: "+228",
    code: "TG",
  },
  {
    name: "Tokelau",
    dial_code: "+690",
    code: "TK",
  },
  {
    name: "Tonga",
    dial_code: "+676",
    code: "TO",
  },
  {
    name: "Trinidad and Tobago",
    dial_code: "+1868",
    code: "TT",
  },
  {
    name: "Tunisia",
    dial_code: "+216",
    code: "TN",
  },
  {
    name: "Turkey",
    dial_code: "+90",
    code: "TR",
  },
  {
    name: "Turkmenistan",
    dial_code: "+993",
    code: "TM",
  },
  {
    name: "Turks and Caicos Islands",
    dial_code: "+1649",
    code: "TC",
  },
  {
    name: "Tuvalu",
    dial_code: "+688",
    code: "TV",
  },
  {
    name: "Uganda",
    dial_code: "+256",
    code: "UG",
  },
  {
    name: "Ukraine",
    dial_code: "+380",
    code: "UA",
  },
  {
    name: "United Arab Emirates",
    dial_code: "+971",
    code: "AE",
  },
  {
    name: "UK",
    dial_code: "+44",
    code: "GB",
  },
  {
    name: "USA",
    dial_code: "+1",
    code: "US",
  },
  {
    name: "Uruguay",
    dial_code: "+598",
    code: "UY",
  },
  {
    name: "Uzbekistan",
    dial_code: "+998",
    code: "UZ",
  },
  {
    name: "Vanuatu",
    dial_code: "+678",
    code: "VU",
  },
  {
    name: "Venezuela, Bolivarian Republic of Venezuela",
    dial_code: "+58",
    code: "VE",
  },
  {
    name: "Vietnam",
    dial_code: "+84",
    code: "VN",
  },
  {
    name: "Virgin Islands, British",
    dial_code: "+1284",
    code: "VG",
  },
  {
    name: "Virgin Islands, U.S.",
    dial_code: "+1340",
    code: "VI",
  },
  {
    name: "Wallis and Futuna",
    dial_code: "+681",
    code: "WF",
  },
  {
    name: "Yemen",
    dial_code: "+967",
    code: "YE",
  },
  {
    name: "Zambia",
    dial_code: "+260",
    code: "ZM",
  },
  {
    name: "Zimbabwe",
    dial_code: "+263",
    code: "ZW",
  },
];

const api = `https://covid-193.p.rapidapi.com/statistics`;
fetch(api, {
  method: "GET",
  headers: {
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
    "x-rapidapi-key": "3275f6e223mshae32176c37294c2p1a5d56jsna9cad3c9ad0f",
  },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var a = 0,
      b = 0,
      c = 0,
      d = 0,
      e = 0,
      aindex = 0,
      bindex = 0,
      cindex = 0,
      dindex = 0,
      eindex = 0;

    var k = 226;
    while (k >= 0) {
      //algo to find top 5 country
      if (data.response[k].country != data.response[k].continent) {
        if (data.response[k].cases.total > a) {
          e = d;
          d = c;
          c = b;
          b = a;
          a = data.response[k].cases.total;
          eindex = dindex;
          dindex = cindex;
          cindex = bindex;
          bindex = aindex;
          aindex = k;
        } else if (data.response[k].cases.total > b) {
          e = d;
          d = c;
          c = b;
          b = data.response[k].cases.total;
          eindex = dindex;
          dindex = cindex;
          cindex = bindex;
          bindex = k;
        } else if (data.response[k].cases.total > c) {
          e = d;
          d = c;
          c = data.response[k].cases.total;
          eindex = dindex;
          dindex = cindex;
          cindex = k;
        } else if (data.response[k].cases.total > d) {
          e = d;
          d = data.response[k].cases.total;
          eindex = dindex;
          dindex = k;
        } else if (data.response[k].cases.total > e) {
          e = data.response[k].cases.total;
          eindex = k;
        }
      }

      k--;
    }
    //************************card 1 START************/
    var j = country.length - 1;
    var acode = "";

    var con1 = document.querySelector(".con1");
    var act1 = document.querySelector(".act1");
    var rec1 = document.querySelector(".rec1");
    var dea1 = document.querySelector(".dea1");
    var image1 = document.querySelector(".card-img-container1");
    var newcon1 = document.querySelector(".confirm_new_card1");
    var newdea1 = document.querySelector(".death_new_card1");
    var countrynamecard1 = document.querySelector(".card1-country");
    con1.innerHTML = a;
    act1.innerHTML = data.response[aindex].cases.active;
    rec1.innerHTML = data.response[aindex].cases.recovered;
    dea1.innerHTML = data.response[aindex].deaths.total;
    newcon1.innerHTML = data.response[aindex].cases.new;
    newdea1.innerHTML = data.response[aindex].deaths.new;
    countrynamecard1.innerHTML = `1. ${data.response[aindex].country}`;
    while (j > 0) {
      //converting the country code to lower case for image link to work
      if (country[j].name == data.response[aindex].country) {
        var acodetemp = country[j].code;
        acode = acodetemp.toLowerCase();
        // console.log(acode);
        break;
      }
      j--;
    }
    image1.innerHTML = `<img src=http://www.geonames.org/flags/x/${acode}.gif />`;

    //************************card 1 END************/

    //********card 2 START**********/
    var j = country.length - 1;
    var con2 = document.querySelector(".con2");
    var act2 = document.querySelector(".act2");
    var rec2 = document.querySelector(".rec2");
    var dea2 = document.querySelector(".dea2");
    var image2 = document.querySelector(".card-img-container2");
    var newcon2 = document.querySelector(".confirm_new_card2");
    var newdea2 = document.querySelector(".death_new_card2");
    var countrynamecard2 = document.querySelector(".card2-country");

    con2.innerHTML = b;
    act2.innerHTML = data.response[bindex].cases.active;
    rec2.innerHTML = data.response[bindex].cases.recovered;
    dea2.innerHTML = data.response[bindex].deaths.total;
    newcon2.innerHTML = data.response[bindex].cases.new;
    newdea2.innerHTML = data.response[bindex].deaths.new;
    countrynamecard2.innerHTML = `2. ${data.response[bindex].country}`;

    while (j > 0) {
      //converting the country code to lower case for image link to work
      if (country[j].name == data.response[bindex].country) {
        var acodetemp = country[j].code;
        acode = acodetemp.toLowerCase();
        // console.log(acode);
        break;
      }
      j--;
    }
    image2.innerHTML = `<img src=http://www.geonames.org/flags/x/${acode}.gif />`;
    //********card 2 END************/

    //********card 3 START**********/
    var j = country.length - 1;
    var con3 = document.querySelector(".con3");
    var act3 = document.querySelector(".act3");
    var rec3 = document.querySelector(".rec3");
    var dea3 = document.querySelector(".dea3");
    var image3 = document.querySelector(".card-img-container3");
    var newcon3 = document.querySelector(".confirm_new_card3");
    var newdea3 = document.querySelector(".death_new_card3");
    var countrynamecard3 = document.querySelector(".card3-country");
    con3.innerHTML = c;
    act3.innerHTML = data.response[cindex].cases.active;
    rec3.innerHTML = data.response[cindex].cases.recovered;
    dea3.innerHTML = data.response[cindex].deaths.total;
    newcon3.innerHTML = data.response[cindex].cases.new;
    newdea3.innerHTML = data.response[cindex].deaths.new;
    countrynamecard3.innerHTML = `3. ${data.response[cindex].country}`;

    while (j > 0) {
      if (country[j].name == data.response[cindex].country) {
        //converting the country code to lower case for image link to work
        var acodetemp = country[j].code;
        acode = acodetemp.toLowerCase();
        //   console.log(acode);
        break;
      }
      j--;
    }
    image3.innerHTML = `<img src=http://www.geonames.org/flags/x/${acode}.gif />`;
    //********card 3 END************/

    //********card 4 START**********/
    var j = country.length - 1;
    var con4 = document.querySelector(".con4");
    var act4 = document.querySelector(".act4");
    var rec4 = document.querySelector(".rec4");
    var dea4 = document.querySelector(".dea4");
    var image4 = document.querySelector(".card-img-container4");
    var newcon4 = document.querySelector(".confirm_new_card4");
    var newdea4 = document.querySelector(".death_new_card4");
    var countrynamecard4 = document.querySelector(".card4-country");
    con4.innerHTML = d;
    act4.innerHTML = data.response[dindex].cases.active;
    rec4.innerHTML = data.response[dindex].cases.recovered;
    dea4.innerHTML = data.response[dindex].deaths.total;
    newcon4.innerHTML = data.response[dindex].cases.new;
    newdea4.innerHTML = data.response[dindex].deaths.new;
    countrynamecard4.innerHTML = `4. ${data.response[dindex].country}`;

    while (j > 0) {
      if (country[j].name == data.response[dindex].country) {
        //converting the country code to lower case for image link to work
        var acodetemp = country[j].code;
        acode = acodetemp.toLowerCase();
        // console.log(acode);
        break;
      }
      j--;
    }
    image4.innerHTML = `<img src=http://www.geonames.org/flags/x/${acode}.gif />`;
    //********card 4 END************/

    // //********card 5 START**********/
    var j = country.length - 1;
    var con5 = document.querySelector(".con5");
    var act5 = document.querySelector(".act5");
    var rec5 = document.querySelector(".rec5");
    var dea5 = document.querySelector(".dea5");
    var image5 = document.querySelector(".card-img-container5");
    var newcon5 = document.querySelector(".confirm_new_card5");
    var newdea5 = document.querySelector(".death_new_card5");
    var countrynamecard5 = document.querySelector(".card5-country");
    con5.innerHTML = e;
    if (data.response[eindex].cases.active == 0) {
      act5.innerHTML = "N/A";
    } else {
      act5.innerHTML = data.response[eindex].cases.active;
    }
    if (data.response[eindex].cases.recovered == 0) {
      rec5.innerHTML = "N/A";
    } else {
      rec5.innerHTML = data.response[eindex].cases.recovered;
    }

    dea5.innerHTML = data.response[eindex].deaths.total;
    newcon5.innerHTML = data.response[eindex].cases.new;
    newdea5.innerHTML = data.response[eindex].deaths.new;
    countrynamecard5.innerHTML = `5. ${data.response[eindex].country}`;
    // console.log(data.response[eindex].country);

    while (j > 0) {
      if (country[j].name == data.response[eindex].country) {
        //converting the country code to lower case for image link to work
        var acodetemp = country[j].code;
        acode = acodetemp.toLowerCase();
        //console.log(acode);
        break;
      }
      j--;
    }
    image5.innerHTML = `<img src=http://www.geonames.org/flags/x/${acode}.gif />`;
    // //********card 5 END************/
  });

//********************navbar START*********************//

function downarro() {
  const downarrow = document.querySelector(".downarrow");
  const uparrow = document.querySelector(".uparrow");
  const nav = document.querySelector(".nav-controls");

  downarrow.classList.add("arrowhide");
  uparrow.classList.add("arrowunhide");
  nav.classList.add("addnavcontrol");
}

function uparro() {
  const downarrow = document.querySelector(".downarrow");
  const uparrow = document.querySelector(".uparrow");
  const nav = document.querySelector(".nav-controls");

  downarrow.classList.remove("arrowhide");
  uparrow.classList.remove("arrowunhide");
  nav.classList.remove("addnavcontrol");
}

//********************navbar*********************//

//********************input country features*******/

function focuson() {
  document.getElementById("coun").select();
}

//********************input country features end*******/

//hide and show the result on clicking check and reset

function resetcovid() {
  const covidresult = document.querySelector(".covid-result");
  const covidresetbtn = document.querySelector(".reset-covid");
  const checkbtn = document.querySelector(".submit-covid");
  checkbtn.classList.remove("checkbtn");

  covidresult.classList.remove("covidresult-hide");
  covidresetbtn.classList.remove("resetbtnunhide");

  const inputcountry = document.getElementById("coun");

  inputcountry.value = "";
}

function fetchcovid() {
  //hide and show the result on clicking check and reset

  const inputcountry = document.getElementById("coun");
  const sendcountry = inputcountry.value;
  if (sendcountry == "") {
    alert("SELECT COUNTRY");
  } else {
    let loader = `<span class=loadinsidediv></span>`;
    const conf = document.querySelector(".con");
    const recv = document.querySelector(".rec");
    const deat = document.querySelector(".dea");
    const acti = document.querySelector(".act");
    const newd = document.querySelector(".newd");
    const newc = document.querySelector(".newc");
    conf.innerHTML = loader;
    acti.innerHTML = loader;
    recv.innerHTML = loader;
    deat.innerHTML = loader;
    newc.innerHTML = loader;
    newd.innerHTML = loader;
    const checkbtn = document.querySelector(".submit-covid");
    checkbtn.classList.add("checkbtn");
    const covidresult = document.querySelector(".covid-result");
    const covidresetbtn = document.querySelector(".reset-covid");
    covidresult.classList.add("covidresult-hide");
    covidresetbtn.classList.add("resetbtnunhide");
    // //FUNTION TO FETCH AND SHOW data :)

    const api = `https://covid-193.p.rapidapi.com/statistics?country=${sendcountry}`;
    fetch(api, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "3275f6e223mshae32176c37294c2p1a5d56jsna9cad3c9ad0f",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data.response[0].country);

        if (data.response.length == 0) {
          const conf = document.querySelector(".con");
          const recv = document.querySelector(".rec");
          const deat = document.querySelector(".dea");
          const acti = document.querySelector(".act");
          conf.innerHTML = "N/A";
          acti.innerHTML = "N/A";
          recv.innerHTML = "N/A";
          deat.innerHTML = "N/A";
          newc.innerHTML = "N/A";
          newd.innerHTML = "N/A";
        } else {
          const conf = document.querySelector(".con");
          const recv = document.querySelector(".rec");
          const deat = document.querySelector(".dea");
          const acti = document.querySelector(".act");
          const newd = document.querySelector(".newd");
          const newc = document.querySelector(".newc");
          conf.innerHTML = data.response[0].cases.total;
          acti.innerHTML = data.response[0].cases.active;
          recv.innerHTML = data.response[0].cases.recovered;
          deat.innerHTML = data.response[0].deaths.total;
          newc.innerHTML = data.response[0].cases.new;
          newd.innerHTML = data.response[0].deaths.new;
        }
      });
  }
}

//************world STAT****/
var today = new Date();
if (today.getMonth() + 1 < 10 && today.getDate() < 10) {
  var date =
    today.getFullYear() +
    "-0" +
    (today.getMonth() + 1) +
    "-0" +
    today.getDate();
} else if (today.getMonth() + 1 < 10 && today.getDate() >= 10) {
  var date =
    today.getFullYear() + "-0" + (today.getMonth() + 1) + "-" + today.getDate();
} else if (today.getMonth() + 1 >= 10 && today.getDate() < 10) {
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-0" + today.getDate();
} else {
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
}
let loader = `<span class=loadinsidediv></span>`;
//console.log(date);
document.querySelector(".world-conf-num").innerHTML = loader;
document.querySelector(".world-recf-num").innerHTML = loader;
document.querySelector(".world-dea-num").innerHTML = loader;
document.querySelector(".world-conf-num-new").innerHTML = loader;
document.querySelector(".world-dea-num-new").innerHTML = loader;
fetch(`https://covid-193.p.rapidapi.com/history?day=${date}&country=ALL`, {
  method: "GET",
  headers: {
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
    "x-rapidapi-key": "3275f6e223mshae32176c37294c2p1a5d56jsna9cad3c9ad0f",
  },
})
  .then((response) => {
    return response.json();
  })

  .then((data) => {
    //console.log(data);
    document.querySelector(".world-conf-num").innerHTML =
      data.response[0].cases.total;
    document.querySelector(".world-recf-num").innerHTML =
      data.response[0].cases.recovered;
    document.querySelector(".world-dea-num").innerHTML =
      data.response[0].deaths.total;
    document.querySelector(".world-conf-num-new").innerHTML =
      data.response[0].cases.new;
    document.querySelector(".world-dea-num-new").innerHTML =
      data.response[0].deaths.new;
  });

//*****************WORLD********************/

// ****************************GRAPH********************************

var months = [
  "JAN",
  "FEB",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUG",
  "SEPT",
  "OCT",
  "NOV",
  "DEC",
];
var datestosend = [];
var labelsmonth = [];
var days = 5; // Days you want to subtract
var date = new Date();
while (days >= 1) {
  var last = new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
  var day = last.getDate();
  var month = last.getMonth() + 1;
  var year = last.getFullYear();

  labelsmonth.push(`${months[month - 1]} ${day}`);

  if (month < 10 && day < 10) {
    finaldate = `${year}-0${month}-0${day}`;
  } else if (month < 10 && day >= 10) {
    finaldate = `${year}-0${month}-${day}`;
  } else if (month >= 10 && day < 10) {
    finaldate = `${year}-${month}-0${day}`;
  } else {
    finaldate = `${year}-${month}-${day}`;
  }
  datestosend.push(finaldate);
  days--;
}
//console.log(datestosend);
//console.log(labelsmonth);
var x = 0;
var datasfromapi = [];
var datasfromapi2 = [];

async function getdata() {
  while (x <= 4) {
    var fetching = await fetch(
      `https://covid-193.p.rapidapi.com/history?day=${datestosend[x]}&country=ALL`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-193.p.rapidapi.com",
          "x-rapidapi-key":
            "3275f6e223mshae32176c37294c2p1a5d56jsna9cad3c9ad0f",
        },
      }
    );

    var data = await fetching.json();
    //console.log(data);

    datasfromapi.push(Number(data.response[0].cases.new.replace("+", "")));
    datasfromapi2.push(Number(data.response[0].deaths.new.replace("+", "")));
    x++;
  }
}
async function graph_final() {
  // console.log("hi");
  await getdata();
  document.querySelector(".box").style.display = "none";
  document.querySelector(".box2").style.display = "none";
  linechart();
  linechart2();
}
graph_final();
//*********************Graph***************************/
async function linechart() {
  const ctx = document.getElementById("myChart").getContext("2d");
  Chart.defaults.global.defaultColor = "orange";
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labelsmonth,
      datasets: [
        {
          label: "NEW CASE",
          backgroundColor: [
            "coral",
            "lightgreen",
            "pink",
            "white",
            "lightblue",
          ],
          borderColor: ["black", "black", "black", "black", "black"],
          hoverBorderColor: "black",
          pointBackgroundColor: "#FFF",
          pointBorderColor: "#FFF",
          pointHoverBackgroundColor: "#000",
          pointHoverBorderColor: "rgba(255,99,132,1)",
          borderWidth: 2,
          data: datasfromapi,
        },
      ],
    },
    options: {
      legend: {
        labels: {
          fontColor: "white",
          fontSize: 14,
        },
      },

      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            ticks: {
              fontSize: 10,
              fontColor: "white",
              minRotation: 40,
              fontFamily: "Lato",
            },
            gridLines: {
              color: "black",
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              fontSize: 10,
              beginAtZero: true,
              minRotation: 40,
              fontColor: "white",
            },
            gridLines: {
              color: "black",
            },
          },
        ],
      },
    },
  });
}
async function linechart2() {
  const ctx = document.getElementById("myChart2").getContext("2d");
  Chart.defaults.global.defaultColor = "orange";
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labelsmonth,
      datasets: [
        {
          label: "NEW DEATHS",
          backgroundColor: [
            "coral",
            "lightgreen",
            "pink",
            "white",
            "lightblue",
          ],
          borderColor: ["black", "black", "black", "black", "black"],
          hoverBorderColor: "black",
          pointBackgroundColor: "#FFF",
          pointBorderColor: "#FFF",
          pointHoverBackgroundColor: "#000",
          pointHoverBorderColor: "rgba(255,99,132,1)",
          borderWidth: 2,
          data: datasfromapi2,
        },
      ],
    },
    options: {
      legend: {
        labels: {
          fontColor: "white",
          fontSize: 14,
        },
      },

      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            ticks: {
              fontSize: 10,
              fontColor: "white",
              minRotation: 40,
              fontFamily: "Lato",
            },
            gridLines: {
              color: "black",
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              fontSize: 10,
              beginAtZero: true,
              minRotation: 40,
              fontColor: "white",
            },
            gridLines: {
              color: "black",
            },
          },
        ],
      },
    },
  });
}

//*********************Graph nd***************************/
