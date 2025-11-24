USE ElectroHub;


-- categories:
-- Smartphones
-- Headphones
-- Air_Conditioners
-- Televisions
-- VR_Headsets
-- Laptops
-- Camera


-- insert into popular tables
INSERT INTO popular_products
VALUES
(1,14),
(2,21),
(3,5),
(4,12),
(5,27),
(6,34),
(7,40),
(8,3),
(9,28),
(10,32);


-- insert into new products
INSERT INTO new_products
VALUES
(1,4),
(2,10),
(3,13),
(4,15),
(5,23),
(6,33),
(7,41),
(8,40),
(9,32),
(10,14),
(11,19),
(12,21),
(13,11);


-- insertion of users
INSERT INTO users(userName,email,password,location)
VALUES
("Ramprasad","Ramprasadnayak@gmail.com","helloworld","India");


-- insertion of items
INSERT INTO items(itemName,category,price, company,image_path,reviews) 
VALUES
("Motorola Edge 50 Fusion 5G","Smartphones",22000,"Moto","/src/assets/items/Motorola_Edge_50_Fusion_5G.avif",5 ),
("Lenovo Ideapad Slim 3","Laptops",45000,"Lenovo","/src/assets/items/ideapad-slim-3.webp",3),
("OnePlus Nord CE 3 Lite","Smartphones",17490,"OnePlus","/src/assets/items/OnePlusNordCE3Lite.webp",2),
("Canon EOS 1500D DSLR Camera","Camera",31999,"Canon","/src/assets/items/CanonEOS1500DDSLRCamera.webp",5),
("Sony Alpha ILCE-7M3","Camera",45000,"Sony","/src/assets/items/SonyAlphaILCE-7M3.webp",3),
("OneXsale 1080P Dash Cam Recorder","Camera",3089,"OneXsale","/src/assets/items/OneXsale1080PThreeLensDash.webp",4),
("vHP15-fb0082AX Victus Gaming","Laptops",60000,"HP","/src/assets/items/victus.jpeg",4),
("Dell Latitude 7490 Notebook","Laptops",30000,"Dell","/src/assets/items/dell_latitude.webp",5),
("JioBook 11 with Lifetime Office","Laptops",20999,"Jiobook","/src/assets/items/jiobook.webp",2),
("CHUWI Intel Core i5 10th Gen","Laptops",24999,"Chuwi","/src/assets/items/corebook.webp",2),
("Asus tuff f16","Laptops",60000,"Asus","/src/assets/items/asustuff.webp",5),
("SONY BRAVIA 2 II","Televisions",109999,"Sony","/src/assets/items/sony_tv.webp",5),
("Samsung Crystal 4K 189 cm","Televisions",90000,"Samsung","/src/assets/items/samsung_tv.webp",4),
("realme TechLife 191 cm ","Televisions",89050,"Realme","/src/assets/items/realme_tv.webp",3),
("TCL 75Q6CS 189 cm","Televisions",50000,"TCL","/src/assets/items/tcl_tv.webp",2),
("LG AI TV UA8200 108 cm","Televisions",67000,"Lg","/src/assets/items/lg_tv.webp",5),
("LG AI TV UR7500 108 cm ","Televisions",89790,"Lg","/src/assets/items/lg_tv2.webp",4),
("iFFALCON by TCL U65","Televisions",40490,"TCL","/src/assets/items/iffal_tv.webp",2),
("realme TechLife 164 cm","Televisions",38990,"Realme","/src/assets/items/realme_tv2.webp",3),
("Finco VR Box 2571","VR_headsets",170000,"Finco","/src/assets/items/vrbox.webp",5),
("karan K VR-222","VR_headsets",90000,"karan","/src/assets/items/karan.webp",4),
("DRUMSTONE Immersive","VR_headsets",7490,"Drumstone","/src/assets/items/drumstone.webp",3),
("IBS Original VR Pro","VR_headsets",1205,"IBS","/src/assets/items/ibs.webp",1),
("Elevea C136-3D VR Glasses","VR_headsets",12500,"Elevea","/src/assets/items/elevea.webp",5),
("LG 2025 Model Convertible","AC",50600,"Lg","/src/assets/items/lg_ac.webp",5),
("Godrej 2025 Mode","AC",27990,"godrej","/src/assets/items/godrej.webp",3),
("Voltas 2024 Model 1.5","AC",37490,"Voltas","/src/assets/items/voltas.webp",4),
("MarQ 1.5 ton","AC",30220,"Marq","/src/assets/items/marq.webp",2),
("IFB 2025 Model Silver Plus","AC",34980,"Ifb","/src/assets/items/ifb.webp",3),
("Blue Star 2025 Model 1.5","AC",10960,"Blue star","/src/assets/items/cool.webp",5),
("boAt Rockerz 430","Headphones",19300,"boat","/src/assets/items/boat.webp",5),
("PTron Studio Evo","Headphones",799,"ptron","/src/assets/items/ptron.webp",3),
("GOBOULT Fluid X 60H Battery","Headphones",1999,"Goboult","/src/assets/items/gobout.webp",5),
("TRIGGR Trinity 2","Headphones",899,"trigger","/src/assets/items/triger.webp",4),
("F FERONS headphones","Headphones",1490,"Ferons","/src/assets/items/ferons.webp",5),
("boAt Rockerz 480 w","Headphones",1599,"boat","/src/assets/items/boatr.webp",5),
("POCO C71","Smartphones",5749,"Poco","/src/assets/items/poco.webp",4),
("Moto g06 power","Smartphones",7499,"Moto","/src/assets/items/moto.webp",5),
("Samsung Galaxy F07","Smartphones",20090,"Samsung","/src/assets/items/samsung_mob.webp",3),
("realme C61","Smartphones",6499,"Realme","/src/assets/items/realme.webp",2),
("REDMI A3X","Smartphones",6499,"Redmi","/src/assets/items/redmi.webp",5);