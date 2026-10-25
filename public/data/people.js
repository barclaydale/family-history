/* Everyone in the family record. Transcribed from the "Family Tree by Generation" chart in
   Mueller History in Milwaukee (v.1), plus individuals named in its narrative pages.
   gen: 1 = Charles Gottfried & Elisabeth, the immigrant generation. relation: "blood" unless noted
   ("household" = lived with the family without being related). birthYear/deathYear drive the
   timeline math; birthLabel/deathLabel are what gets displayed, since the source dates vary in
   precision. A null deathYear on someone born in the 1900s means no death date was recorded. */
window.FH = window.FH || {};
window.FH.people = [
  {
    "id": "charles-gottfried-mueller",
    "name": "Charles Gottfried Mueller",
    "gen": 1,
    "birthYear": 1789,
    "deathYear": 1863,
    "birthLabel": "24 Jun 1789",
    "deathLabel": "10 May 1863",
    "nickname": null,
    "parentIds": [],
    "spouseIds": [
      "elisabeth-elgner"
    ],
    "childIds": [
      "johan-gottfried-carl-mueller",
      "august-mueller",
      "jf-william-mueller",
      "amalia-louise-mueller",
      "julius-mueller-sr",
      "paulina-mueller",
      "robert-edward-mueller-captain",
      "rudolph-o-mueller"
    ],
    "bio": "Born in the town of Wangten, Silesia (present-day Wągrodno, Poland). Arrived in New York with his wife Elisabeth and their six children on July 26, 1842, and traveled to Milwaukee by way of the Great Lakes, a trip of about ten days. On August 25, 1842 he purchased 80 acres of land in Milwaukee County (the southwest quarter of Section 6, Township 7N, Range 22E) and farmed it, growing wheat, until his death in 1863. Milwaukee's population was about 1,700 people when the family arrived, and Wisconsin was still four years from statehood. He sold off parcels of the original 80 acres through the 1850s, and died intestate, which led to two lawsuits among his descendants decades later over the remaining land.",
    "note": null,
    "relation": "blood",
    "photoIds": [
      "farm-deed-1842-p1",
      "farm-deed-1842-p2"
    ],
    "placeIds": [
      "wagrodno-silesia",
      "new-york-arrival",
      "mueller-farm"
    ],
    "storyIds": [
      "arrival-and-farm",
      "farmland-lawsuits"
    ]
  },
  {
    "id": "elisabeth-elgner",
    "name": "Elisabeth Elgner Mueller",
    "gen": 1,
    "birthYear": 1799,
    "deathYear": 1885,
    "birthLabel": "4 Aug 1799",
    "deathLabel": "5 Nov 1885",
    "nickname": null,
    "parentIds": [],
    "spouseIds": [
      "charles-gottfried-mueller"
    ],
    "childIds": [
      "johan-gottfried-carl-mueller",
      "august-mueller",
      "jf-william-mueller",
      "amalia-louise-mueller",
      "julius-mueller-sr",
      "paulina-mueller",
      "robert-edward-mueller-captain",
      "rudolph-o-mueller"
    ],
    "bio": "Wife of Charles Gottfried Mueller. Emigrated with him and their six children from Silesia to Milwaukee in 1842. Outlived her husband by more than twenty years; her death in 1888 (also intestate) set off the first of two lawsuits over the family's farmland.",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [
      "wagrodno-silesia",
      "new-york-arrival",
      "mueller-farm"
    ],
    "storyIds": [
      "arrival-and-farm",
      "farmland-lawsuits"
    ]
  },
  {
    "id": "johan-gottfried-carl-mueller",
    "name": "Johan Gottfried Carl Mueller",
    "gen": 2,
    "birthYear": 1819,
    "deathYear": 1875,
    "birthLabel": "March 1819",
    "deathLabel": "28 May 1875",
    "nickname": "JG Carl",
    "parentIds": [
      "charles-gottfried-mueller",
      "elisabeth-elgner"
    ],
    "spouseIds": [
      "christiana-henriette-boothe"
    ],
    "childIds": [],
    "bio": "Eldest of the children known to have arrived separately: family history holds that JG Carl arrived in 1850, after the rest of the family, together with his fiancée Henriette Boothe.",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [
      "new-york-arrival",
      "milwaukee-city"
    ],
    "storyIds": [
      "arrival-and-farm"
    ]
  },
  {
    "id": "christiana-henriette-boothe",
    "name": "Christiana Henriette Boothe",
    "gen": 2,
    "birthYear": 1823,
    "deathYear": 1890,
    "birthLabel": "6 Jun 1823",
    "deathLabel": "1 Oct 1890",
    "nickname": null,
    "parentIds": [],
    "spouseIds": [
      "johan-gottfried-carl-mueller"
    ],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [
      "new-york-arrival",
      "milwaukee-city"
    ],
    "storyIds": [
      "arrival-and-farm"
    ]
  },
  {
    "id": "august-mueller",
    "name": "August Mueller",
    "gen": 2,
    "birthYear": 1823,
    "deathYear": 1866,
    "birthLabel": "1823",
    "deathLabel": "24 Dec 1866",
    "nickname": null,
    "parentIds": [
      "charles-gottfried-mueller",
      "elisabeth-elgner"
    ],
    "spouseIds": [
      "fredericka-stroebe"
    ],
    "childIds": [],
    "bio": "A contractor by trade, like several of his brothers. Died young, at 43. His sons Hermann and Robert J. Mueller went on to run Miller Brothers Photography in the city of Milwaukee from 1889 to 1922.",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [
      "wagrodno-silesia",
      "new-york-arrival",
      "mueller-farm"
    ],
    "storyIds": [
      "arrival-and-farm",
      "early-deaths",
      "art-and-photography"
    ]
  },
  {
    "id": "fredericka-stroebe",
    "name": "Fredericka Stroebe Mueller",
    "gen": 2,
    "birthYear": 1833,
    "deathYear": 1913,
    "birthLabel": "11 Jun 1833",
    "deathLabel": "24 Feb 1913",
    "nickname": null,
    "parentIds": [],
    "spouseIds": [
      "august-mueller"
    ],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "jf-william-mueller",
    "name": "Johan Friederich Wilhelm Mueller",
    "gen": 2,
    "birthYear": 1824,
    "deathYear": 1881,
    "birthLabel": "29 Nov 1824",
    "deathLabel": "27 Nov 1881",
    "nickname": "JF William",
    "parentIds": [
      "charles-gottfried-mueller",
      "elisabeth-elgner"
    ],
    "spouseIds": [
      "johanna-mathilda-hantschke"
    ],
    "childIds": [],
    "bio": "A wheat buyer. Enlisted in the 9th Wisconsin Volunteer Infantry on October 26, 1861 at age 37, mustering in at Camp Sigel in Milwaukee, and was promoted to sergeant in 1862. Shot in the right arm at the Battle of Newtonia, Missouri in the fall of 1862, he was hospitalized and discharged with disability on January 11, 1863, and later received a pension. In 1880 he was admitted to the Soldiers Home, where he died a year later at age 57. His sister F. Helen Mueller visited the soldiers there and brought Anna Dietrich (not yet married into the family) along to visit.",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [
      "wagrodno-silesia",
      "new-york-arrival",
      "mueller-farm",
      "camp-sigel",
      "newtonia-mo",
      "milwaukee-city",
      "soldiers-home-milwaukee"
    ],
    "storyIds": [
      "arrival-and-farm",
      "civil-war",
      "early-deaths",
      "farmland-lawsuits"
    ]
  },
  {
    "id": "johanna-mathilda-hantschke",
    "name": "Johanna Mathilda Hantschke Mueller",
    "gen": 2,
    "birthYear": 1824,
    "deathYear": 1903,
    "birthLabel": "May 1824",
    "deathLabel": "30 Sep 1903",
    "nickname": null,
    "parentIds": [],
    "spouseIds": [
      "jf-william-mueller"
    ],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "amalia-louise-mueller",
    "name": "Amalia Louise Mueller",
    "gen": 2,
    "birthYear": 1828,
    "deathYear": 1909,
    "birthLabel": "28 Nov 1828",
    "deathLabel": "8 Oct 1909",
    "nickname": "Louise",
    "parentIds": [
      "charles-gottfried-mueller",
      "elisabeth-elgner"
    ],
    "spouseIds": [
      "august-hannig"
    ],
    "childIds": [],
    "bio": "Known as Louise. After her mother Elisabeth's death in 1888, she filed suit in March 1890 (Hannig et al. v. Mueller et al.) against Charles Gottfried's estate over the 1860 bond that governed how the family's remaining farmland would be divided. The court found in December 1892 that she was a rightful beneficiary, but that she had no individual right to sell the land on her own.",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [
      "wagrodno-silesia",
      "new-york-arrival",
      "mueller-farm"
    ],
    "storyIds": [
      "arrival-and-farm",
      "farmland-lawsuits"
    ]
  },
  {
    "id": "august-hannig",
    "name": "August Hannig",
    "gen": 2,
    "birthYear": 1819,
    "deathYear": 1879,
    "birthLabel": "20 Mar 1819",
    "deathLabel": "14 Jun 1879",
    "nickname": null,
    "parentIds": [],
    "spouseIds": [
      "amalia-louise-mueller"
    ],
    "childIds": [],
    "bio": "",
    "note": "The family tree chart prints this death year as 1979, which would make him 160 years old; almost certainly a typo for 1879, used here.",
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": [
      "farmland-lawsuits"
    ]
  },
  {
    "id": "julius-mueller-sr",
    "name": "Julius Mueller",
    "gen": 2,
    "birthYear": 1836,
    "deathYear": 1886,
    "birthLabel": "28 Feb 1836",
    "deathLabel": "31 Jul 1886",
    "nickname": null,
    "parentIds": [
      "charles-gottfried-mueller",
      "elisabeth-elgner"
    ],
    "spouseIds": [
      "frances-helena-alter"
    ],
    "childIds": [
      "eh-mueller",
      "robert-julius-mueller",
      "julius-s-mueller-kilroy",
      "amanda-theresia-mueller",
      "elenora-elisa-franziska-mueller",
      "charles-henry-mueller",
      "mary-helen-catharine-mueller"
    ],
    "bio": "Worked as a farmer before the Civil War, and listed his occupation as \"distiller\" when he enlisted on August 16, 1862 at age 26. Married Frances \"Helena\" Alter on October 2, 1862, then deployed five days later with the 26th Wisconsin Volunteer Infantry Regiment (the \"Milwaukee Guards\"), alongside his brother Robert. Fought at Chancellorsville (May 1863), Gettysburg (July 1863), and in the Chattanooga and Knoxville campaigns that fall. After a recruiting stint in Milwaukee in early 1864 — during which his son EH was conceived — he marched with Sherman through the Atlanta campaign and fought at Peachtree Creek, the same battle that killed his brother Robert, on July 20, 1864. He continued through the Carolinas campaign, fell seriously ill with rheumatism after weeks in cold, wet conditions around Averysboro and Bentonville, and was treated by Dr. Heubschman before returning home with his regiment in May 1865, having been promoted to 1st Lieutenant. After the war he worked as a constable and fire watchman, was a founding and lifelong board member of the Comet Benevolent Society, and an influential member of the Robert Chivas GAR post. He filed for an invalid pension in 1880 and died in 1886, in a wheelchair by the end, at age 50 — rheumatism traced back to his Army service.",
    "note": null,
    "relation": "blood",
    "photoIds": [
      "julius-mueller-fire-watchman-clipping"
    ],
    "placeIds": [
      "wagrodno-silesia",
      "new-york-arrival",
      "mueller-farm",
      "milwaukee-city",
      "chancellorsville-va",
      "gettysburg-pa",
      "chattanooga-tn",
      "knoxville-tn",
      "atlanta-ga",
      "peachtree-creek-ga",
      "averysboro-nc",
      "bentonville-nc"
    ],
    "storyIds": [
      "arrival-and-farm",
      "civil-war",
      "gar",
      "early-deaths"
    ]
  },
  {
    "id": "frances-helena-alter",
    "name": "Frances \"Helena\" Alter Mueller",
    "gen": 2,
    "birthYear": 1841,
    "deathYear": 1921,
    "birthLabel": "2 Jun 1841",
    "deathLabel": "21 May 1921",
    "nickname": "F. Helen",
    "parentIds": [],
    "spouseIds": [
      "julius-mueller-sr"
    ],
    "childIds": [
      "eh-mueller",
      "robert-julius-mueller",
      "julius-s-mueller-kilroy",
      "amanda-theresia-mueller",
      "elenora-elisa-franziska-mueller",
      "charles-henry-mueller",
      "mary-helen-catharine-mueller"
    ],
    "bio": "Known as F. Helen. Studied midwifery in the 1870s to help support the family, and by her own licensing application (midwife licenses became mandatory in Wisconsin in 1905) had trained under a physician and personally delivered over 2,000 babies with no deaths — including nearly all of her own grandchildren, and many nieces and nephews. Her grandchildren recalled that she also counseled Native American families about midwifery and gave them food. After her husband's death she founded and led the Julius Mueller Circle No. 20, Ladies of the Grand Army of the Republic, in Milwaukee, which raised money to support a room at the Waupaca Home in northern Wisconsin for veterans and their wives during illness.",
    "note": null,
    "relation": "blood",
    "photoIds": [
      "1911-family-portrait"
    ],
    "placeIds": [
      "milwaukee-city",
      "soldiers-home-milwaukee",
      "waupaca-wi"
    ],
    "storyIds": [
      "civil-war",
      "gar",
      "midwife",
      "eh-mueller"
    ]
  },
  {
    "id": "paulina-mueller",
    "name": "Paulina Mueller",
    "gen": 2,
    "birthYear": 1838,
    "deathYear": 1888,
    "birthLabel": "2 Jun 1838",
    "deathLabel": "4 Jun 1888",
    "nickname": null,
    "parentIds": [
      "charles-gottfried-mueller",
      "elisabeth-elgner"
    ],
    "spouseIds": [
      "edward-de-haas"
    ],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [
      "wagrodno-silesia",
      "new-york-arrival",
      "mueller-farm"
    ],
    "storyIds": [
      "arrival-and-farm"
    ]
  },
  {
    "id": "edward-de-haas",
    "name": "Edward De Haas",
    "gen": 2,
    "birthYear": 1829,
    "deathYear": 1889,
    "birthLabel": "10 Feb 1829",
    "deathLabel": "5 Jan 1889",
    "nickname": null,
    "parentIds": [],
    "spouseIds": [
      "paulina-mueller"
    ],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "robert-edward-mueller-captain",
    "name": "Robert Edward Mueller",
    "gen": 2,
    "birthYear": 1841,
    "deathYear": 1864,
    "birthLabel": "8 May 1841",
    "deathLabel": "20 Jul 1864",
    "nickname": null,
    "parentIds": [
      "charles-gottfried-mueller",
      "elisabeth-elgner"
    ],
    "spouseIds": [
      "agnes-feuser"
    ],
    "childIds": [],
    "bio": "A farmer. Married Agnes Feuser on March 9, 1862; their son Edward Robert was born that May. Enlisted in July 1862 at age 21 and mustered into the 26th Wisconsin Volunteer Infantry, Company C — the same regiment and company as his brother Julius. Appointed 2nd Lieutenant in January 1863, wounded at the Battle of Chancellorsville that May, and returned to his company after hospitalization. Made Captain of Company C on December 1, 1863 — family tradition holds that a Captain was given his sword on promotion. Killed in action on July 20, 1864 at the Battle of Peachtree Creek near Atlanta, Georgia, fighting beside Captain John Seemann of Company I; the two were buried side by side at Marietta National Cemetery. His initials are engraved beneath an eagle's head on a surviving relic, the \"R\" upright and the umlauted \"M\" inverted. In 1907, forty-three years after the battle, a Union veteran who had recovered his pocketbook from the battlefield presented it to his widow at a GAR encampment in Oshkosh.",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [
      "wagrodno-silesia",
      "new-york-arrival",
      "mueller-farm",
      "milwaukee-city",
      "chancellorsville-va",
      "peachtree-creek-ga",
      "marietta-national-cemetery"
    ],
    "storyIds": [
      "arrival-and-farm",
      "civil-war",
      "captain-robert",
      "gar",
      "early-deaths",
      "farmland-lawsuits"
    ]
  },
  {
    "id": "agnes-feuser",
    "name": "Agnes Feuser Mueller",
    "gen": 2,
    "birthYear": 1843,
    "deathYear": 1931,
    "birthLabel": "3 Oct 1843",
    "deathLabel": "3 Nov 1931",
    "nickname": null,
    "parentIds": [],
    "spouseIds": [
      "robert-edward-mueller-captain"
    ],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [
      "oshkosh-wi"
    ],
    "storyIds": [
      "civil-war",
      "captain-robert"
    ]
  },
  {
    "id": "rudolph-o-mueller",
    "name": "Rudolph O. Mueller",
    "gen": 2,
    "birthYear": 1845,
    "deathYear": 1871,
    "birthLabel": "1845",
    "deathLabel": "1871",
    "nickname": null,
    "parentIds": [
      "charles-gottfried-mueller",
      "elisabeth-elgner"
    ],
    "spouseIds": [
      "magdalena-jacobus"
    ],
    "childIds": [],
    "bio": "A construction worker. Died at 26; cause unknown.",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": [
      "early-deaths"
    ]
  },
  {
    "id": "magdalena-jacobus",
    "name": "Magdalena Jacobus Mueller",
    "gen": 2,
    "birthYear": 1847,
    "deathYear": 1935,
    "birthLabel": "Nov 1847",
    "deathLabel": "1935",
    "nickname": null,
    "parentIds": [],
    "spouseIds": [
      "rudolph-o-mueller"
    ],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "eh-mueller",
    "name": "Ed Henry Mueller",
    "gen": 3,
    "birthYear": 1864,
    "deathYear": 1944,
    "birthLabel": "30 Sep 1864",
    "deathLabel": "2 Sep 1944",
    "nickname": "EH",
    "parentIds": [
      "julius-mueller-sr",
      "frances-helena-alter"
    ],
    "spouseIds": [
      "minnie-weber",
      "anna-dietrich"
    ],
    "childIds": [
      "eddie-robert-mueller",
      "robert-edward-mueller-sr",
      "edward-albert-mueller-sr",
      "julius-theodore-mueller",
      "arthur-andrew-mueller",
      "charles-benjamin-mueller",
      "george-alfred-mueller",
      "eileen-anne-mueller"
    ],
    "bio": "Known as EH. Born on the family farm and living in Milwaukee's city proper by age three. First married Minnie Weber on April 24, 1890; she died in 1902, and their son Eddie Robert died of tuberculosis in 1904 at not quite three years old. On September 1, 1901 — while still married to Minnie — EH married Anna Dietrich, seventeen years his junior, before a justice of the peace in St. Joseph, Berrien County, Michigan, with no family present; the family history notes this looks like an elopement. He worked as a plumber (1885–1912, and again 1924–25 in sales), Milwaukee County Recorder of Deeds (1913–18 and 1921–22), in real estate (1919–20), and as a city health inspector (1926–c.1937). He was an original member of the German social club that became the Comet Benevolent Society in 1886, serving continuously on its board and as its first president, alongside his brother-in-law John Saxer. He lived at a series of Milwaukee addresses over his life — 1301 3rd St., 474 24th St., 710 Walnut St., 559 40th St., 2447 Grand Ave., 838 27th St., and finally 2352 27th St., where he died in 1944.",
    "note": "EH's marriage to Anna Dietrich (1901) predates Minnie Weber's recorded death (1902) in the source material; the family history doesn't resolve this, so it's presented here as written.",
    "relation": "blood",
    "photoIds": [
      "1911-family-portrait"
    ],
    "placeIds": [
      "mueller-farm",
      "milwaukee-city",
      "st-joseph-mi",
      "comet-club-hall",
      "turner-hall-milwaukee",
      "comet-club-pewaukee",
      "eh-pewaukee-property",
      "eh-27th-st"
    ],
    "storyIds": [
      "eh-mueller",
      "comet-club",
      "pewaukee-memories",
      "pewaukee-house",
      "shirley-polio",
      "gertrude-wagner"
    ]
  },
  {
    "id": "minnie-weber",
    "name": "Minnie Weber Mueller",
    "gen": 3,
    "birthYear": null,
    "deathYear": 1902,
    "birthLabel": null,
    "deathLabel": "d. 1902",
    "nickname": null,
    "parentIds": [],
    "spouseIds": [
      "eh-mueller"
    ],
    "childIds": [
      "eddie-robert-mueller"
    ],
    "bio": "EH Mueller's first wife, married April 24, 1890.",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": [
      "eh-mueller"
    ]
  },
  {
    "id": "eddie-robert-mueller",
    "name": "Eddie Robert Mueller",
    "gen": 4,
    "birthYear": 1901,
    "deathYear": 1904,
    "birthLabel": "1901",
    "deathLabel": "1904",
    "nickname": null,
    "parentIds": [
      "eh-mueller",
      "minnie-weber"
    ],
    "spouseIds": [],
    "childIds": [],
    "bio": "Son of EH Mueller and his first wife, Minnie Weber. Died of tuberculosis in 1904, not yet three years old.",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": [
      "eh-mueller"
    ]
  },
  {
    "id": "anna-dietrich",
    "name": "Anna Mary Dietrich Mueller Memmel",
    "gen": 3,
    "birthYear": 1883,
    "deathYear": 1973,
    "birthLabel": "12 Sep 1883",
    "deathLabel": "29 Oct 1973",
    "nickname": null,
    "parentIds": [
      "andreas-dietrich",
      "victoria-reiss"
    ],
    "spouseIds": [
      "eh-mueller",
      "george-memmel"
    ],
    "childIds": [
      "robert-edward-mueller-sr",
      "edward-albert-mueller-sr",
      "julius-theodore-mueller",
      "arthur-andrew-mueller",
      "charles-benjamin-mueller",
      "george-alfred-mueller",
      "eileen-anne-mueller"
    ],
    "bio": "Married EH Mueller on September 1, 1901 in St. Joseph, Michigan. After EH's death, she married a second time, to George M. Memmel, on June 3, 1959 at St. Matthias in West Allis, Wisconsin. As a girl she was brought by F. Helen Mueller to visit Civil War veterans at the Soldiers Home before she had married into the family. Holidays were held at her home on 46th Street for decades, and she lived to 90.",
    "note": null,
    "relation": "blood",
    "photoIds": [
      "1911-family-portrait",
      "anna-george-memmel-wedding-1959"
    ],
    "placeIds": [
      "soldiers-home-milwaukee",
      "st-joseph-mi",
      "comet-club-pewaukee",
      "eh-pewaukee-property",
      "eh-27th-st",
      "anna-46th-st",
      "west-allis-st-matthias",
      "milwaukee-city"
    ],
    "storyIds": [
      "civil-war",
      "eh-mueller",
      "pewaukee-memories",
      "pewaukee-house",
      "shirley-polio",
      "mueller-krus",
      "holidays-at-annas",
      "gertrude-wagner"
    ]
  },
  {
    "id": "george-memmel",
    "name": "George M. Memmel",
    "gen": 3,
    "birthYear": 1885,
    "deathYear": 1964,
    "birthLabel": "8 Mar 1885",
    "deathLabel": "26 May 1964",
    "nickname": null,
    "parentIds": [],
    "spouseIds": [
      "anna-dietrich"
    ],
    "childIds": [],
    "bio": "Anna Dietrich Mueller's second husband, married June 3, 1959.",
    "note": null,
    "relation": "blood",
    "photoIds": [
      "anna-george-memmel-wedding-1959"
    ],
    "placeIds": [
      "west-allis-st-matthias",
      "milwaukee-city"
    ],
    "storyIds": [
      "holidays-at-annas"
    ]
  },
  {
    "id": "robert-julius-mueller",
    "name": "Robert Julius Mueller",
    "gen": 3,
    "birthYear": 1868,
    "deathYear": 1946,
    "birthLabel": "6 Sep 1868",
    "deathLabel": "1946",
    "nickname": null,
    "parentIds": [
      "julius-mueller-sr",
      "frances-helena-alter"
    ],
    "spouseIds": [
      "ottilia-manthae"
    ],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "ottilia-manthae",
    "name": "Ottilia \"Tillie\" Manthae Mueller",
    "gen": 3,
    "birthYear": 1874,
    "deathYear": 1927,
    "birthLabel": "23 Feb 1874",
    "deathLabel": "1927",
    "nickname": null,
    "parentIds": [],
    "spouseIds": [
      "robert-julius-mueller"
    ],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "julius-s-mueller-kilroy",
    "name": "Julius S. Mueller / Kilroy",
    "gen": 3,
    "birthYear": 1869,
    "deathYear": 1934,
    "birthLabel": "22 Oct 1869",
    "deathLabel": "27 Sep 1934",
    "nickname": null,
    "parentIds": [
      "julius-mueller-sr",
      "frances-helena-alter"
    ],
    "spouseIds": [
      "agness-murphy"
    ],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "agness-murphy",
    "name": "Agness Murphy",
    "gen": 3,
    "birthYear": 1876,
    "deathYear": 1930,
    "birthLabel": "12 Jan 1876",
    "deathLabel": "9 Jun 1930",
    "nickname": null,
    "parentIds": [],
    "spouseIds": [
      "julius-s-mueller-kilroy"
    ],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "amanda-theresia-mueller",
    "name": "Amanda Theresia Mueller",
    "gen": 3,
    "birthYear": 1872,
    "deathYear": 1932,
    "birthLabel": "29 Sep 1872",
    "deathLabel": "11 May 1932",
    "nickname": null,
    "parentIds": [
      "julius-mueller-sr",
      "frances-helena-alter"
    ],
    "spouseIds": [
      "theodore-van-altena",
      "john-saxer"
    ],
    "childIds": [],
    "bio": "First married Theodore Van Altena, who died in 1901; later married John Saxer, who co-founded the Comet Benevolent Society with her brother EH Mueller in 1886 and served alongside him on its board for decades.",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": [
      "comet-club"
    ]
  },
  {
    "id": "theodore-van-altena",
    "name": "Theodore Van Altena",
    "gen": 3,
    "birthYear": 1870,
    "deathYear": 1901,
    "birthLabel": "13 Jan 1870",
    "deathLabel": "12 Mar 1901",
    "nickname": null,
    "parentIds": [],
    "spouseIds": [
      "amanda-theresia-mueller"
    ],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "john-saxer",
    "name": "John Saxer",
    "gen": 3,
    "birthYear": 1867,
    "deathYear": 1923,
    "birthLabel": "1867",
    "deathLabel": "13 Jan 1923",
    "nickname": null,
    "parentIds": [],
    "spouseIds": [
      "amanda-theresia-mueller"
    ],
    "childIds": [],
    "bio": "Married Amanda Theresia Mueller. Co-founded the Comet Benevolent Society with his brother-in-law EH Mueller in 1886 and served continuously on its board with him.",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [
      "comet-club-hall",
      "turner-hall-milwaukee"
    ],
    "storyIds": [
      "comet-club"
    ]
  },
  {
    "id": "elenora-elisa-franziska-mueller",
    "name": "Elenora Elisa Franziska Mueller",
    "gen": 3,
    "birthYear": 1875,
    "deathYear": 1907,
    "birthLabel": "29 Sep 1875",
    "deathLabel": "20 Dec 1907",
    "nickname": null,
    "parentIds": [
      "julius-mueller-sr",
      "frances-helena-alter"
    ],
    "spouseIds": [
      "theodore-kreuser"
    ],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "theodore-kreuser",
    "name": "Theodore Kreuser",
    "gen": 3,
    "birthYear": 1877,
    "deathYear": 1955,
    "birthLabel": "Oct 1877",
    "deathLabel": "27 Sep 1955",
    "nickname": null,
    "parentIds": [],
    "spouseIds": [
      "elenora-elisa-franziska-mueller"
    ],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "charles-henry-mueller",
    "name": "Charles Henry Mueller",
    "gen": 3,
    "birthYear": 1878,
    "deathYear": 1929,
    "birthLabel": "29 Apr 1878",
    "deathLabel": "5 Jun 1929",
    "nickname": null,
    "parentIds": [
      "julius-mueller-sr",
      "frances-helena-alter"
    ],
    "spouseIds": [],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "mary-helen-catharine-mueller",
    "name": "Mary \"Helen\" Catharine Mueller Dentinger",
    "gen": 3,
    "birthYear": 1883,
    "deathYear": 1943,
    "birthLabel": "4 Sep 1883",
    "deathLabel": "24 Aug 1943",
    "nickname": null,
    "parentIds": [
      "julius-mueller-sr",
      "frances-helena-alter"
    ],
    "spouseIds": [
      "alfred-dentinger"
    ],
    "childIds": [
      "dorothy-dentinger",
      "jack-dentinger"
    ],
    "bio": "Married Alfred C. Dentinger. Family photos of their household at Pewaukee Lake survive from around 1920.",
    "note": null,
    "relation": "blood",
    "photoIds": [
      "dentinger-family-1920s"
    ],
    "placeIds": [
      "comet-club-pewaukee"
    ],
    "storyIds": [
      "pewaukee-memories"
    ]
  },
  {
    "id": "alfred-dentinger",
    "name": "Alfred C. Dentinger",
    "gen": 3,
    "birthYear": 1882,
    "deathYear": 1942,
    "birthLabel": "25 Jul 1882",
    "deathLabel": "15 Dec 1942",
    "nickname": null,
    "parentIds": [],
    "spouseIds": [
      "mary-helen-catharine-mueller"
    ],
    "childIds": [
      "dorothy-dentinger",
      "jack-dentinger"
    ],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [
      "dentinger-family-1920s"
    ],
    "placeIds": [
      "comet-club-pewaukee"
    ],
    "storyIds": [
      "pewaukee-memories"
    ]
  },
  {
    "id": "andreas-dietrich",
    "name": "Andreas Dietrich",
    "gen": 2,
    "birthYear": 1849,
    "deathYear": 1941,
    "birthLabel": "Jul 1849",
    "deathLabel": "Feb 1941",
    "nickname": null,
    "parentIds": [],
    "spouseIds": [
      "victoria-reiss"
    ],
    "childIds": [
      "anna-dietrich",
      "andrew-dietrich"
    ],
    "bio": "Father of Anna Dietrich Mueller Memmel.",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "victoria-reiss",
    "name": "Victoria Reiss Dietrich",
    "gen": 2,
    "birthYear": 1861,
    "deathYear": 1886,
    "birthLabel": "Aug 1861",
    "deathLabel": "Sep 1886",
    "nickname": null,
    "parentIds": [],
    "spouseIds": [
      "andreas-dietrich"
    ],
    "childIds": [
      "anna-dietrich"
    ],
    "bio": "Mother of Anna Dietrich Mueller Memmel; died when Anna was two.",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "andrew-dietrich",
    "name": "Andrew Dietrich",
    "gen": 3,
    "birthYear": 1890,
    "deathYear": 1966,
    "birthLabel": "1890",
    "deathLabel": "1966",
    "nickname": null,
    "parentIds": [
      "andreas-dietrich"
    ],
    "spouseIds": [
      "clara-kramer"
    ],
    "childIds": [
      "melva-ann-dietrich",
      "norman-edward-dietrich"
    ],
    "bio": "Anna Dietrich Mueller's half-brother, son of Andreas Dietrich and Louise Grinne (whose dates aren't known). Boarded with EH and Anna Mueller and was apprenticing as a plumber by 1910, at age 20. Married Clara Kramer on November 24, 1914.",
    "note": null,
    "relation": "half-sibling",
    "photoIds": [],
    "placeIds": [
      "milwaukee-city"
    ],
    "storyIds": []
  },
  {
    "id": "clara-kramer",
    "name": "Clara Kramer Dietrich",
    "gen": 3,
    "birthYear": null,
    "deathYear": null,
    "birthLabel": null,
    "deathLabel": null,
    "nickname": null,
    "parentIds": [],
    "spouseIds": [
      "andrew-dietrich"
    ],
    "childIds": [
      "melva-ann-dietrich",
      "norman-edward-dietrich"
    ],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "melva-ann-dietrich",
    "name": "Melva Ann Dietrich",
    "gen": 4,
    "birthYear": 1915,
    "deathYear": 2008,
    "birthLabel": "1915",
    "deathLabel": "2008",
    "nickname": null,
    "parentIds": [
      "andrew-dietrich",
      "clara-kramer"
    ],
    "spouseIds": [],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "norman-edward-dietrich",
    "name": "Norman Edward Dietrich",
    "gen": 4,
    "birthYear": 1916,
    "deathYear": 1998,
    "birthLabel": "1916",
    "deathLabel": "1998",
    "nickname": null,
    "parentIds": [
      "andrew-dietrich",
      "clara-kramer"
    ],
    "spouseIds": [],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "dorothy-dentinger",
    "name": "Dorothy Dentinger Thomas",
    "gen": 4,
    "birthYear": null,
    "deathYear": null,
    "birthLabel": null,
    "deathLabel": null,
    "nickname": null,
    "parentIds": [
      "mary-helen-catharine-mueller",
      "alfred-dentinger"
    ],
    "spouseIds": [
      "neil-thomas"
    ],
    "childIds": [
      "june-thomas"
    ],
    "bio": "Daughter of Mary Helen Catharine Mueller and Alfred Dentinger; later married Neil Thomas.",
    "note": null,
    "relation": "blood",
    "photoIds": [
      "dentinger-family-1920s"
    ],
    "placeIds": [
      "comet-club-pewaukee"
    ],
    "storyIds": [
      "pewaukee-memories"
    ]
  },
  {
    "id": "jack-dentinger",
    "name": "Jack Dentinger",
    "gen": 4,
    "birthYear": null,
    "deathYear": null,
    "birthLabel": null,
    "deathLabel": null,
    "nickname": null,
    "parentIds": [
      "mary-helen-catharine-mueller",
      "alfred-dentinger"
    ],
    "spouseIds": [],
    "childIds": [],
    "bio": "Son of Mary Helen Catharine Mueller and Alfred Dentinger, photographed as an infant around 1920.",
    "note": null,
    "relation": "blood",
    "photoIds": [
      "dentinger-family-1920s"
    ],
    "placeIds": [
      "comet-club-pewaukee"
    ],
    "storyIds": [
      "pewaukee-memories"
    ]
  },
  {
    "id": "neil-thomas",
    "name": "Neil Thomas",
    "gen": 4,
    "birthYear": null,
    "deathYear": null,
    "birthLabel": null,
    "deathLabel": null,
    "nickname": null,
    "parentIds": [],
    "spouseIds": [
      "dorothy-dentinger"
    ],
    "childIds": [
      "june-thomas"
    ],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [
      "comet-club-pewaukee"
    ],
    "storyIds": []
  },
  {
    "id": "june-thomas",
    "name": "June Thomas",
    "gen": 5,
    "birthYear": null,
    "deathYear": null,
    "birthLabel": null,
    "deathLabel": null,
    "nickname": null,
    "parentIds": [
      "neil-thomas",
      "dorothy-dentinger"
    ],
    "spouseIds": [],
    "childIds": [],
    "bio": "Daughter of Neil and Dorothy (Dentinger) Thomas, photographed with her parents in 1953.",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [
      "comet-club-pewaukee"
    ],
    "storyIds": []
  },
  {
    "id": "gertrude-wagner-poetz",
    "name": "Gertrude Wagner Poetz",
    "gen": 3,
    "birthYear": 1898,
    "deathYear": 1988,
    "birthLabel": "17 Feb 1898",
    "deathLabel": "7 Dec 1988",
    "nickname": null,
    "parentIds": [],
    "spouseIds": [
      "henry-poetz"
    ],
    "childIds": [],
    "bio": "An orphan with no formal education, both of whose parents had been born in the U.S. Brought into EH and Anna Mueller's home at about age 13 to help care with the children — not a blood relative, but part of the household and remembered at family gatherings for decades after. Married Henry G. Poetz on May 21, 1919; he died eight years later. She worked for the Milwaukee County Home for Dependent Children from after his death until at least 1959, and was still attending the family's Thanksgiving dinners in 1956.",
    "note": null,
    "relation": "household",
    "photoIds": [],
    "placeIds": [
      "eh-27th-st",
      "milwaukee-city"
    ],
    "storyIds": [
      "holidays-at-annas",
      "gertrude-wagner"
    ]
  },
  {
    "id": "henry-poetz",
    "name": "Henry G. Poetz",
    "gen": 3,
    "birthYear": 1893,
    "deathYear": 1927,
    "birthLabel": "22 Feb 1893",
    "deathLabel": "19 Jul 1927",
    "nickname": null,
    "parentIds": [],
    "spouseIds": [
      "gertrude-wagner-poetz"
    ],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": [
      "gertrude-wagner"
    ]
  },
  {
    "id": "robert-edward-mueller-sr",
    "name": "Robert Edward Mueller Sr.",
    "gen": 4,
    "birthYear": 1902,
    "deathYear": 1987,
    "birthLabel": "21 Oct 1902",
    "deathLabel": "26 Nov 1987",
    "nickname": "Bob Sr.",
    "parentIds": [
      "eh-mueller",
      "anna-dietrich"
    ],
    "spouseIds": [
      "helen-sullivan"
    ],
    "childIds": [
      "robert-thomas-mueller",
      "jeanne-ann-mueller",
      "mary-suzanne-mueller"
    ],
    "bio": "Known as Bob Sr. Remembered Pewaukee Lake vacations in vivid detail in later life — the train out from Milwaukee, hiring a dray to haul the family's things the last mile to the Comet Clubhouse, night crabbing by lantern light along the shore, and small-scale schemes with his brothers to distract the owner of a lakeside saloon so they could pocket candy. Painted after retirement, in the family's long tradition of watercolor and oils. One of the four Mueller brothers still living at the 1983 family reunion.",
    "note": null,
    "relation": "blood",
    "photoIds": [
      "1911-family-portrait",
      "1983-reunion-four-brothers",
      "bob-sr-painting-mountains"
    ],
    "placeIds": [
      "comet-club-pewaukee",
      "eh-pewaukee-property",
      "milwaukee-city",
      "beaver-lake-julie",
      "beaver-lake-ed"
    ],
    "storyIds": [
      "midwife",
      "pewaukee-memories",
      "pewaukee-house",
      "art-and-photography",
      "beaver-lake",
      "reunions"
    ]
  },
  {
    "id": "helen-sullivan",
    "name": "Helen Sullivan Mueller",
    "gen": 4,
    "birthYear": 1901,
    "deathYear": 1972,
    "birthLabel": "19 Oct 1901",
    "deathLabel": "20 Dec 1972",
    "nickname": null,
    "parentIds": [],
    "spouseIds": [
      "robert-edward-mueller-sr"
    ],
    "childIds": [
      "robert-thomas-mueller",
      "jeanne-ann-mueller",
      "mary-suzanne-mueller"
    ],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "edward-albert-mueller-sr",
    "name": "Edward Albert Mueller Sr.",
    "gen": 4,
    "birthYear": 1904,
    "deathYear": 1997,
    "birthLabel": "7 Sep 1904",
    "deathLabel": "28 Jan 1997",
    "nickname": "Ed",
    "parentIds": [
      "eh-mueller",
      "anna-dietrich"
    ],
    "spouseIds": [
      "helen-leinss"
    ],
    "childIds": [
      "shirley-louise-mueller",
      "edward-albert-mueller-jr"
    ],
    "bio": "Known as Ed. Attended Layton School of Art, like his brother Art, and worked across photography, oils, and other media — he photographed the Beaver Lake Dinghy Club races for nearly a decade. Owned a third of Mueller Engraving / Mueller Krus Company (founded by his brother Julie) and ran its sales side; became company president after Julie's death in 1970, with his children Bim and Bob Jr. as co-owners. Purchased the family's house on Beaver Lake in 1955. One of the four Mueller brothers still living at the 1983 family reunion.",
    "note": null,
    "relation": "blood",
    "photoIds": [
      "1911-family-portrait",
      "1983-reunion-four-brothers",
      "ed-rose-photograph"
    ],
    "placeIds": [
      "comet-club-pewaukee",
      "eh-pewaukee-property",
      "milwaukee-city",
      "layton-school-of-art",
      "anna-46th-st",
      "mueller-engraving-8th",
      "mueller-krus-milwaukee-st",
      "beaver-lake-ed"
    ],
    "storyIds": [
      "pewaukee-memories",
      "pewaukee-house",
      "shirley-polio",
      "art-and-photography",
      "mueller-krus",
      "julie-accident",
      "beaver-lake",
      "holidays-at-annas",
      "reunions"
    ]
  },
  {
    "id": "helen-leinss",
    "name": "Helen Leinss Mueller",
    "gen": 4,
    "birthYear": 1907,
    "deathYear": 2001,
    "birthLabel": "26 Feb 1907",
    "deathLabel": "11 Mar 2001",
    "nickname": null,
    "parentIds": [],
    "spouseIds": [
      "edward-albert-mueller-sr"
    ],
    "childIds": [
      "shirley-louise-mueller",
      "edward-albert-mueller-jr"
    ],
    "bio": "When daughter Shirley contracted polio in 1937, Helen and Ed lived down the street from Anna Dietrich Mueller's home at the Leinss family's own house while Shirley recovered there.",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [
      "anna-46th-st",
      "beaver-lake-ed"
    ],
    "storyIds": [
      "shirley-polio",
      "mueller-krus",
      "beaver-lake",
      "holidays-at-annas"
    ]
  },
  {
    "id": "julius-theodore-mueller",
    "name": "Julius Theodore Mueller",
    "gen": 4,
    "birthYear": 1906,
    "deathYear": 1970,
    "birthLabel": "20 Jun 1906",
    "deathLabel": "22 Jul 1970",
    "nickname": "Julie",
    "parentIds": [
      "eh-mueller",
      "anna-dietrich"
    ],
    "spouseIds": [
      "genevieve-strong"
    ],
    "childIds": [],
    "bio": "Known as Julie. Trained in lithography and founded Mueller Engraving Co. in 1948, which made fine art prints and, after a 1956 fire caused about $200,000 in damage and destroyed many fine-art plates, was rebuilt and in 1964 purchased Krus Co. to become the Mueller Krus Company, with Julie as president. In 1968 the company purchased National Engraving Co., Julie's own former employer from 1941. He served in the Army's Ordnance Department, Regiment 835, Company C during World War II, deployed from July 1944 to November 1945 across England, France, Belgium, and Germany in the European Theater — a journey hard to piece together in detail since most original military records from that era burned in a 1973 fire in St. Louis. Married Genevieve Strong on November 30, 1957 in Los Angeles; they had no children. Killed instantly on July 22, 1970 in a car accident on Highway 16, when his car swerved into oncoming traffic after a tire caught the shoulder — a death that led to a Wisconsin Supreme Court case over whether his personal or his company's insurance covered the resulting liability, and to a will that, after providing for Genevieve, left a trust paying out for ten years to his 22 nieces and nephews and their children attending college full-time.",
    "note": null,
    "relation": "blood",
    "photoIds": [
      "1911-family-portrait"
    ],
    "placeIds": [
      "comet-club-pewaukee",
      "eh-pewaukee-property",
      "milwaukee-city",
      "manchester-england",
      "normandy-france",
      "anna-46th-st",
      "mueller-engraving-8th",
      "mueller-krus-milwaukee-st",
      "beaver-lake-julie",
      "los-angeles-ca",
      "highway-16-crash"
    ],
    "storyIds": [
      "pewaukee-memories",
      "pewaukee-house",
      "shirley-polio",
      "art-and-photography",
      "world-war-ii",
      "mueller-krus",
      "julie-accident",
      "beaver-lake",
      "holidays-at-annas",
      "reunions"
    ]
  },
  {
    "id": "genevieve-strong",
    "name": "Genevieve Strong Mueller",
    "gen": 4,
    "birthYear": 1908,
    "deathYear": 1990,
    "birthLabel": "8 Jan 1908",
    "deathLabel": "22 Jul 1990",
    "nickname": null,
    "parentIds": [],
    "spouseIds": [
      "julius-theodore-mueller"
    ],
    "childIds": [],
    "bio": "Born and raised in Wisconsin, worked as a clerk and stenographer in Milwaukee and Chicago before marrying Julius Theodore Mueller in Los Angeles on November 30, 1957. After his death in the 1970 accident, she received about half of his estate and control over the trust set up for his nieces, nephews, and their children.",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [
      "beaver-lake-julie",
      "los-angeles-ca"
    ],
    "storyIds": [
      "julie-accident",
      "beaver-lake"
    ]
  },
  {
    "id": "arthur-andrew-mueller",
    "name": "Arthur Andrew Mueller",
    "gen": 4,
    "birthYear": 1908,
    "deathYear": 1996,
    "birthLabel": "16 May 1908",
    "deathLabel": "5 Dec 1996",
    "nickname": "Art",
    "parentIds": [
      "eh-mueller",
      "anna-dietrich"
    ],
    "spouseIds": [
      "eileen-hannagan"
    ],
    "childIds": [
      "james-a-mueller",
      "arthur-mueller-jr",
      "linda-mueller"
    ],
    "bio": "Known as Art. Attended Layton School of Art and worked in lithography. A prolific watercolorist — he served as president of both the Men's Sketch Club of Milwaukee and the Wisconsin Watercolor Society, and his 1983 sketch of the old Comet Club clubhouse at Pewaukee Lake is one of the family's clearest records of what the place looked like. One of the four Mueller brothers still living at the 1983 family reunion.",
    "note": null,
    "relation": "blood",
    "photoIds": [
      "1911-family-portrait",
      "1983-reunion-four-brothers",
      "julius-mueller-home-painting"
    ],
    "placeIds": [
      "comet-club-pewaukee",
      "eh-pewaukee-property",
      "milwaukee-city",
      "layton-school-of-art",
      "beaver-lake-ed"
    ],
    "storyIds": [
      "midwife",
      "pewaukee-memories",
      "pewaukee-house",
      "art-and-photography",
      "reunions"
    ]
  },
  {
    "id": "eileen-hannagan",
    "name": "Eileen Hannagan Mueller",
    "gen": 4,
    "birthYear": 1914,
    "deathYear": 1984,
    "birthLabel": "19 Feb 1914",
    "deathLabel": "26 Nov 1984",
    "nickname": null,
    "parentIds": [],
    "spouseIds": [
      "arthur-andrew-mueller"
    ],
    "childIds": [
      "james-a-mueller",
      "arthur-mueller-jr",
      "linda-mueller"
    ],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "charles-benjamin-mueller",
    "name": "Charles Benjamin Mueller",
    "gen": 4,
    "birthYear": 1910,
    "deathYear": 1967,
    "birthLabel": "10 Feb 1910",
    "deathLabel": "15 Sep 1967",
    "nickname": null,
    "parentIds": [
      "eh-mueller",
      "anna-dietrich"
    ],
    "spouseIds": [
      "verna-heyden"
    ],
    "childIds": [
      "george-thomas-mueller",
      "julia-mueller",
      "richard-mueller",
      "scott-jerome-mueller",
      "maureen-therese-mueller",
      "christian-mueller",
      "mary-angel-mueller"
    ],
    "bio": "Did commercial art work and preferred watercolor, continuing the family's long involvement in art and lithography.",
    "note": null,
    "relation": "blood",
    "photoIds": [
      "1911-family-portrait",
      "charles-watercolor-boat"
    ],
    "placeIds": [
      "comet-club-pewaukee",
      "eh-pewaukee-property",
      "milwaukee-city"
    ],
    "storyIds": [
      "pewaukee-memories",
      "pewaukee-house",
      "art-and-photography",
      "reunions"
    ]
  },
  {
    "id": "verna-heyden",
    "name": "Verna Heyden Mueller",
    "gen": 4,
    "birthYear": 1914,
    "deathYear": 1970,
    "birthLabel": "2 Jan 1914",
    "deathLabel": "9 Dec 1970",
    "nickname": null,
    "parentIds": [],
    "spouseIds": [
      "charles-benjamin-mueller"
    ],
    "childIds": [
      "george-thomas-mueller",
      "julia-mueller",
      "richard-mueller",
      "scott-jerome-mueller",
      "maureen-therese-mueller",
      "christian-mueller",
      "mary-angel-mueller"
    ],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "george-alfred-mueller",
    "name": "George Alfred Mueller",
    "gen": 4,
    "birthYear": 1915,
    "deathYear": 2006,
    "birthLabel": "31 Mar 1915",
    "deathLabel": "1 Dec 2006",
    "nickname": null,
    "parentIds": [
      "eh-mueller",
      "anna-dietrich"
    ],
    "spouseIds": [
      "betty-burgess"
    ],
    "childIds": [],
    "bio": "Attended dental school at Northwestern University, paying off his education by teaching dentistry in Texas and Arkansas during World War II. Also painted in watercolor and belonged to a watercolor club in California, where several of his paintings depict San Diego and Santa Barbara scenes. One of the four Mueller brothers still living at the 1983 family reunion.",
    "note": null,
    "relation": "blood",
    "photoIds": [
      "1983-reunion-four-brothers"
    ],
    "placeIds": [
      "comet-club-pewaukee",
      "eh-pewaukee-property",
      "milwaukee-city",
      "northwestern-dental",
      "san-diego-ca",
      "beaver-lake-ed"
    ],
    "storyIds": [
      "pewaukee-memories",
      "pewaukee-house",
      "shirley-polio",
      "art-and-photography",
      "world-war-ii",
      "reunions"
    ]
  },
  {
    "id": "betty-burgess",
    "name": "Betty Burgess Mueller",
    "gen": 4,
    "birthYear": 1925,
    "deathYear": 2010,
    "birthLabel": "17 Aug 1925",
    "deathLabel": "17 Aug 2010",
    "nickname": null,
    "parentIds": [],
    "spouseIds": [
      "george-alfred-mueller"
    ],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "eileen-anne-mueller",
    "name": "Eileen Anne Mueller Ebmeier",
    "gen": 4,
    "birthYear": 1921,
    "deathYear": 2007,
    "birthLabel": "19 Nov 1921",
    "deathLabel": "4 Nov 2007",
    "nickname": null,
    "parentIds": [
      "eh-mueller",
      "anna-dietrich"
    ],
    "spouseIds": [
      "kenneth-ebmeier"
    ],
    "childIds": [
      "anne-mary-ebmeier",
      "mary-elizabeth-ebmeier",
      "kathleen-mary-ebmeier",
      "ken-john-ebmeier",
      "john-francis-ebmeier",
      "barbara-marie-ebmeier",
      "thomas-john-ebmeier",
      "michael-henry-ebmeier"
    ],
    "bio": "The youngest of EH and Anna Mueller's seven children, and the only daughter. As a girl, she spent a year living at her parents' home on 46th Street along with brothers Julie and George, while their niece Shirley recovered from polio there.",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [
      "comet-club-pewaukee",
      "eh-pewaukee-property",
      "milwaukee-city"
    ],
    "storyIds": [
      "midwife",
      "shirley-polio"
    ]
  },
  {
    "id": "kenneth-ebmeier",
    "name": "Kenneth Ebmeier",
    "gen": 4,
    "birthYear": 1922,
    "deathYear": 1995,
    "birthLabel": "16 Sep 1922",
    "deathLabel": "25 Feb 1995",
    "nickname": null,
    "parentIds": [],
    "spouseIds": [
      "eileen-anne-mueller"
    ],
    "childIds": [
      "anne-mary-ebmeier",
      "mary-elizabeth-ebmeier",
      "kathleen-mary-ebmeier",
      "ken-john-ebmeier",
      "john-francis-ebmeier",
      "barbara-marie-ebmeier",
      "thomas-john-ebmeier",
      "michael-henry-ebmeier"
    ],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "robert-thomas-mueller",
    "name": "Robert Thomas Mueller",
    "gen": 5,
    "birthYear": 1930,
    "deathYear": 1996,
    "birthLabel": "1930",
    "deathLabel": "1996",
    "nickname": null,
    "parentIds": [
      "robert-edward-mueller-sr",
      "helen-sullivan"
    ],
    "spouseIds": [],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "jeanne-ann-mueller",
    "name": "Jeanne Ann Mueller",
    "gen": 5,
    "birthYear": 1932,
    "deathYear": 1998,
    "birthLabel": "1932",
    "deathLabel": "1998",
    "nickname": null,
    "parentIds": [
      "robert-edward-mueller-sr",
      "helen-sullivan"
    ],
    "spouseIds": [],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "mary-suzanne-mueller",
    "name": "Mary Suzanne Mueller",
    "gen": 5,
    "birthYear": 1937,
    "deathYear": null,
    "birthLabel": "1937",
    "deathLabel": "living",
    "nickname": null,
    "parentIds": [
      "robert-edward-mueller-sr",
      "helen-sullivan"
    ],
    "spouseIds": [],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "shirley-louise-mueller",
    "name": "Shirley Louise Mueller",
    "gen": 5,
    "birthYear": 1929,
    "deathYear": 2020,
    "birthLabel": "1929",
    "deathLabel": "2020",
    "nickname": null,
    "parentIds": [
      "edward-albert-mueller-sr",
      "helen-leinss"
    ],
    "spouseIds": [],
    "childIds": [],
    "bio": "Came home from a Labor Day weekend at Pewaukee Lake with a fever in September 1937, at age 8, and spent three weeks in the hospital — her parents could visit once a week for thirty minutes, but only to stand at the door. Diagnosed with polio, she then spent a year at her grandparents Anna and EH Mueller's home, where Anna exercised her legs and her uncles massaged them and carried her around the house until she could walk again. Later in life she experienced post-polio syndrome, with breathing trouble and loss of leg strength.",
    "note": null,
    "relation": "blood",
    "photoIds": [
      "shirley-bim-1931",
      "shirley-mueller-pewaukee-1943"
    ],
    "placeIds": [
      "beaver-lake-ed",
      "comet-club-pewaukee",
      "anna-46th-st"
    ],
    "storyIds": [
      "pewaukee-house",
      "shirley-polio"
    ]
  },
  {
    "id": "edward-albert-mueller-jr",
    "name": "Edward Albert Mueller Jr.",
    "gen": 5,
    "birthYear": 1931,
    "deathYear": 2021,
    "birthLabel": "1931",
    "deathLabel": "2021",
    "nickname": null,
    "parentIds": [
      "edward-albert-mueller-sr",
      "helen-leinss"
    ],
    "spouseIds": [],
    "childIds": [],
    "bio": "Known as Bim. Photographed as a baby with his older sister Shirley in 1931. Later co-owned the Mueller Krus Company alongside his father Ed and brother Bob Jr.",
    "note": null,
    "relation": "blood",
    "photoIds": [
      "shirley-bim-1931"
    ],
    "placeIds": [
      "mueller-krus-milwaukee-st",
      "beaver-lake-ed"
    ],
    "storyIds": [
      "pewaukee-house",
      "shirley-polio",
      "mueller-krus"
    ]
  },
  {
    "id": "james-a-mueller",
    "name": "James A. Mueller",
    "gen": 5,
    "birthYear": 1938,
    "deathYear": 2012,
    "birthLabel": "1938",
    "deathLabel": "2012",
    "nickname": null,
    "parentIds": [
      "arthur-andrew-mueller",
      "eileen-hannagan"
    ],
    "spouseIds": [],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "arthur-mueller-jr",
    "name": "Arthur Mueller Jr.",
    "gen": 5,
    "birthYear": 1942,
    "deathYear": null,
    "birthLabel": "1942",
    "deathLabel": "living",
    "nickname": null,
    "parentIds": [
      "arthur-andrew-mueller",
      "eileen-hannagan"
    ],
    "spouseIds": [],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "linda-mueller",
    "name": "Linda Mueller",
    "gen": 5,
    "birthYear": 1946,
    "deathYear": 1987,
    "birthLabel": "1946",
    "deathLabel": "1987",
    "nickname": null,
    "parentIds": [
      "arthur-andrew-mueller",
      "eileen-hannagan"
    ],
    "spouseIds": [],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "george-thomas-mueller",
    "name": "George Thomas Mueller",
    "gen": 5,
    "birthYear": 1947,
    "deathYear": 2011,
    "birthLabel": "1947",
    "deathLabel": "2011",
    "nickname": null,
    "parentIds": [
      "charles-benjamin-mueller",
      "verna-heyden"
    ],
    "spouseIds": [],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "julia-mueller",
    "name": "Julia Mueller",
    "gen": 5,
    "birthYear": 1949,
    "deathYear": null,
    "birthLabel": "1949",
    "deathLabel": "living",
    "nickname": null,
    "parentIds": [
      "charles-benjamin-mueller",
      "verna-heyden"
    ],
    "spouseIds": [],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "richard-mueller",
    "name": "Richard Mueller",
    "gen": 5,
    "birthYear": null,
    "deathYear": null,
    "birthLabel": null,
    "deathLabel": null,
    "nickname": null,
    "parentIds": [
      "charles-benjamin-mueller",
      "verna-heyden"
    ],
    "spouseIds": [],
    "childIds": [],
    "bio": "Recalled, according to family history, that his uncle Julie stopped in Las Vegas on his way to California to visit — traveling without Genevieve.",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "scott-jerome-mueller",
    "name": "Scott Jerome Mueller",
    "gen": 5,
    "birthYear": null,
    "deathYear": null,
    "birthLabel": null,
    "deathLabel": null,
    "nickname": null,
    "parentIds": [
      "charles-benjamin-mueller",
      "verna-heyden"
    ],
    "spouseIds": [],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "maureen-therese-mueller",
    "name": "Maureen Therese Mueller",
    "gen": 5,
    "birthYear": null,
    "deathYear": null,
    "birthLabel": null,
    "deathLabel": null,
    "nickname": null,
    "parentIds": [
      "charles-benjamin-mueller",
      "verna-heyden"
    ],
    "spouseIds": [],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "christian-mueller",
    "name": "Christian Mueller",
    "gen": 5,
    "birthYear": 1957,
    "deathYear": 1991,
    "birthLabel": "1957",
    "deathLabel": "1991",
    "nickname": null,
    "parentIds": [
      "charles-benjamin-mueller",
      "verna-heyden"
    ],
    "spouseIds": [],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "mary-angel-mueller",
    "name": "Mary Angel Mueller",
    "gen": 5,
    "birthYear": 1968,
    "deathYear": 2023,
    "birthLabel": "1968",
    "deathLabel": "2023",
    "nickname": null,
    "parentIds": [
      "charles-benjamin-mueller",
      "verna-heyden"
    ],
    "spouseIds": [],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "anne-mary-ebmeier",
    "name": "Anne Mary Ebmeier",
    "gen": 5,
    "birthYear": 1951,
    "deathYear": null,
    "birthLabel": "1951",
    "deathLabel": "living",
    "nickname": null,
    "parentIds": [
      "eileen-anne-mueller",
      "kenneth-ebmeier"
    ],
    "spouseIds": [],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "mary-elizabeth-ebmeier",
    "name": "Mary Elizabeth Ebmeier",
    "gen": 5,
    "birthYear": 1952,
    "deathYear": null,
    "birthLabel": "1952",
    "deathLabel": "living",
    "nickname": null,
    "parentIds": [
      "eileen-anne-mueller",
      "kenneth-ebmeier"
    ],
    "spouseIds": [],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "kathleen-mary-ebmeier",
    "name": "Kathleen Mary Ebmeier",
    "gen": 5,
    "birthYear": 1954,
    "deathYear": null,
    "birthLabel": "1954",
    "deathLabel": "living",
    "nickname": null,
    "parentIds": [
      "eileen-anne-mueller",
      "kenneth-ebmeier"
    ],
    "spouseIds": [],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "ken-john-ebmeier",
    "name": "Ken John Ebmeier",
    "gen": 5,
    "birthYear": 1957,
    "deathYear": null,
    "birthLabel": "1957",
    "deathLabel": "living",
    "nickname": null,
    "parentIds": [
      "eileen-anne-mueller",
      "kenneth-ebmeier"
    ],
    "spouseIds": [],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "john-francis-ebmeier",
    "name": "John Francis Ebmeier",
    "gen": 5,
    "birthYear": 1958,
    "deathYear": null,
    "birthLabel": "1958",
    "deathLabel": "living",
    "nickname": null,
    "parentIds": [
      "eileen-anne-mueller",
      "kenneth-ebmeier"
    ],
    "spouseIds": [],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "barbara-marie-ebmeier",
    "name": "Barbara Marie Ebmeier",
    "gen": 5,
    "birthYear": 1959,
    "deathYear": null,
    "birthLabel": "1959",
    "deathLabel": "living",
    "nickname": null,
    "parentIds": [
      "eileen-anne-mueller",
      "kenneth-ebmeier"
    ],
    "spouseIds": [],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "thomas-john-ebmeier",
    "name": "Thomas John Ebmeier",
    "gen": 5,
    "birthYear": 1963,
    "deathYear": 1963,
    "birthLabel": "1963",
    "deathLabel": "1963",
    "nickname": null,
    "parentIds": [
      "eileen-anne-mueller",
      "kenneth-ebmeier"
    ],
    "spouseIds": [],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  },
  {
    "id": "michael-henry-ebmeier",
    "name": "Michael Henry Ebmeier",
    "gen": 5,
    "birthYear": 1965,
    "deathYear": null,
    "birthLabel": "1965",
    "deathLabel": "living",
    "nickname": null,
    "parentIds": [
      "eileen-anne-mueller",
      "kenneth-ebmeier"
    ],
    "spouseIds": [],
    "childIds": [],
    "bio": "",
    "note": null,
    "relation": "blood",
    "photoIds": [],
    "placeIds": [],
    "storyIds": []
  }
];
