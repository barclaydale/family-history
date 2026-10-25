/* Every place the family record puts someone. approx: true means the coordinate is a sensible
   placement for the area described rather than a surveyed address — historical addresses,
   section-and-township descriptions, and "somewhere on this lake" all land here. */
window.FH = window.FH || {};
window.FH.places = [
  {
    "id": "wagrodno-silesia",
    "name": "Wangten, Silesia",
    "modern": "Wągrodno, Poland",
    "lat": 51.05,
    "lng": 16.45,
    "approx": true,
    "kind": "origin",
    "blurb": "The town the family emigrated from in 1842, then in Prussian Silesia, today Wągrodno in southwestern Poland."
  },
  {
    "id": "new-york-arrival",
    "name": "Port of New York",
    "modern": "New York, NY",
    "lat": 40.7003,
    "lng": -74.017,
    "approx": true,
    "kind": "travel",
    "blurb": "Where Carl and Elizabeth Mueller landed with six children on July 26, 1842, before traveling on to Milwaukee by way of the Great Lakes — about ten days."
  },
  {
    "id": "mueller-farm",
    "name": "The Mueller Farm",
    "modern": "Section 6, T7N R22E, Milwaukee County, WI",
    "lat": 43.0775,
    "lng": -88.051,
    "approx": true,
    "kind": "home",
    "blurb": "Eighty acres in the east half of the southwest quarter of Section 6, Township 7 North, Range 22 East, bought August 25, 1842 for the family to farm — wheat, by family account. Parcels were sold off through the 1850s; what remained became Lot 23 of Koenemann's subdivision, the land two lawsuits were later fought over."
  },
  {
    "id": "milwaukee-city",
    "name": "City of Milwaukee",
    "modern": "Milwaukee, WI",
    "lat": 43.0389,
    "lng": -87.9065,
    "approx": false,
    "kind": "city",
    "blurb": "Population about 1,700 when the family arrived in 1842, in what was then still a territory of Michigan. The family's center of gravity for the next century and a half."
  },
  {
    "id": "camp-sigel",
    "name": "Camp Sigel",
    "modern": "Milwaukee, WI",
    "lat": 43.04,
    "lng": -87.92,
    "approx": true,
    "kind": "military",
    "blurb": "Where the 9th Wisconsin Volunteer Infantry convened in Milwaukee in October 1861."
  },
  {
    "id": "newtonia-mo",
    "name": "Newtonia, Missouri",
    "modern": "Newtonia, MO",
    "lat": 36.878,
    "lng": -94.1719,
    "approx": false,
    "kind": "battle",
    "blurb": "Battle of Newtonia, fall 1862, where JF William Mueller was shot in the right arm — a wound that ended his service."
  },
  {
    "id": "chancellorsville-va",
    "name": "Chancellorsville, Virginia",
    "modern": "Spotsylvania County, VA",
    "lat": 38.3087,
    "lng": -77.6422,
    "approx": false,
    "kind": "battle",
    "blurb": "May 2, 1863. Both Julius and his brother Captain Robert Mueller fought here with the 26th Wisconsin; Robert was wounded."
  },
  {
    "id": "gettysburg-pa",
    "name": "Gettysburg, Pennsylvania",
    "modern": "Gettysburg, PA",
    "lat": 39.8309,
    "lng": -77.2311,
    "approx": false,
    "kind": "battle",
    "blurb": "July 1–2, 1863, with the 26th Wisconsin."
  },
  {
    "id": "chattanooga-tn",
    "name": "Chattanooga, Tennessee",
    "modern": "Chattanooga, TN",
    "lat": 35.0456,
    "lng": -85.3097,
    "approx": false,
    "kind": "battle",
    "blurb": "The Chattanooga campaign, October–November 1863."
  },
  {
    "id": "knoxville-tn",
    "name": "Knoxville, Tennessee",
    "modern": "Knoxville, TN",
    "lat": 35.9606,
    "lng": -83.9207,
    "approx": false,
    "kind": "battle",
    "blurb": "The Knoxville campaign, late 1863."
  },
  {
    "id": "atlanta-ga",
    "name": "Atlanta, Georgia",
    "modern": "Atlanta, GA",
    "lat": 33.749,
    "lng": -84.388,
    "approx": false,
    "kind": "battle",
    "blurb": "The Atlanta campaign, May–September 1864, under Sherman."
  },
  {
    "id": "peachtree-creek-ga",
    "name": "Peachtree Creek",
    "modern": "Atlanta, GA",
    "lat": 33.8123,
    "lng": -84.4036,
    "approx": false,
    "kind": "battle",
    "blurb": "July 20, 1864. Captain Robert Edward Mueller was killed here; his brother Julius fought in the same battle and survived."
  },
  {
    "id": "marietta-national-cemetery",
    "name": "Marietta National Cemetery",
    "modern": "Marietta, GA",
    "lat": 33.9526,
    "lng": -84.5499,
    "approx": false,
    "kind": "grave",
    "blurb": "Where Captain Robert Mueller and Captain John Seemann — who died side by side at Peachtree Creek — are buried side by side."
  },
  {
    "id": "averysboro-nc",
    "name": "Averasboro, North Carolina",
    "modern": "Harnett County, NC",
    "lat": 35.2793,
    "lng": -78.6689,
    "approx": true,
    "kind": "battle",
    "blurb": "March 1865. Weeks in cold, wet conditions here and at Bentonville left Julius Mueller seriously ill with the rheumatism that would eventually kill him."
  },
  {
    "id": "bentonville-nc",
    "name": "Bentonville, North Carolina",
    "modern": "Johnston County, NC",
    "lat": 35.3085,
    "lng": -78.3222,
    "approx": false,
    "kind": "battle",
    "blurb": "March 1865, the last major Confederate offensive of the war."
  },
  {
    "id": "soldiers-home-milwaukee",
    "name": "National Soldiers Home",
    "modern": "Milwaukee, WI",
    "lat": 43.0275,
    "lng": -87.9867,
    "approx": false,
    "kind": "institution",
    "blurb": "JF William Mueller was admitted in 1880 and died here a year later. F. Helen Mueller visited the soldiers here, and brought young Anna Dietrich along before she married into the family."
  },
  {
    "id": "turner-hall-milwaukee",
    "name": "Turner Hall",
    "modern": "1034 N 4th St, Milwaukee, WI",
    "lat": 43.0434,
    "lng": -87.917,
    "approx": false,
    "kind": "venue",
    "blurb": "Turnverein Hall, where the Comet Club often held its masquerade balls and theatre fundraisers. It still stands."
  },
  {
    "id": "comet-club-hall",
    "name": "Comet Club Hall, 3rd & Chestnut",
    "modern": "N 3rd St & W Juneau Ave, Milwaukee, WI",
    "lat": 43.047,
    "lng": -87.9145,
    "approx": true,
    "kind": "venue",
    "blurb": "The building the Comet Benevolent Society bought in 1899 for its meetings and events. Chestnut Street is now Juneau Avenue."
  },
  {
    "id": "comet-club-pewaukee",
    "name": "Comet Club Summer Place",
    "modern": "414 Park Ave, Pewaukee, WI",
    "lat": 43.0862,
    "lng": -88.2628,
    "approx": true,
    "kind": "retreat",
    "blurb": "The club's place on Pewaukee Lake, owned roughly 1895–1925. Member families each got a two-week allotment of vacation time here: a 20-mile, hour-long trip by train from Milwaukee, then a dray hired at the depot for the last mile. The main house, built in the early 1900s, still stands largely unchanged."
  },
  {
    "id": "eh-pewaukee-property",
    "name": "EH Mueller's Pewaukee Lake Property",
    "modern": "W278 N2433 Prospect, Pewaukee, WI",
    "lat": 43.0956,
    "lng": -88.2755,
    "approx": true,
    "kind": "home",
    "blurb": "Bought July 30, 1930 and sold June 15, 1945, after EH's death."
  },
  {
    "id": "beaver-lake-ed",
    "name": "Ed & Helen Mueller's Beaver Lake House",
    "modern": "5918 N Hwy 83, Hartland, WI",
    "lat": 43.1281,
    "lng": -88.3855,
    "approx": true,
    "kind": "home",
    "blurb": "Purchased in 1955. Ed photographed the Beaver Lake Dinghy races for nearly a decade."
  },
  {
    "id": "beaver-lake-julie",
    "name": "Julie & Genevieve's Beaver Lake Property",
    "modern": "Beaver Lake, Hartland, WI",
    "lat": 43.1305,
    "lng": -88.39,
    "approx": true,
    "kind": "home",
    "blurb": "Julie purchased the lot in May 1957; Bob Sr. moved into a second house on the property. The court ordered it sold during probate after Julie's death — it went for $120,000 on June 22, 1971."
  },
  {
    "id": "anna-46th-st",
    "name": "Anna's House on 46th Street",
    "modern": "N 46th St, Milwaukee, WI",
    "lat": 43.0455,
    "lng": -87.9745,
    "approx": true,
    "kind": "home",
    "blurb": "Where the family's holidays were held for decades. Julie, Ed, and bookkeeper Helen Leinss lived here together with Anna while running Mueller Engraving, and Shirley spent a year here recovering from polio."
  },
  {
    "id": "eh-27th-st",
    "name": "EH & Anna's House on 27th Street",
    "modern": "2352 N 27th St, Milwaukee, WI",
    "lat": 43.0575,
    "lng": -87.947,
    "approx": true,
    "kind": "home",
    "blurb": "The last of EH's many Milwaukee addresses — he died here in 1944. The attic held the darkroom where the brothers processed film."
  },
  {
    "id": "mueller-engraving-8th",
    "name": "Mueller Engraving Co.",
    "modern": "632 N 8th St, Milwaukee, WI",
    "lat": 43.04,
    "lng": -87.922,
    "approx": true,
    "kind": "work",
    "blurb": "Founded by Julie in 1948, with Ed owning a third and running sales. A 1956 fire — the building's fourth since 1949 — destroyed much of it along with many fine art plates, about $200,000 in damage, with 32 employees on the books."
  },
  {
    "id": "mueller-krus-milwaukee-st",
    "name": "Mueller Krus Company",
    "modern": "240 N Milwaukee St, Milwaukee, WI",
    "lat": 43.0345,
    "lng": -87.9065,
    "approx": true,
    "kind": "work",
    "blurb": "After buying Krus Co. in 1964, the renamed company moved here and grew to about 50 employees, with Julie as president and Ed as treasurer-secretary."
  },
  {
    "id": "highway-16-crash",
    "name": "Highway 16 Crash Site",
    "modern": "Near Hartland, WI",
    "lat": 43.1015,
    "lng": -88.31,
    "approx": true,
    "kind": "event",
    "blurb": "Where Julie was killed instantly on July 22, 1970, driving to work."
  },
  {
    "id": "st-joseph-mi",
    "name": "St. Joseph, Michigan",
    "modern": "St. Joseph, MI",
    "lat": 42.1098,
    "lng": -86.48,
    "approx": false,
    "kind": "event",
    "blurb": "Where EH Mueller, 35, and Anna Dietrich, 17, were married by a justice of the peace on September 1, 1901, with no family present. Wisconsin's marriage age was 18."
  },
  {
    "id": "los-angeles-ca",
    "name": "Los Angeles, California",
    "modern": "Los Angeles, CA",
    "lat": 34.0522,
    "lng": -118.2437,
    "approx": false,
    "kind": "event",
    "blurb": "Where Julie married Genevieve Strong on November 30, 1957."
  },
  {
    "id": "oshkosh-wi",
    "name": "Oshkosh, Wisconsin",
    "modern": "Oshkosh, WI",
    "lat": 44.0247,
    "lng": -88.5426,
    "approx": false,
    "kind": "event",
    "blurb": "Site of the 41st Wisconsin GAR encampment in 1907, where Captain Robert Mueller's pocketbook — picked up on the Peachtree Creek battlefield 43 years earlier — was returned to his widow."
  },
  {
    "id": "waupaca-wi",
    "name": "Waupaca Home",
    "modern": "Waupaca, WI",
    "lat": 44.358,
    "lng": -89.0857,
    "approx": true,
    "kind": "institution",
    "blurb": "The Julius Mueller Circle of the Ladies of the GAR, founded by F. Helen Mueller, raised money to support a room in Marston Hall here, which housed soldiers and their wives through illness."
  },
  {
    "id": "west-allis-st-matthias",
    "name": "St. Matthias, West Allis",
    "modern": "West Allis, WI",
    "lat": 43.0167,
    "lng": -88.007,
    "approx": true,
    "kind": "event",
    "blurb": "Where Anna Dietrich Mueller married George M. Memmel on June 3, 1959."
  },
  {
    "id": "layton-school-of-art",
    "name": "Layton School of Art",
    "modern": "Milwaukee, WI",
    "lat": 43.04,
    "lng": -87.91,
    "approx": true,
    "kind": "school",
    "blurb": "Where Ed and Art studied. Julie, George, and Charles went to lithography school instead."
  },
  {
    "id": "northwestern-dental",
    "name": "Northwestern University Dental School",
    "modern": "Chicago, IL",
    "lat": 41.8955,
    "lng": -87.6215,
    "approx": true,
    "kind": "school",
    "blurb": "Where George trained as a dentist, paying his education back by teaching dentistry in Texas and Arkansas during the war."
  },
  {
    "id": "manchester-england",
    "name": "Manchester, England",
    "modern": "Manchester, UK",
    "lat": 53.4808,
    "lng": -2.2426,
    "approx": false,
    "kind": "military",
    "blurb": "Where Julie landed in July 1944 with the Army Ordnance Department, Regiment 835, Company C."
  },
  {
    "id": "normandy-france",
    "name": "Normandy, France",
    "modern": "Normandy, France",
    "lat": 49.34,
    "lng": -0.6,
    "approx": true,
    "kind": "military",
    "blurb": "Julie's unit moved into France following the Normandy invasion, then on into Belgium and Germany — sixteen months overseas in all."
  },
  {
    "id": "san-diego-ca",
    "name": "San Diego, California",
    "modern": "San Diego, CA",
    "lat": 32.7157,
    "lng": -117.1611,
    "approx": false,
    "kind": "art",
    "blurb": "George's California watercolors include Spanish Landing and Ramona's Cottage in Old Town."
  }
];

/* Who was where, when — this is what the map plays back. startYear/endYear are inclusive;
   a presence with start == end is a single-year event (a battle, a wedding, a crash). */
window.FH = window.FH || {};
window.FH.presence = [
  {
    "personIds": [
      "charles-gottfried-mueller",
      "elisabeth-elgner",
      "august-mueller",
      "jf-william-mueller",
      "amalia-louise-mueller",
      "julius-mueller-sr",
      "paulina-mueller",
      "robert-edward-mueller-captain"
    ],
    "placeId": "wagrodno-silesia",
    "startYear": 1789,
    "endYear": 1842,
    "label": "Home before emigrating",
    "kind": "origin"
  },
  {
    "personIds": [
      "charles-gottfried-mueller",
      "elisabeth-elgner",
      "august-mueller",
      "jf-william-mueller",
      "amalia-louise-mueller",
      "julius-mueller-sr",
      "paulina-mueller",
      "robert-edward-mueller-captain"
    ],
    "placeId": "new-york-arrival",
    "startYear": 1842,
    "endYear": 1842,
    "label": "Landed in New York, July 26, 1842",
    "kind": "travel"
  },
  {
    "personIds": [
      "charles-gottfried-mueller"
    ],
    "placeId": "mueller-farm",
    "startYear": 1842,
    "endYear": 1863,
    "label": "Farmed the 80 acres until his death",
    "kind": "lived"
  },
  {
    "personIds": [
      "elisabeth-elgner"
    ],
    "placeId": "mueller-farm",
    "startYear": 1842,
    "endYear": 1885,
    "label": "Lived on the farm",
    "kind": "lived"
  },
  {
    "personIds": [
      "august-mueller",
      "jf-william-mueller",
      "amalia-louise-mueller",
      "julius-mueller-sr",
      "paulina-mueller",
      "robert-edward-mueller-captain"
    ],
    "placeId": "mueller-farm",
    "startYear": 1842,
    "endYear": 1860,
    "label": "Grew up on the farm",
    "kind": "lived"
  },
  {
    "personIds": [
      "johan-gottfried-carl-mueller",
      "christiana-henriette-boothe"
    ],
    "placeId": "new-york-arrival",
    "startYear": 1850,
    "endYear": 1850,
    "label": "Arrived in 1850, after the rest of the family",
    "kind": "travel"
  },
  {
    "personIds": [
      "johan-gottfried-carl-mueller",
      "christiana-henriette-boothe"
    ],
    "placeId": "milwaukee-city",
    "startYear": 1850,
    "endYear": 1875,
    "label": "Lived in Milwaukee",
    "kind": "lived"
  },
  {
    "personIds": [
      "jf-william-mueller"
    ],
    "placeId": "camp-sigel",
    "startYear": 1861,
    "endYear": 1861,
    "label": "Mustered into the 9th Wisconsin, October 26, 1861",
    "kind": "military"
  },
  {
    "personIds": [
      "jf-william-mueller"
    ],
    "placeId": "newtonia-mo",
    "startYear": 1862,
    "endYear": 1862,
    "label": "Shot in the right arm; discharged with disability",
    "kind": "battle"
  },
  {
    "personIds": [
      "jf-william-mueller"
    ],
    "placeId": "milwaukee-city",
    "startYear": 1863,
    "endYear": 1880,
    "label": "Home on a pension, working as a wheat buyer",
    "kind": "lived"
  },
  {
    "personIds": [
      "jf-william-mueller"
    ],
    "placeId": "soldiers-home-milwaukee",
    "startYear": 1880,
    "endYear": 1881,
    "label": "Admitted to the Soldiers Home, where he died",
    "kind": "institution"
  },
  {
    "personIds": [
      "julius-mueller-sr",
      "robert-edward-mueller-captain"
    ],
    "placeId": "milwaukee-city",
    "startYear": 1862,
    "endYear": 1862,
    "label": "Enlisted with the 26th Wisconsin, the \"Milwaukee Guards\"",
    "kind": "military"
  },
  {
    "personIds": [
      "julius-mueller-sr",
      "robert-edward-mueller-captain"
    ],
    "placeId": "chancellorsville-va",
    "startYear": 1863,
    "endYear": 1863,
    "label": "Battle of Chancellorsville, May 2, 1863 — Robert wounded",
    "kind": "battle"
  },
  {
    "personIds": [
      "julius-mueller-sr"
    ],
    "placeId": "gettysburg-pa",
    "startYear": 1863,
    "endYear": 1863,
    "label": "Battle of Gettysburg, July 1–2, 1863",
    "kind": "battle"
  },
  {
    "personIds": [
      "julius-mueller-sr"
    ],
    "placeId": "chattanooga-tn",
    "startYear": 1863,
    "endYear": 1863,
    "label": "Chattanooga campaign",
    "kind": "battle"
  },
  {
    "personIds": [
      "julius-mueller-sr"
    ],
    "placeId": "knoxville-tn",
    "startYear": 1863,
    "endYear": 1863,
    "label": "Knoxville campaign",
    "kind": "battle"
  },
  {
    "personIds": [
      "julius-mueller-sr"
    ],
    "placeId": "milwaukee-city",
    "startYear": 1864,
    "endYear": 1864,
    "label": "Recruiting term, January–March 1864",
    "kind": "military"
  },
  {
    "personIds": [
      "julius-mueller-sr"
    ],
    "placeId": "atlanta-ga",
    "startYear": 1864,
    "endYear": 1864,
    "label": "Atlanta campaign under Sherman",
    "kind": "battle"
  },
  {
    "personIds": [
      "julius-mueller-sr",
      "robert-edward-mueller-captain"
    ],
    "placeId": "peachtree-creek-ga",
    "startYear": 1864,
    "endYear": 1864,
    "label": "Battle of Peachtree Creek, July 20, 1864 — Robert killed in action",
    "kind": "battle"
  },
  {
    "personIds": [
      "robert-edward-mueller-captain"
    ],
    "placeId": "marietta-national-cemetery",
    "startYear": 1864,
    "endYear": 1864,
    "label": "Buried beside Captain John Seemann",
    "kind": "grave"
  },
  {
    "personIds": [
      "julius-mueller-sr"
    ],
    "placeId": "averysboro-nc",
    "startYear": 1865,
    "endYear": 1865,
    "label": "Battle of Averasboro; weeks in cold, wet conditions",
    "kind": "battle"
  },
  {
    "personIds": [
      "julius-mueller-sr"
    ],
    "placeId": "bentonville-nc",
    "startYear": 1865,
    "endYear": 1865,
    "label": "Battle of Bentonville",
    "kind": "battle"
  },
  {
    "personIds": [
      "julius-mueller-sr"
    ],
    "placeId": "milwaukee-city",
    "startYear": 1865,
    "endYear": 1886,
    "label": "Home from the war; constable and fire watchman",
    "kind": "lived"
  },
  {
    "personIds": [
      "frances-helena-alter"
    ],
    "placeId": "milwaukee-city",
    "startYear": 1862,
    "endYear": 1921,
    "label": "Midwife; founded the Julius Mueller Circle of the Ladies of the GAR",
    "kind": "lived"
  },
  {
    "personIds": [
      "frances-helena-alter",
      "anna-dietrich"
    ],
    "placeId": "soldiers-home-milwaukee",
    "startYear": 1895,
    "endYear": 1905,
    "label": "Visited the veterans at the Soldiers Home",
    "kind": "visit"
  },
  {
    "personIds": [
      "frances-helena-alter"
    ],
    "placeId": "waupaca-wi",
    "startYear": 1890,
    "endYear": 1921,
    "label": "Raised money for a room at the Waupaca Home",
    "kind": "support"
  },
  {
    "personIds": [
      "agnes-feuser"
    ],
    "placeId": "oshkosh-wi",
    "startYear": 1907,
    "endYear": 1907,
    "label": "Received her husband's pocketbook, 43 years after his death",
    "kind": "event"
  },
  {
    "personIds": [
      "eh-mueller"
    ],
    "placeId": "mueller-farm",
    "startYear": 1864,
    "endYear": 1867,
    "label": "Born on the farm",
    "kind": "lived"
  },
  {
    "personIds": [
      "eh-mueller"
    ],
    "placeId": "milwaukee-city",
    "startYear": 1867,
    "endYear": 1944,
    "label": "A series of Milwaukee addresses across eighty years",
    "kind": "lived"
  },
  {
    "personIds": [
      "eh-mueller",
      "anna-dietrich"
    ],
    "placeId": "st-joseph-mi",
    "startYear": 1901,
    "endYear": 1901,
    "label": "Married before a justice of the peace, September 1, 1901",
    "kind": "event"
  },
  {
    "personIds": [
      "eh-mueller",
      "john-saxer"
    ],
    "placeId": "comet-club-hall",
    "startYear": 1899,
    "endYear": 1925,
    "label": "Comet Benevolent Society hall",
    "kind": "club"
  },
  {
    "personIds": [
      "eh-mueller",
      "john-saxer"
    ],
    "placeId": "turner-hall-milwaukee",
    "startYear": 1886,
    "endYear": 1925,
    "label": "Comet Club masquerade balls and theatre fundraisers",
    "kind": "club"
  },
  {
    "personIds": [
      "eh-mueller",
      "anna-dietrich",
      "robert-edward-mueller-sr",
      "edward-albert-mueller-sr",
      "julius-theodore-mueller",
      "arthur-andrew-mueller",
      "charles-benjamin-mueller",
      "george-alfred-mueller",
      "eileen-anne-mueller"
    ],
    "placeId": "comet-club-pewaukee",
    "startYear": 1902,
    "endYear": 1925,
    "label": "Two-week summer allotments at the Comet Club's lake place",
    "kind": "retreat"
  },
  {
    "personIds": [
      "eh-mueller",
      "anna-dietrich",
      "robert-edward-mueller-sr",
      "edward-albert-mueller-sr",
      "julius-theodore-mueller",
      "arthur-andrew-mueller",
      "charles-benjamin-mueller",
      "george-alfred-mueller",
      "eileen-anne-mueller"
    ],
    "placeId": "eh-pewaukee-property",
    "startYear": 1930,
    "endYear": 1945,
    "label": "The family's own place on Pewaukee Lake",
    "kind": "lived"
  },
  {
    "personIds": [
      "eh-mueller",
      "anna-dietrich"
    ],
    "placeId": "eh-27th-st",
    "startYear": 1931,
    "endYear": 1944,
    "label": "EH died here in 1944",
    "kind": "lived"
  },
  {
    "personIds": [
      "anna-dietrich"
    ],
    "placeId": "anna-46th-st",
    "startYear": 1945,
    "endYear": 1959,
    "label": "Holidays at Anna's house",
    "kind": "lived"
  },
  {
    "personIds": [
      "anna-dietrich",
      "george-memmel"
    ],
    "placeId": "west-allis-st-matthias",
    "startYear": 1959,
    "endYear": 1959,
    "label": "Married June 3, 1959",
    "kind": "event"
  },
  {
    "personIds": [
      "george-memmel"
    ],
    "placeId": "milwaukee-city",
    "startYear": 1959,
    "endYear": 1964,
    "label": "Later years with Anna",
    "kind": "lived"
  },
  {
    "personIds": [
      "anna-dietrich"
    ],
    "placeId": "milwaukee-city",
    "startYear": 1959,
    "endYear": 1973,
    "label": "Later years",
    "kind": "lived"
  },
  {
    "personIds": [
      "mary-helen-catharine-mueller",
      "alfred-dentinger",
      "dorothy-dentinger",
      "jack-dentinger"
    ],
    "placeId": "comet-club-pewaukee",
    "startYear": 1915,
    "endYear": 1930,
    "label": "Dentinger family summers at the lake",
    "kind": "retreat"
  },
  {
    "personIds": [
      "neil-thomas",
      "dorothy-dentinger",
      "june-thomas"
    ],
    "placeId": "comet-club-pewaukee",
    "startYear": 1945,
    "endYear": 1960,
    "label": "The Thomas home on Pewaukee Lake",
    "kind": "lived"
  },
  {
    "personIds": [
      "gertrude-wagner-poetz"
    ],
    "placeId": "eh-27th-st",
    "startYear": 1911,
    "endYear": 1919,
    "label": "Brought into the Mueller home at about 13 to help with the children",
    "kind": "household"
  },
  {
    "personIds": [
      "gertrude-wagner-poetz"
    ],
    "placeId": "milwaukee-city",
    "startYear": 1927,
    "endYear": 1959,
    "label": "Worked for the Milwaukee County Home for Dependent Children",
    "kind": "work"
  },
  {
    "personIds": [
      "andrew-dietrich"
    ],
    "placeId": "milwaukee-city",
    "startYear": 1910,
    "endYear": 1966,
    "label": "Boarded with EH and Anna; plumbing apprentice by 1910",
    "kind": "lived"
  },
  {
    "personIds": [
      "robert-edward-mueller-sr",
      "edward-albert-mueller-sr",
      "julius-theodore-mueller",
      "arthur-andrew-mueller",
      "charles-benjamin-mueller",
      "george-alfred-mueller",
      "eileen-anne-mueller"
    ],
    "placeId": "milwaukee-city",
    "startYear": 1902,
    "endYear": 1970,
    "label": "Grew up in Milwaukee",
    "kind": "lived"
  },
  {
    "personIds": [
      "edward-albert-mueller-sr",
      "arthur-andrew-mueller"
    ],
    "placeId": "layton-school-of-art",
    "startYear": 1922,
    "endYear": 1930,
    "label": "Layton School of Art",
    "kind": "school"
  },
  {
    "personIds": [
      "george-alfred-mueller"
    ],
    "placeId": "northwestern-dental",
    "startYear": 1938,
    "endYear": 1943,
    "label": "Dental school at Northwestern",
    "kind": "school"
  },
  {
    "personIds": [
      "julius-theodore-mueller"
    ],
    "placeId": "manchester-england",
    "startYear": 1944,
    "endYear": 1944,
    "label": "Landed in England, July 1944",
    "kind": "military"
  },
  {
    "personIds": [
      "julius-theodore-mueller"
    ],
    "placeId": "normandy-france",
    "startYear": 1944,
    "endYear": 1945,
    "label": "Into France, Belgium, and Germany with the Ordnance Department",
    "kind": "military"
  },
  {
    "personIds": [
      "julius-theodore-mueller",
      "edward-albert-mueller-sr",
      "helen-leinss",
      "anna-dietrich"
    ],
    "placeId": "anna-46th-st",
    "startYear": 1948,
    "endYear": 1959,
    "label": "Julie, Ed, and bookkeeper Helen Leinss lived here with Anna",
    "kind": "lived"
  },
  {
    "personIds": [
      "julius-theodore-mueller",
      "edward-albert-mueller-sr"
    ],
    "placeId": "mueller-engraving-8th",
    "startYear": 1948,
    "endYear": 1964,
    "label": "Mueller Engraving Co.",
    "kind": "work"
  },
  {
    "personIds": [
      "julius-theodore-mueller"
    ],
    "placeId": "mueller-krus-milwaukee-st",
    "startYear": 1964,
    "endYear": 1970,
    "label": "Mueller Krus Company, as president",
    "kind": "work"
  },
  {
    "personIds": [
      "edward-albert-mueller-sr",
      "edward-albert-mueller-jr"
    ],
    "placeId": "mueller-krus-milwaukee-st",
    "startYear": 1964,
    "endYear": 1980,
    "label": "Mueller Krus Company",
    "kind": "work"
  },
  {
    "personIds": [
      "edward-albert-mueller-sr",
      "helen-leinss",
      "shirley-louise-mueller",
      "edward-albert-mueller-jr"
    ],
    "placeId": "beaver-lake-ed",
    "startYear": 1955,
    "endYear": 1997,
    "label": "The Beaver Lake house",
    "kind": "lived"
  },
  {
    "personIds": [
      "julius-theodore-mueller",
      "genevieve-strong"
    ],
    "placeId": "beaver-lake-julie",
    "startYear": 1957,
    "endYear": 1971,
    "label": "Julie's Beaver Lake property",
    "kind": "lived"
  },
  {
    "personIds": [
      "robert-edward-mueller-sr"
    ],
    "placeId": "beaver-lake-julie",
    "startYear": 1957,
    "endYear": 1971,
    "label": "Lived in the second house on Julie's property",
    "kind": "lived"
  },
  {
    "personIds": [
      "julius-theodore-mueller",
      "genevieve-strong"
    ],
    "placeId": "los-angeles-ca",
    "startYear": 1957,
    "endYear": 1957,
    "label": "Married November 30, 1957",
    "kind": "event"
  },
  {
    "personIds": [
      "julius-theodore-mueller"
    ],
    "placeId": "highway-16-crash",
    "startYear": 1970,
    "endYear": 1970,
    "label": "Killed in the crash, July 22, 1970",
    "kind": "event"
  },
  {
    "personIds": [
      "george-alfred-mueller"
    ],
    "placeId": "san-diego-ca",
    "startYear": 1960,
    "endYear": 2006,
    "label": "California years and watercolors",
    "kind": "art"
  },
  {
    "personIds": [
      "shirley-louise-mueller"
    ],
    "placeId": "comet-club-pewaukee",
    "startYear": 1937,
    "endYear": 1937,
    "label": "Came home from Labor Day weekend with a fever",
    "kind": "event"
  },
  {
    "personIds": [
      "shirley-louise-mueller"
    ],
    "placeId": "anna-46th-st",
    "startYear": 1937,
    "endYear": 1938,
    "label": "A year recovering from polio at her grandparents' home",
    "kind": "event"
  },
  {
    "personIds": [
      "robert-edward-mueller-sr",
      "edward-albert-mueller-sr",
      "arthur-andrew-mueller",
      "george-alfred-mueller"
    ],
    "placeId": "beaver-lake-ed",
    "startYear": 1983,
    "endYear": 1983,
    "label": "The 1983 family reunion",
    "kind": "event"
  }
];
