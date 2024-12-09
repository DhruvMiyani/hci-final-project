// Station data// Station data
const stationData = [
  { number: 'L32001', name: "Railroad Lot and Minuteman Bikeway", zip: "02174", docks: 11.0 },
  { number: 'L32002', name: "Linwood St at Minuteman Bikeway", zip: "02474", docks: 11.0 },
  { number: 'L32005', name: "Thorndike Field at Minuteman Bikeway", zip: "02474", docks: 11.0 },
  { number: 'L32003', name: "Mass Ave at Grafton St", zip: "02474", docks: 11.0 },
  { number: 'L32004', name: "Broadway at Grafton St", zip: "02474", docks: 11.0 },
  { number: 'L32006', name: "Mass Ave at Broadway", zip: "02174", docks: 11.0 },
  { number: 'A32000', name: "Fan Pier", zip: "02210", docks: 15.0 },
  { number: 'A32001', name: "Union Square - Brighton Ave at Cambridge St", zip: "02134", docks: 19.0 },
  { number: 'A32002', name: "Commonwealth Ave at Agganis Way", zip: "02215", docks: 15.0 },
  { number: 'A32003', name: "B.U. Central - 725 Comm. Ave.", zip: "02215", docks: 11.0 },
  { number: 'A32004', name: "Longwood Ave at Binney St", zip: "02120", docks: 15.0 },
  { number: 'A32005', name: "Brighton Mills - 370 Western Ave", zip: "02134", docks: 15.0 },
  { number: 'A32006', name: "Soldiers Field Park - 111 Western Ave", zip: "02163", docks: 15.0 },
  { number: 'A32008', name: "Park Dr at Buswell St", zip: "02215", docks: 15.0 },
  { number: 'A32009', name: "South End Library - Tremont St at W Newton St", zip: "02199", docks: 15.0 },
  { number: 'A32010', name: "South Station - 700 Atlantic Ave", zip: "02210", docks: 47.0 },
  { number: 'A32011', name: "Innovation Lab - 125 Western Ave at Batten Way", zip: "02140", docks: 19.0 },
  { number: 'A32012', name: "Packard's Corner - Commonwealth Ave at Brighton Ave", zip: "02215", docks: 27.0 },
  { number: 'A32013', name: "Surface Rd at India St", zip: "02110", docks: 19.0 },
  { number: 'A32017', name: "Commonwealth Ave at Griggs St", zip: "02134", docks: 15.0 },
  { number: 'A32019', name: "175 N Harvard St", zip: "02163", docks: 18.0 },
  { number: 'A32022', name: "Edwards Playground - Main St at Eden St", zip: "02129", docks: 19.0 },
  { number: 'A32023', name: "Bunker Hill Community College", zip: "02129", docks: 23.0 },
  { number: 'A32025', name: "Nashua Street at Red Auerbach Way", zip: "02114", docks: 37.0 },
  { number: 'A32026', name: "Purchase St at Pearl St", zip: "02110", docks: 19.0 },
  { number: 'A32028', name: "Bennington St at Byron St", zip: "02128", docks: 15.0 },
  { number: 'A32030', name: "Maverick Square - Lewis Mall", zip: "02128", docks: 33.0 },
  { number: 'A32031', name: "East Boston Neighborhood Health Center - 20 Maverick Square", zip: "02128", docks: 16.0 },
  { number: 'A32033', name: "The Eddy - New St at Sumner St", zip: "02109", docks: 15.0 },
  { number: 'A32035', name: "Orient Heights T Stop - Bennington St at Saratoga St", zip: "02128", docks: 19.0 },
  { number: 'A32036', name: "Boston East - 126 Border St", zip: "02128", docks: 15.0 },
  { number: 'A32039', name: "Bennington St at Constitution Beach", zip: "02128", docks: 17.0 },
  { number: 'A32040', name: "Honan Library", zip: "02134", docks: 15.0 },
  { number: 'A32041', name: "Central Square East Boston", zip: "02128", docks: 15.0 },
  { number: 'A32042', name: "Surface Rd at Summer St", zip: "02110", docks: 27.0 },
  { number: 'A32044', name: "Maverick St at Massport Path", zip: "02128", docks: 15.0 },
  { number: 'A32045', name: "Boston Landing", zip: "02135", docks: 17.0 },
  { number: 'A32049', name: "Gove St at Orleans St", zip: "02128", docks: 19.0 },
  { number: 'A32050', name: "Porzio Park", zip: "02128", docks: 17.0 },
  { number: 'A32051', name: "Day Sq", zip: "02128", docks: 16.0 },
  { number: 'A32052', name: "Harvard Stadium: N. Harvard St at Soldiers Field Rd", zip: "02140", docks: 15.0 },
  { number: 'A32053', name: "Valenti Way at Haverhill St", zip: "02222", docks: 24.0 },
  { number: 'B32002', name: "Ruggles T Stop - Columbus Ave at Melnea Cass Blvd", zip: "02115", docks: 26.0 },
  { number: 'B32003', name: "HMS/HSPH - Avenue Louis Pasteur at Longwood Ave", zip: "02115", docks: 25.0 },
  { number: 'B32004', name: "Aquarium T Stop - 200 Atlantic Ave", zip: "02109", docks: 23.0 },
  { number: 'B32005', name: "Christian Science Plaza - Massachusetts Ave at Westland Ave", zip: "02199", docks: 19.0 },
  { number: 'B32006', name: "Colleges of the Fenway - Fenway at Avenue Louis Pasteur", zip: "02115", docks: 15.0 },
  { number: 'B32007', name: "Seaport Square - Seaport Blvd at Northern Ave", zip: "02210", docks: 23.0 },
  { number: 'B32008', name: "Boston City Hall - 28 State St", zip: "02201", docks: 25.0 },
  { number: 'B32010', name: "Kenmore Square", zip: "02115", docks: 27.0 },
  { number: 'B32013', name: "Brigham Circle - Francis St at Huntington Ave", zip: "02115", docks: 15.0 },
  { number: 'B32014', name: "Seaport Hotel - Congress St at Seaport Ln", zip: "02210", docks: 19.0 },
  { number: 'B32015', name: "Landmark Center - Brookline Ave at Park Dr", zip: "02215", docks: 15.0 },
  { number: 'B32017', name: "Dudley Square - Bolling Building", zip: "02119", docks: 18.0 },
  { number: 'B32018', name: "Boylston St at Massachusetts Ave", zip: "02115", docks: 15.0 },
  { number: 'B32020', name: "Burlington Ave at Brookline Ave", zip: "02215", docks: 15.0 },
  { number: 'B32021', name: "Wentworth Institute of Technology - Huntington Ave at Vancouver St", zip: "02115", docks: 14.0 },
  { number: 'B32022', name: "Roxbury YMCA - Warren St at MLK Blvd", zip: "02119", docks: 10.0 },
  { number: 'B32023', name: "MLK Blvd at Washington St", zip: "02119", docks: 15.0 },
  { number: 'B32026', name: "Washington St at Melnea Cass Blvd", zip: "02119", docks: 19.0 },
  { number: 'B32027', name: "NCAAA - Walnut Ave at Crawford St", zip: "02119", docks: 15.0 },
  { number: 'B32028', name: "Grove Hall Library - 41 Geneva Ave", zip: "02121", docks: 15.0 },
  { number: 'B32029', name: "Columbia Rd at Ceylon St", zip: "02125", docks: 15.0 },
  { number: 'B32031', name: "Bowdoin St at Quincy St", zip: "02125", docks: 15.0 },
  { number: 'B32032', name: "Government Center - Cambridge St at Court St", zip: "02112", docks: 35.0 },
  { number: 'B32033', name: "Huntington Ave at Mass Art", zip: "02115", docks: 15.0 },
  { number: 'B32034', name: "Boylston St at Jersey St", zip: "02215", docks: 15.0 },
  { number: 'B32035', name: "Cleveland Circle", zip: "02135", docks: 15.0 },
  { number: 'B32036', name: "One Brigham Circle", zip: "02120", docks: 15.0 },
  { number: 'B32037', name: "Deerfield St at Commonwealth Ave", zip: "02215", docks: 19.0 },
  { number: 'B32055', name: "Bartlett St at John Elliot Sq", zip: "02119", docks: 15.0 },
  { number: 'B32056', name: "Tremont St at Hamilton Pl", zip: "02108", docks: 19.0 },
  { number: 'B32058', name: "Lansdowne T Stop", zip: "02215", docks: 27.0 },
  { number: 'B32059', name: "Whittier St Health Center", zip: "02120", docks: 19.0 },
  { number: 'B32060', name: "700 Commonwealth Ave.", zip: "02215", docks: 16.0 },
  { number: 'B32061', name: "One Beacon St", zip: "02108", docks: 16.0 },
  { number: 'C32000', name: "Tremont St at E Berkeley St", zip: "02116", docks: 19.0 },
  { number: 'C32001', name: "Roxbury Crossing T Stop - Columbus Ave at Tremont St", zip: "02120", docks: 23.0 },
  { number: 'C32003', name: "Back Bay T Stop - Dartmouth St at Stuart St", zip: "02117", docks: 19.0 },
  { number: 'C32004', name: "Massachusetts Ave at Columbus Ave", zip: "02199", docks: 14.0 },
  { number: 'C32005', name: "Washington St at Lenox St", zip: "02118", docks: 15.0 },
  { number: 'C32006', name: "Washington St at Rutland St", zip: "02118", docks: 27.0 },
  { number: 'C32007', name: "Prudential Center - 101 Huntington Ave", zip: "02199", docks: 18.0 },
  { number: 'C32008', name: "Boylston St at Fairfield St", zip: "02116", docks: 19.0 },
  { number: 'C32009', name: "Dorchester Ave at Gillette Park", zip: "02205", docks: 15.0 },
  { number: 'C32013', name: "JFK/UMass T Stop", zip: "02125", docks: 31.0 },
  { number: 'C32014', name: "University of Massachusetts Boston - Campus Center", zip: "02125", docks: 19.0 },
  { number: 'C32016', name: "W Broadway at Dorchester St", zip: "02127", docks: 17.0 },
  { number: 'C32017', name: "South Boston Library - 646 E Broadway", zip: "02127", docks: 15.0 },
  { number: 'C32020', name: "ID Building East", zip: "02127", docks: 17.0 },
  { number: 'C32021', name: "ID Building West", zip: "02127", docks: 19.0 },
  { number: 'C32022', name: "Newmarket Square T Stop - Massachusetts Ave at Newmarket Square", zip: "01125", docks: 15.0 },
  { number: 'C32023', name: "Murphy Skating Rink - 1880 Day Blvd", zip: "02127", docks: 19.0 },
  { number: 'C32024', name: "State Street at Channel Center", zip: "02205", docks: 19.0 },
  { number: 'C32025', name: "Ink Block - Harrison Ave at Herald St", zip: "02118", docks: 27.0 },
  { number: 'C32027', name: "Franklin Park - Seaver St at Humboldt Ave", zip: "02121", docks: 15.0 },
  { number: 'C32028', name: "The Lawn on D", zip: "02210", docks: 19.0 },
  { number: 'C32029', name: "W Broadway at D St", zip: "02127", docks: 23.0 },
  { number: 'C32030', name: "Franklin Park Zoo - Franklin Park Rd at Blue Hill Ave", zip: "02121", docks: 14.0 },
  { number: 'C32032', name: "Congress St at Northern Ave", zip: "02210", docks: 15.0 },
  { number: 'C32033', name: "Savin Hill T Stop - S Sydney St at Bay St", zip: "02125", docks: 14.0 },
  { number: 'C32034', name: "Watermark Seaport - Boston Wharf Rd at Seaport Blvd", zip: "02210", docks: 15.0 },
  { number: 'C32035', name: "Troy Boston", zip: "02118", docks: 14.0 },
  { number: 'C32036', name: "Seaport Blvd at Sleeper St", zip: "02210", docks: 15.0 },
  { number: 'C32037', name: "Four Corners - 157 Washington St", zip: "02121", docks: 11.0 },
  { number: 'C32038', name: "Washington St at Talbot Ave", zip: "02124", docks: 17.0 },
  { number: 'C32040', name: "Gallivan Blvd at Adams St", zip: "02122", docks: 15.0 },
  { number: 'C32041', name: "Fields Corner T Stop", zip: "02122", docks: 15.0 },
  { number: 'C32043', name: "Talbot Ave At Blue Hill Ave", zip: "02121", docks: 15.0 },
  { number: 'C32044', name: "Blue Hill Ave at Almont St", zip: "02126", docks: 19.0 },
  { number: 'C32045', name: "Mattapan T Stop", zip: "02126", docks: 15.0 },
  { number: 'C32046', name: "Roslindale Village - Washington St", zip: "02131", docks: 15.0 },
  { number: 'C32047', name: "Roslindale Village - South St", zip: "02131", docks: 15.0 },
  { number: 'C32048', name: "Archdale Rd at Washington St", zip: "02131", docks: 15.0 },
  { number: 'C32050', name: "Mattapan Library", zip: "02126", docks: 15.0 },
  { number: 'C32051', name: "Farragut Rd at E. 6th St", zip: "02127", docks: 23.0 },
  { number: 'C32052', name: "Columbia Rd at Tierney Community Center", zip: "01125", docks: 19.0 },
  { number: 'C32053', name: "Broadway T Stop", zip: "02127", docks: 19.0 },
  { number: 'C32055', name: "Codman Square Library", zip: "02124", docks: 17.0 },
  { number: 'C32056', name: "Tremont St at Northampton St", zip: "02118", docks: 19.0 },
  { number: 'C32057', name: "Harrison Ave at Mullins Way", zip: "02118", docks: 19.0 },
  { number: 'C32059', name: "Belgrade Ave at Walworth St", zip: "02131", docks: 15.0 },
  { number: 'C32060', name: "Tremont St at W. Dedham St", zip: "02118", docks: 15.0 },
  { number: 'C32061', name: "Albany St at E. Brookline St", zip: "02118", docks: 15.0 },
  { number: 'C32062', name: "Ashmont T Stop", zip: "02124", docks: 15.0 },
  { number: 'C32063', name: "Mass Ave T Station", zip: "02199", docks: 16.0 },
  { number: 'C32064', name: "Sydney St at Carson St", zip: "02125", docks: 19.0 },
  { number: 'C32066', name: "Dorchester Ave at King St", zip: "02124", docks: 15.0 },
  { number: 'C32077', name: "Columbus Ave at W. Canton St", zip: "02117", docks: 19.0 },
  { number: 'C32079', name: "American Legion Hwy at Cummins Hwy", zip: "02131", docks: 15.0 },
  { number: 'C32085', name: "Centre St at W. Roxbury Post Office", zip: "02132", docks: 19.0 },
  { number: 'C32086', name: "Centre St at Parkway YMCA", zip: "02132", docks: 19.0 },
  { number: 'C32087', name: "Spring St at Powell St", zip: "02132", docks: 19.0 },
  { number: 'C32089', name: "Hyde Park Ave at Walk Hill St", zip: "02131", docks: 15.0 },
  { number: 'C32090', name: "Geiger Gibson Community Health Center", zip: "02125", docks: 19.0 },
  { number: 'C32091', name: "645 Summer St", zip: "02127", docks: 19.0 },
  { number: 'C32092', name: "Blue Hill Ave at Havelock St", zip: "02124", docks: 18.0 },
  { number: 'C32093', name: "Harrison Ave at E. Dedham St", zip: "02118", docks: 19.0 },
  { number: 'C32094', name: "2 Hummingbird Lane at Olmsted Green", zip: "02126", docks: 17.0 },
  { number: 'C32099', name: "Circuit Drive at American Legion Hwy", zip: "02121", docks: 19.0 },
  { number: 'C32102', name: "Walnut Ave at School St", zip: "02119", docks: 19.0 },
  { number: 'C32103', name: "Morton St at Gallivan Blvd", zip: "02126", docks: 15.0 },
  { number: 'C32104', name: "Cleary Sq", zip: "02136", docks: 16.0 },
  { number: 'C32105', name: "606 American Legion Hwy at Canterbury St", zip: "02131", docks: 18.0 },
  { number: 'C32106', name: "555 Metropolitan Ave", zip: "02137", docks: 18.0 },
  { number: 'D32000', name: "Cambridge St at Joy St", zip: "02114", docks: 15.0 },
  { number: 'D32001', name: "New Balance - 20 Guest St", zip: "02135", docks: 15.0 },
  { number: 'D32002', name: "Washington St at Waltham St", zip: "02118", docks: 15.0 },
  { number: 'D32005', name: "Copley Square - Dartmouth St at Boylston St", zip: "02116", docks: 33.0 },
  { number: 'D32006', name: "Lewis Wharf at Atlantic Ave", zip: "02109", docks: 19.0 },
  { number: 'D32007', name: "Boylston St at Arlington St", zip: "02108", docks: 31.0 },
  { number: 'D32008', name: "Rowes Wharf at Atlantic Ave", zip: "02110", docks: 15.0 },
  { number: 'D32009', name: "Congress St at Boston City Hall", zip: "02201", docks: 23.0 },
  { number: 'D32010', name: "Cross St at Hanover St", zip: "02113", docks: 19.0 },
  { number: 'D32011', name: "Stuart St at Charles St", zip: "02116", docks: 18.0 },
  { number: 'D32013', name: "Boylston St at Berkeley St", zip: "02116", docks: 15.0 },
  { number: 'D32014', name: "Tremont St at West St", zip: "02111", docks: 15.0 },
  { number: 'D32015', name: "Chinatown Gate Plaza", zip: "02111", docks: 19.0 },
  { number: 'D32016', name: "Charles Circle - Charles St at Cambridge St", zip: "02114", docks: 19.0 },
  { number: 'D32017', name: "Mugar Way at Beacon St", zip: "02116", docks: 19.0 },
  { number: 'D32018', name: "Boston Convention and Exhibition Center - Summer St at West Side Dr", zip: "02210", docks: 23.0 },
  { number: 'D32019', name: "Chinatown T Stop", zip: "02111", docks: 19.0 },
  { number: 'D32020', name: "Main St at Austin St", zip: "02129", docks: 11.0 },
  { number: 'D32021', name: "Warren St at Chelsea St", zip: "02129", docks: 23.0 },
  { number: 'D32022', name: "West End Park", zip: "02114", docks: 35.0 },
  { number: 'D32023', name: "Spaulding Rehabilitation Hospital - Charlestown Navy Yard", zip: "02129", docks: 19.0 },
  { number: 'D32024', name: "Beacon St at Charles St", zip: "02108", docks: 19.0 },
  { number: 'D32028', name: "Brighton Center - Washington St at Cambridge St", zip: "02135", docks: 17.0 },
  { number: 'D32029', name: "Washington St at Brock St", zip: "02135", docks: 15.0 },
  { number: 'D32031', name: "Oak Square - 615 Washington St", zip: "02135", docks: 15.0 },
  { number: 'D32032', name: "Silber Way", zip: "02215", docks: 19.0 },
  { number: 'D32033', name: "Commonwealth Ave at Chiswick Rd", zip: "02135", docks: 19.0 },
  { number: 'D32034', name: "Commonwealth Ave at Kelton St", zip: "02135", docks: 15.0 },
  { number: 'D32035', name: "Harvard Ave at Brainerd Rd", zip: "02134", docks: 15.0 },
  { number: 'D32036', name: "Main St at Baldwin St", zip: "02129", docks: 19.0 },
  { number: 'D32037', name: "Medford St at Charlestown BCYF", zip: "02129", docks: 19.0 },
  { number: 'D32038', name: "Main St at Thompson Sq", zip: "02129", docks: 15.0 },
  { number: 'D32039', name: "Charlestown Navy Yard", zip: "02129", docks: 23.0 },
  { number: 'D32040', name: "Williams St at Washington St", zip: "02130", docks: 23.0 },
  { number: 'D32041', name: "Stony Brook T Stop", zip: "02130", docks: 19.0 },
  { number: 'D32042', name: "Park Plaza at Charles St S.", zip: "02116", docks: 19.0 },
  { number: 'D32043', name: "Harrison Ave at Bennet St", zip: "02111", docks: 19.0 },
  { number: 'D32045', name: "Dartmouth St at Newbury St", zip: "02116", docks: 19.0 },
  { number: 'D32046', name: "Boylston St at Exeter St", zip: "02116", docks: 19.0 },
  { number: 'D32048', name: "Shawmut Ave at Oak St W", zip: "02116", docks: 15.0 },
  { number: 'D32049', name: "Stuart St at Berkeley St", zip: "02117", docks: 19.0 },
  { number: 'D32052', name: "Jamaica St at South St", zip: "02130", docks: 19.0 },
  { number: 'D32053', name: "Sullivan Square", zip: "02145", docks: 19.0 },
  { number: 'D32054', name: "The Overlook at St. Gabriel's", zip: "02135", docks: 19.0 },
  { number: 'D32057', name: "Clinton St at North St", zip: "02109", docks: 18.0 },
  { number: 'E32001', name: "Curtis Hall - South St at Centre St", zip: "02130", docks: 15.0 },
  { number: 'E32003', name: "Hyde Square - Barbara St at Centre St", zip: "02120", docks: 15.0 },
  { number: 'E32004', name: "Egleston Square - Atherton St at Washington St", zip: "02130", docks: 15.0 },
  { number: 'E32005', name: "Green Street T Stop - Green St at Amory St", zip: "02130", docks: 23.0 },
  { number: 'E32006', name: "Jackson Square T Stop", zip: "02120", docks: 18.0 },
  { number: 'E32007', name: "S Huntington Ave at Heath St", zip: "02130", docks: 15.0 },
  { number: 'E32009', name: "Shawmut T Stop", zip: "02124", docks: 19.0 },
  { number: 'E32010', name: "Forest Hills", zip: "02130", docks: 40.0 },
  { number: 'E32011', name: "The Dimock Center", zip: "02119", docks: 16.0 },
  { number: 'E32012', name: "Martha Eliot Health Center", zip: "02120", docks: 16.0 },
  { number: 'B32062', name: "Forsyth St at Huntington Ave", zip: "02115", docks: 15.0 },
  { number: 'E32013', name: "Hyde Park Library", zip: "02137", docks: 15.0 },
  { number: 'E32014', name: "Ross Playground", zip: "02137", docks: 19.0 },
  { number: 'B32063', name: "St. Alphonsus St at Tremont St", zip: "02120", docks: 18.0 },
  { number: 'B32064', name: "Flat 9 at Whittier", zip: "02115", docks: 15.0 },
  { number: 'C32107', name: "Pier 4 Blvd at Autumn Ln", zip: "02210", docks: 19.0 },
  { number: 'D32059', name: "Shawmut Ave at Lenox St", zip: "02118", docks: 19.0 },
  { number: 'D32060', name: "Hood Park", zip: "02129", docks: 23.0 },
  { number: 'A32056', name: "Riverway at Brookline Ave", zip: "02215", docks: 25.0 },
  { number: 'D32061', name: "Lenox St at Kendall St", zip: "02199", docks: 17.0 },
  { number: 'A32032', name: "Bremen St at Marion St", zip: "02128", docks: 11.0 },
  { number: 'A32057', name: "Lewis Mall Wharf", zip: "02109", docks: 21.0 },
  { number: 'C32108', name: "Beach St at Freeport St", zip: "02212", docks: 19.0 },
  { number: 'C32110', name: "Talbot Ave T Station", zip: "02124", docks: 19.0 },
  { number: 'C23109', name: "Cedar Grove T Stop", zip: "02124", docks: 18.0 },
  { number: 'C32111', name: "Four Corners/Geneva T Stop", zip: "02121", docks: 15.0 },
  { number: 'Z32999', name: "Cummins Highway at Blue Hill Ave T Stop", zip: "02126", docks: 14.0 },
  { number: 'Z32997', name: "Parker St at Huntington Ave", zip: "02115", docks: 19.0 },
  { number: 'C32112', name: "Meaney Playground - Pleasant St at E Cottage St", zip: "02125", docks: 17.0 },
  { number: 'C32113', name: "Hancock St at Pleasant St", zip: "02122", docks: 19.0 },
  { number: 'E32015', name: "Lincoln St at Empire St", zip: "02134", docks: 19.0 },
  { number: 'E32016', name: "Commonwealth Ave at Naples Rd", zip: "02134", docks: 19.0 },
  { number: 'E32017', name: "Butler T Stop", zip: "02124", docks: 15.0 },
  { number: 'A32058', name: "Tremont St at Court St", zip: "02203", docks: 23.0 },
  { number: 'D32004', name: "Arch St at Franklin St", zip: "02102", docks: 31.0 },
  { number: 'D32047', name: "Clarendon St at Newbury St", zip: "02116", docks: 19.0 },
  { number: 'E32008', name: "Centre St at Seaverns Ave", zip: "02130", docks: 15.0 },
  { number: 'D32058', name: "Brighton Ave at Linden St", zip: "02134", docks: 19.0 },
  { number: 'A32047', name: "Broad St at Central St", zip: "02109", docks: 15.0 },
  { number: 'C32101', name: "American Legion Hwy at Hyde Park Ave", zip: "02131", docks: 19.0 },
  { number: 'D32012', name: "Post Office Square", zip: "02110", docks: 19.0 },
  { number: 'B32012', name: "Northeastern University - North Parking Lot", zip: "02115", docks: 15.0 },
  { number: 'B32016', name: "Beacon St at Massachusetts Ave", zip: "02116", docks: 19.0 },
  { number: 'C32083', name: "Washington St at Walsh Playground", zip: "02124", docks: 19.0 },
  { number: 'C32084', name: "Washington St at Fuller St", zip: "02124", docks: 15.0 },
  { number: 'C32088', name: "Central Ave at River St", zip: "02126", docks: 15.0 },
  { number: 'C32081', name: "Washington St at Denton Terr", zip: "02131", docks: 19.0 },
  { number: 'C32095', name: "Bellevue T Stop", zip: "02132", docks: 19.0 },
  { number: 'C32096', name: "Knoll St at Centre St", zip: "02131", docks: 19.0 },
  { number: 'C32078', name: "Northbourne Rd at Hyde Park Ave", zip: "02130", docks: 19.0 },
  { number: 'C32080', name: "Mt. Hope St at Hyde Park Ave", zip: "02131", docks: 19.0 },
  { number: 'C32100', name: "Hyde Park Ave at Arlington St", zip: "02137", docks: 19.0 },
  { number: 'C32012', name: "Andrew T Stop - Dorchester Ave at Dexter St", zip: "01125", docks: 15.0 },
  { number: 'C32067', name: "Washington St at Peters Park", zip: "02118", docks: 19.0 },
  { number: 'C32010', name: "Congress St at Sleeper St", zip: "02210", docks: 19.0 },
  { number: 'C32058', name: "Ring Rd", zip: "02199", docks: 15.0 },
  { number: 'A32029', name: "Piers Park", zip: "02128", docks: 15.0 },
  { number: 'A32055', name: "Airport T Stop - Bremen St at Brooks St", zip: "02128", docks: 15.0 },
  { number: 'A32034', name: "Glendon St at Condor St", zip: "02128", docks: 19.0 },
  { number: 'A32037', name: "Washington St at Egremont Rd", zip: "02135", docks: 15.0 },
  { number: 'A32043', name: "Western Ave at Richardson St", zip: "02134", docks: 19.0 },
  { number: 'A32048', name: "Marion St at White St", zip: "02128", docks: 19.0 },
  { number: 'B32000', name: "Newbury St at Hereford St", zip: "02115", docks: 23.0 },
  { number: 'B32025', name: "Uphams Corner T Stop - Magnolia St at Dudley St", zip: "02125", docks: 15.0 },
  { number: 'B32030', name: "Walnut Ave at Warren St", zip: "02119", docks: 15.0 },
  { number: 'B32057', name: "Blue Hill Ave at Southwood St", zip: "02119", docks: 15.0 },
  { number: 'C23045', name: "Morton St T", zip: "02126", docks: 15.0 },
  { number: 'C32002', name: "Boston Medical Center - E Concord St at Harrison Ave", zip: "02118", docks: 19.0 },
  { number: 'C32018', name: "E Cottage St at Columbia Rd", zip: "02125", docks: 19.0 },
  { number: 'C32019', name: "Uphams Corner", zip: "02125", docks: 15.0 },
  { number: 'C32031', name: "Ryan Playground - Dorchester Ave at Harbor View St", zip: "02125", docks: 15.0 },
  { number: 'C32039', name: "Park St at Norwell St", zip: "02121", docks: 15.0 },
  { number: 'C32042', name: "Washington St at Bowdoin St", zip: "02212", docks: 15.0 },
  { number: 'C32049', name: "Thetford Ave at Norfolk St", zip: "02124", docks: 15.0 },
  { number: 'C32065', name: "Adams St at Lonsdale St", zip: "02122", docks: 15.0 },
  { number: 'D32026', name: "Hayes Square - Vine St at Moulton St", zip: "02129", docks: 19.0 },
  { number: 'D32050', name: "Blossom St at Charles St", zip: "02114", docks: 15.0 },
  { number: 'A32054', name: "Addison St at Saratoga St", zip: "02128", docks: 19.0 },
  { number: 'C32015', name: "Dudley Town Common - Mt Pleasant Ave at Blue Hill Ave", zip: "02119", docks: 15.0 },
  { number: 'A32046', name: "Canal St at Causeway St", zip: "02114", docks: 23.0 },
  { number: 'K32001', name: "Coolidge Corner - Beacon St at Centre St", zip: "02446", docks: 19.0 },
  { number: 'K32002', name: "Beacon St at Tappan St", zip: "02445", docks: 15.0 },
  { number: 'K32003', name: "Brookline Village - Station Street at MBTA", zip: "02120", docks: 19.0 },
  { number: 'K32004', name: "JFK Crossing at Harvard St. / Thorndike St.", zip: "02446", docks: 15.0 },
  { number: 'K32005', name: "Brookline Town Hall", zip: "02445", docks: 15.0 },
  { number: 'K32006', name: "Commonwealth Ave At Babcock St", zip: "02446", docks: 15.0 },
  { number: 'K32007', name: "St Mary's", zip: "02215", docks: 15.0 },
  { number: 'K32008', name: "Tappan St at Brookline Hills MBTA", zip: "02445", docks: 15.0 },
  { number: 'K32009', name: "Cypress St at Clark Playground", zip: "02445", docks: 15.0 },
  { number: 'K32010', name: "High St at Cypress St", zip: "02445", docks: 15.0 },
  { number: 'K32012', name: "Marion St at Harvard St", zip: "02446", docks: 15.0 },
  { number: 'K32011', name: "Washington Sq", zip: "02446", docks: 15.0 },
  { number: 'K32015', name: "1200 Beacon St", zip: "02446", docks: 15.0 },
  { number: 'K32017', name: "Harvard St and Stedman St", zip: "02446", docks: 15.0 },
  { number: 'M32002', name: "One Kendall Square at Hampshire St / Portland St", zip: "02238", docks: 19.0 },
  { number: 'M32003', name: "One Broadway / Kendall Sq at Main St / 3rd St", zip: "02142", docks: 23.0 },
  { number: 'M32004', name: "Kendall T", zip: "02142", docks: 23.0 },
  { number: 'M32005', name: "MIT Stata Center at Vassar St / Main St", zip: "02139", docks: 35.0 },
  { number: 'M32006', name: "MIT at Mass Ave / Amherst St", zip: "02238", docks: 27.0 },
  { number: 'M32007', name: "Cambridge St - at Columbia St / Webster Ave", zip: "02143", docks: 15.0 },
  { number: 'M32009', name: "Lafayette Square at Mass Ave / Main St / Columbia St", zip: "02139", docks: 15.0 },
  { number: 'M32011', name: "Central Square at Mass Ave / Essex St", zip: "02139", docks: 19.0 },
  { number: 'M32012', name: "Central Sq Post Office / Cambridge City Hall at Mass Ave / Pleasant St", zip: "02139", docks: 17.0 },
  { number: 'M32013', name: "Cambridge Main Library at Broadway / Trowbridge St", zip: "02318", docks: 19.0 },
  { number: 'M32014', name: "Harvard University Housing - 115 Putnam Ave at Peabody Terrace", zip: "02318", docks: 15.0 },
  { number: 'M32016', name: "Harvard Kennedy School at Bennett St / Eliot St", zip: "21410", docks: 23.0 },
  { number: 'M32017', name: "Harvard Square at Brattle St / Eliot St", zip: "21410", docks: 15.0 },
  { number: 'M32018', name: "Harvard Square at Mass Ave/ Dunster", zip: "02138", docks: 19.0 },
  { number: 'M32019', name: "CambridgeSide Galleria - CambridgeSide PL at Land Blvd", zip: "02141", docks: 15.0 },
  { number: 'M32020', name: "Harvard Law School at Mass Ave / Jarvis St", zip: "21410", docks: 19.0 },
  { number: 'M32021', name: "Harvard University Gund Hall at Quincy St / Kirkland St", zip: "21410", docks: 15.0 },
  { number: 'M32022', name: "Lower Cambridgeport at Magazine St / Riverside Rd", zip: "02163", docks: 19.0 },
  { number: 'M32023', name: "Harvard University / SEAS Cruft-Pierce Halls at 29 Oxford St", zip: "21410", docks: 17.0 },
  { number: 'M32024', name: "Harvard University Radcliffe Quadrangle at Shepard St / Garden St", zip: "21410", docks: 19.0 },
  { number: 'M32025', name: "Linear Park - Mass. Ave at Cameron Ave", zip: "02140", docks: 19.0 },
  { number: 'M32026', name: "359 Broadway - Broadway at Fayette Street", zip: "02139", docks: 23.0 },
  { number: 'M32027', name: "Binney St / Sixth St", zip: "02142", docks: 19.0 },
  { number: 'M32029', name: "Porter Square Station", zip: "02144", docks: 19.0 },
  { number: 'M32030', name: "Dana Park", zip: "02139", docks: 19.0 },
  { number: 'M32031', name: "Danehy Park", zip: "02140", docks: 17.0 },
  { number: 'M32032', name: "Kendall Street", zip: "02142", docks: 17.0 },
  { number: 'M32033', name: "Alewife Station at Russell Field", zip: "02140", docks: 23.0 },
  { number: 'M32034', name: "EF - North Point Park", zip: "02214", docks: 23.0 },
  { number: 'M32035', name: "Rogers St & Land Blvd", zip: "02214", docks: 19.0 },
  { number: 'M32036', name: "Rindge Avenue - O'Neill Library", zip: "02140", docks: 19.0 },
  { number: 'M32037', name: "Ames St at Main St", zip: "02142", docks: 19.0 },
  { number: 'M32038', name: "Harvard University River Houses at DeWolfe St / Cowperthwaite St", zip: "02138", docks: 21.0 },
  { number: 'M32039', name: "Lesley University", zip: "02138", docks: 15.0 },
  { number: 'M32040', name: "University Park", zip: "02139", docks: 19.0 },
  { number: 'M32041', name: "MIT Pacific St at Purrington St", zip: "02139", docks: 19.0 },
  { number: 'M32042', name: "MIT Vassar St", zip: "02215", docks: 53.0 },
  { number: 'M32043', name: "Mt Auburn", zip: "02138", docks: 19.0 },
  { number: 'M32044', name: "Huron Ave At Vassal Lane", zip: "02140", docks: 19.0 },
  { number: 'M32045', name: "Museum of Science", zip: "02214", docks: 19.0 },
  { number: 'M32046', name: "Alewife MBTA at Steel Place", zip: "02140", docks: 19.0 },
  { number: 'M32047', name: "Sidney Research Campus/Erie Street at Waverly", zip: "02139", docks: 19.0 },
  { number: 'M32048', name: "Third at Binney", zip: "02142", docks: 15.0 },
  { number: 'M32049', name: "Child Street at Brian P. Murphy Staircase", zip: "02214", docks: 23.0 },
  { number: 'M32050', name: "Verizon Innovation Hub 10 Ware Street", zip: "02318", docks: 19.0 },
  { number: 'M32051', name: "Fresh Pond Reservation", zip: "20478", docks: 17.0 },
  { number: 'M32052', name: "Cambridge Dept. of Public Works -147 Hampshire St.", zip: "02139", docks: 19.0 },
  { number: 'M32053', name: "One Memorial Drive", zip: "02142", docks: 19.0 },
  { number: 'M32054', name: "699 Mt Auburn St", zip: "20478", docks: 25.0 },
  { number: 'M32055', name: "Harvard St at Greene-Rose Heritage Park", zip: "02238", docks: 19.0 },
  { number: 'M32056', name: "Mass Ave at Hadley/Walden", zip: "02140", docks: 19.0 },
  { number: 'M32057', name: "Vassal Lane at Tobin/VLUS", zip: "02140", docks: 19.0 },
  { number: 'M32058', name: "84 Cambridgepark Dr", zip: "02140", docks: 27.0 },
  { number: 'M32059', name: "Ames St at Broadway", zip: "02142", docks: 19.0 },
  { number: 'M32060', name: "700 Huron Ave", zip: "20478", docks: 19.0 },
  { number: 'M32061', name: "Mass Ave at Albany St", zip: "02238", docks: 18.0 },
  { number: 'M32062', name: "Inman Square at Springfield St.", zip: "02143", docks: 25.0 },
  { number: 'M32063', name: "Sennott Park Broadway at Norfolk Street", zip: "02139", docks: 19.0 },
  { number: 'M32064', name: "75 Binney St", zip: "02142", docks: 19.0 },
  { number: 'M32065', name: "Kennedy-Longfellow School 158 Spring St", zip: "02141", docks: 19.0 },
  { number: 'M32066', name: "Discovery Park - 30 Acorn Park Drive", zip: "02474", docks: 23.0 },
  { number: 'M32067', name: "Berkshire Street at Cambridge Street", zip: "02141", docks: 19.0 },
  { number: 'M32068', name: "Graham and Parks School – Linnaean St at Walker St", zip: "02138", docks: 19.0 },
  { number: 'M32069', name: "Smith Pl at Wilson Rd", zip: "20478", docks: 19.0 },
  { number: 'M32070', name: "MIT Carleton St at Amherst St", zip: "02142", docks: 27.0 },
  { number: 'M32071', name: "MIT Hayward St at Amherst St", zip: "02142", docks: 27.0 },
  { number: 'M32072', name: "Galileo Galilei Way at Main Street", zip: "02142", docks: 19.0 },
  { number: 'M32073', name: "955 Mass Ave", zip: "02318", docks: 19.0 },
  { number: 'M32074', name: "Concord Ave at Spinelli Place", zip: "20478", docks: 19.0 },
  { number: 'M32075', name: "Danehy Park at New Street", zip: "02140", docks: 19.0 },
  { number: 'M32076', name: "Old Morse Park at Putnam Ave", zip: "02139", docks: 15.0 },
  { number: 'M32077', name: "Cambridge Crossing at North First Street", zip: "02141", docks: 23.0 },
  { number: 'M32078', name: "Galileo Galilei Way at Fulkerson St/Binney St", zip: "02142", docks: 19.0 },
  { number: 'M32079', name: "Raymond Park at Walden St", zip: "02140", docks: 19.0 },
  { number: 'M32080', name: "Main Street/Albany Street/Technology Square", zip: "02139", docks: 23.0 },
  { number: 'M32081', name: "Gore Street at Lambert Street", zip: "02141", docks: 19.0 },
  { number: 'M32082', name: "Broad Canal Way at Third Street", zip: "02142", docks: 19.0 },
  { number: 'M32083', name: "John Ahern Field at Kennedy-Longfellow School", zip: "02141", docks: 19.0 },
  { number: 'M32084', name: "87-101 Cambridgepark Drive", zip: "02140", docks: 23.0 },
  { number: 'M32085', name: "Mass Ave/Lafayette Square", zip: "02139", docks: 15.0 },
  { number: 'M32086', name: "Morgan Ave at North First St", zip: "02214", docks: 23.0 },
  { number: 'M32087', name: "Church St", zip: "21410", docks: 15.0 },
  { number: 'M32088', name: "55 Wheeler Street", zip: "02140", docks: 23.0 },
  { number: 'Z32998', name: "Broadway at Kittie Knox Bike Path", zip: "02142", docks: 23.0 },
  { number: 'M32089', name: "Moore Youth Center", zip: "02318", docks: 15.0 },
  { number: 'M32090', name: "O'Brien Highway at First Street", zip: "02141", docks: 19.0 },
  { number: 'M32091', name: "325 Binney St.", zip: "02142", docks: 19.0 },
  { number: 'M32001', name: "Lechmere Station at Cambridge St / First St", zip: "02141", docks: 19.0 },
  { number: 'H32001', name: "Cary Square", zip: "02150", docks: 12.0 },
  { number: 'H32002', name: "Bellingham Square", zip: "02150", docks: 11.0 },
  { number: 'H32003', name: "Chelsea Square", zip: "02150", docks: 11.0 },
  { number: 'H32004', name: "Broadway at Gerrish Ave", zip: "02150", docks: 11.0 },
  { number: 'H32005', name: "Chelsea Station", zip: "02150", docks: 11.0 },
  { number: 'H32006', name: "855 Broadway", zip: "02150", docks: 11.0 },
  { number: 'V32001', name: "7 Acre Park", zip: "02148", docks: 15.0 },
  { number: 'V32003', name: "Everett Square (Broadway at Chelsea St)", zip: "02149", docks: 16.0 },
  { number: 'V32004', name: "Broadway at Lynde St", zip: "02129", docks: 15.0 },
  { number: 'V32005', name: "Encore", zip: "02145", docks: 15.0 },
  { number: 'V32006', name: "Glendale Square (Ferry St at Broadway)", zip: "02149", docks: 15.0 },
  { number: 'V32007', name: "Swan St. Park", zip: "02148", docks: 15.0 },
  { number: 'V32008', name: "Broadway at Maple St", zip: "02149", docks: 14.0 },
  { number: 'V32011', name: "Broadway at Beacham St", zip: "02129", docks: 15.0 },
  { number: 'V32012', name: "Hale Park", zip: "02149", docks: 11.0 },
  { number: 'V32013', name: "Kearins Playground", zip: "02149", docks: 11.0 },
  { number: 'V32015', name: "Gramsdorf Playground", zip: "02149", docks: 14.0 },
  { number: 'V32016', name: "Chelsea St at Vine St", zip: "02149", docks: 11.0 },
  { number: 'V32009', name: "Pope John High School", zip: "02149", docks: 15.0 },
  { number: 'G32001', name: "Malden Center T Station", zip: "02467", docks: 11.0 },
  { number: 'G32002', name: "Northern Strand at Main St", zip: "02148", docks: 11.0 },
  { number: 'G32003', name: "Malden High School", zip: "02148", docks: 11.0 },
  { number: 'V32014', name: "Wellington MBTA", zip: "02145", docks: 19.0 },
  { number: 'F32001', name: "Main St at Brooks Park", zip: "02155", docks: 11.0 },
  { number: 'F32002', name: "Medford Sq - Riverside Ave at River St", zip: "02155", docks: 11.0 },
  { number: 'F32003', name: "Tufts Sq - Main St at Medford St", zip: "02144", docks: 11.0 },
  { number: 'F32006', name: "Hormel Stadium", zip: "02155", docks: 11.0 },
  { number: 'F32004', name: "Harris Park", zip: "02145", docks: 11.0 },
  { number: 'F32005', name: "Haines Square", zip: "02155", docks: 11.0 },
  { number: 'ZZ32996', name: "Auburn St. at Mystic River", zip: "02474", docks: 11.0 },
  { number: 'F32007', name: "West Medford Square (Bower St at Harvard Ave)", zip: "02474", docks: 11.0 },
  { number: 'F32008', name: "Logan Park", zip: "02155", docks: 11.0 },
  { number: 'N32000', name: "Centre St at Washington St", zip: "02458", docks: 11.0 },
  { number: 'N32001', name: "Washington St at Crafts St", zip: "02460", docks: 11.0 },
  { number: 'N32002', name: "Nonantum Library", zip: "02458", docks: 15.0 },
  { number: 'N32003', name: "Bacon St at Washington St", zip: "02172", docks: 11.0 },
  { number: 'N32005', name: "West Newton", zip: "02465", docks: 15.0 },
  { number: 'N32008', name: "Langley Lot", zip: "02159", docks: 11.0 },
  { number: 'N32009', name: "Boston College T", zip: "02135", docks: 17.0 },
  { number: 'N32010', name: "Newton Highlands T", zip: "02461", docks: 15.0 },
  { number: 'N32011', name: "California at Chapel", zip: "02458", docks: 12.0 },
  { number: 'N32012', name: "Beacon at Walnut", zip: "02461", docks: 15.0 },
  { number: 'N32013', name: "Newton Library", zip: "02461", docks: 13.0 },
  { number: 'N32014', name: "Washington St at Walnut St", zip: "02460", docks: 11.0 },
  { number: 'N32015', name: "Auburndale", zip: "02466", docks: 15.0 },
  { number: 'N32018', name: "Centre St at Commonwealth Ave", zip: "02159", docks: 11.0 },
  { number: 'N32006', name: "Watertown St at Albemarle Rd", zip: "02460", docks: 11.0 },
  { number: 'R32006', name: "Revere City Hall", zip: "02151", docks: 11.0 },
  { number: 'R32007', name: "Revere Public Library", zip: "02151", docks: 11.0 },
  { number: 'R32002', name: "Orr Sq (Shirley Ave)", zip: "02151", docks: 11.0 },
  { number: 'R32001', name: "Sumner St at Shirley Ave", zip: "02151", docks: 11.0 },
  { number: 'T32001', name: "Salem Ferry Landing", zip: "01970", docks: 11.0 },
  { number: 'T32002', name: "Salem Willows Park", zip: "01970", docks: 15.0 },
  { number: 'T32003', name: "Shetland Park - Congress at Peabody St", zip: "01970", docks: 11.0 },
  { number: 'T32004', name: "Mayor Salvo Path at Mill St", zip: "01970", docks: 11.0 },
  { number: 'T32005', name: "Salem MBTA - Washington at Federal St", zip: "01970", docks: 13.0 },
  { number: 'T32006', name: "Lafayette at Leach St", zip: "01970", docks: 11.0 },
  { number: 'T32007', name: "Salem State University - Bike Path at Loring Ave", zip: "01970", docks: 15.0 },
  { number: 'T32008', name: "Hawthorne Boulevard", zip: "01970", docks: 9.0 },
  { number: 'T32009', name: "Salem State University - North Campus", zip: "01970", docks: 11.0 },
  { number: 'T32011', name: "Essex St at Dalton Parkway", zip: "01970", docks: 11.0 },
  { number: 'T32010', name: "Forest River Park", zip: "01970", docks: 11.0 },
  { number: 'T32012', name: "Salem MBTA - Lower Level", zip: "01970", docks: 11.0 },
  { number: 'T32013', name: "Community Life Center", zip: "01970", docks: 9.0 },
  { number: 'T32014', name: "Goodhue St at Grove St", zip: "01970", docks: 11.0 },
  { number: 'T32015', name: "North St at Liberty Hill Ave", zip: "01970", docks: 11.0 },
  { number: 'T32017', name: "Vinnin Square", zip: "01907", docks: 11.0 },
  { number: 'T32016', name: "Bridge Street Neck", zip: "01970", docks: 11.0 },
  { number: 'T32018', name: "Derby Street", zip: "01970", docks: 11.0 },
  { number: 'S32001', name: "Somerville City Hall", zip: "02143", docks: 19.0 },
  { number: 'S32002', name: "Union Square - Somerville", zip: "02143", docks: 19.0 },
  { number: 'S32003', name: "Beacon St at Washington / Kirkland", zip: "02143", docks: 19.0 },
  { number: 'S32004', name: "Conway Park - Somerville Avenue", zip: "02143", docks: 23.0 },
  { number: 'S32005', name: "Wilson Square", zip: "21410", docks: 15.0 },
  { number: 'S32006', name: "Davis Square", zip: "02144", docks: 25.0 },
  { number: 'S32007', name: "Ball Sq", zip: "02144", docks: 19.0 },
  { number: 'S32008', name: "Powder House Circle - Nathan Tufts Park", zip: "02144", docks: 15.0 },
  { number: 'S32009', name: "Packard Ave at Powderhouse Blvd", zip: "02144", docks: 15.0 },
  { number: 'S32010', name: "Clarendon Hill at Broadway", zip: "02474", docks: 15.0 },
  { number: 'S32011', name: "Teele Square", zip: "02144", docks: 15.0 },
  { number: 'S32013', name: "Magoun Square at Trum Field", zip: "02144", docks: 19.0 },
  { number: 'S32014', name: "Broadway St at Mt Pleasant St", zip: "02145", docks: 19.0 },
  { number: 'S32015', name: "Foss Park", zip: "02145", docks: 15.0 },
  { number: 'S32016', name: "Broadway at Central St", zip: "02143", docks: 19.0 },
  { number: 'S32017', name: "East Somerville Library (Broadway and Illinois)", zip: "02145", docks: 15.0 },
  { number: 'S32018', name: "Assembly Square T", zip: "02145", docks: 15.0 },
  { number: 'S32019', name: "Grove St at Community Path", zip: "02144", docks: 15.0 },
  { number: 'S32052', name: "Somerville Hospital", zip: "02143", docks: 15.0 },
  { number: 'S32021', name: "Washington St at Myrtle St", zip: "02145", docks: 15.0 },
  { number: 'S32022', name: "Community Path at Cedar Street", zip: "02144", docks: 15.0 },
  { number: 'S32023', name: "30 Dane St", zip: "02143", docks: 15.0 },
  { number: 'S32034', name: "Perry Park", zip: "02143", docks: 19.0 },
  { number: 'S32035', name: "191 Beacon St", zip: "02143", docks: 19.0 },
  { number: 'S32036', name: "Somerville City Hall Annex", zip: "02143", docks: 19.0 },
  { number: 'S32037', name: "Craigie at Summer St", zip: "02144", docks: 19.0 },
  { number: 'S32038', name: "Edgerly Education Center", zip: "02145", docks: 15.0 },
  { number: 'S32039', name: "Elm St at White St", zip: "02144", docks: 19.0 },
  { number: 'S32040', name: "Community Path at Lowell St", zip: "02144", docks: 19.0 },
  { number: 'S32041', name: "Union Square East", zip: "02143", docks: 19.0 },
  { number: 'S32046', name: "Gilman Square T at Medford St", zip: "02143", docks: 19.0 },
  { number: 'S32047', name: "Foley St at Grand Union Blvd", zip: "02145", docks: 19.0 },
  { number: 'S32048', name: "Somerville High School & Central Library", zip: "02145", docks: 17.0 },
  { number: 'S32050', name: "Boynton Yards at 101 South Street", zip: "02143", docks: 19.0 },
  { number: 'S32053', name: "Chestnut St at Poplar St", zip: "02141", docks: 19.0 },
  { number: 'S32054', name: "Union Square Station", zip: "02143", docks: 19.0 },
  { number: 'W32001', name: "Coolidge Sq.", zip: "20478", docks: 12.0 },
  { number: 'W32002', name: "Watertown Sq", zip: "02172", docks: 15.0 },
  { number: 'W32004', name: "Arsenal Yards", zip: "02138", docks: 15.0 },
  { number: 'W32005', name: "Watertown Town Hall", zip: "02172", docks: 11.0 },
  { number: 'W32006', name: "160 Arsenal", zip: "02472", docks: 11.0 },
  { number: 'W32007', name: "Nichols Ave. at Watertown Greenway", zip: "02138", docks: 12.0 },
  { number: 'F32009', name: "Hickey Park", zip: "02155", docks: 19.0 },
  { number: 'M32092', name: "Elevate at One Leighton", zip: "02141", docks: 17.0 },
  { number: 'TBD1', name: "99 Coolidge Ave", zip: "02138", docks: 0 },
  { number: 'TBD2', name: "Arsenal on the Charles", zip: "02138", docks: 0 },
  { number: 'TBD3', name: "Damrell St at Old Colony Ave", zip: "02127", docks: 0 },
  { number: 'TBD4', name: "Melnea Cass Blvd at Hampden St", zip: "02118", docks: 0 },
  { number: 'TBD5', name: "West Street", zip: "02149", docks: 0 },
  { number: 'TBD6', name: "1515 Commonwealth Ave", zip: "02134", docks: 0 },
];

// DOM elements
const zipInput = document.getElementById("zip-input");
const spokenZipElement = document.getElementById("spoken-zip");
const stationDropdown = document.getElementById("station-dropdown");
const nextHourResult = document.getElementById("next-hour-result");
const startButton = document.getElementById("start-voice-button");

// Variable to store user's ZIP code
let user_zipcode = "";

// Text-to-Speech function
function speakText(text, callback) {
  speechSynthesis.cancel(); // Stop any ongoing speech
  const utterance = new SpeechSynthesisUtterance(text);
  console.log(`Speaking: "${text}"`);

  const checkVoicesLoaded = () => {
    const voices = speechSynthesis.getVoices();
    if (voices.length > 0) {
      utterance.voice = voices.find((voice) => voice.lang === "en-US") || voices[0];

      utterance.onend = () => {
        console.log("Speech finished.");
        if (callback) callback();
      };

      utterance.onerror = (e) => {
        console.error("Speech synthesis error:", e);
        if (callback) callback(); // Continue even if there's an error
      };

      speechSynthesis.speak(utterance);
    } else {
      console.error("No voices available yet. Retrying...");
      setTimeout(checkVoicesLoaded, 100); // Retry after a short delay
    }
  };

  checkVoicesLoaded();
}

// Initialize voices on page load
document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded. Initializing voices...");
  speechSynthesis.getVoices(); // Trigger loading of voices
});

// Speech Recognition function
function startSpeechRecognition(callback) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    console.error("SpeechRecognition API not supported.");
    speakText("Sorry, your browser does not support speech recognition.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";

  recognition.onresult = (event) => {
    const spokenText = event.results[0][0].transcript;
    console.log(`Speech recognized: "${spokenText}"`);
    callback(spokenText);
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
    speakText("Sorry, I didn't catch that. Please try again.");
  };

  recognition.onend = () => {
    console.log("Speech recognition ended.");
  };

  recognition.start();
  console.log("Speech recognition started.");
}

// Main Function
function startVoiceInteraction() {
  speakText("Please speak your 5-digit ZIP code after the beep.", () => {
    startSpeechRecognition((spokenZip) => {
      const zipCode = spokenZip.replace(/\D/g, ""); // Remove non-numeric characters
      console.log(`Speech recognized: "${spokenZip}"`);
      console.log(`Spoken ZIP Code after processing: ${zipCode}`);

      // Check if the zip code is valid (5 digits)
      if (zipCode.length === 5) {
        // Display spoken ZIP code dynamically on the page
        spokenZipElement.textContent = `Spoken ZIP Code: ${zipCode}`;
        user_zipcode = zipCode; // Store in user_zipcode variable
        zipInput.value = zipCode; // Fill in the zip-input field
        const filteredStations = stationData.filter((station) => station.zip === zipCode);

        if (filteredStations.length > 0) {
          populateStations(filteredStations);

          stationDropdown.style.display = "block";

          // Event listener for dropdown selection
          stationDropdown.addEventListener("change", () => {
            const selectedIndex = stationDropdown.selectedIndex;
            if (selectedIndex > 0) { // Ensure a valid selection
              const selectedOption = stationDropdown.options[selectedIndex];
              const selectedStationName = selectedOption.textContent.split('. ')[1];
              const selectedStation = stationData.find(station => station.name === selectedStationName);

              if (selectedStation) {
                const docks = selectedStation.docks;
                console.log(`Selected Station: ${selectedStation.name}, Docks: ${docks}`);
                const randomDockNumber = Math.floor(Math.random() * docks) + 1;

                // Display the result in the text box
                nextHourResult.value = `Dock Number: ${randomDockNumber}`;
                nextHourResult.style.display = "block"; // Show the result field
              }
            }
          });
        } else {
          speakText("No stations found for this ZIP code. Please try again.");
        }
      } else {
        spokenZipElement.textContent = `Invalid ZIP Code: ${zipCode}`;
        speakText("Invalid ZIP code. Please speak a 5-digit ZIP code.");
      }
    });
  });
}

// Populate Station Dropdown
function populateStations(stations) {
  stationDropdown.innerHTML = "<option>Select a station</option>"; // Default option
  stations.forEach((station, index) => {
    const option = document.createElement("option");
    option.value = station.name;
    option.textContent = `${index + 1}. ${station.name}`;
    stationDropdown.appendChild(option);
  });
  console.log("Stations populated in dropdown.");
}

// Attach click event to the button
startButton.addEventListener("click", () => {
  console.log("Start Voice Interaction button clicked");
  startVoiceInteraction();
});
