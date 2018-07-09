module.exports = function(client) {

  client.query(`CREATE TABLE broker__c (
   id SERIAL NOT NULL,
   sfid CHARACTER VARYING(18) UNIQUE,
   name CHARACTER VARYING(80),
   email__c CHARACTER VARYING(80),
   phone__c CHARACTER VARYING(40),
   mobile_phone__c CHARACTER VARYING(40),
   title__c CHARACTER VARYING(30),
   picture__c CHARACTER VARYING(255)
  );`);

  client.query(`CREATE TABLE property__c (
   id SERIAL NOT NULL,
   sfid CHARACTER VARYING(18) UNIQUE,
   name CHARACTER VARYING(80),
   thumbnail__c CHARACTER VARYING(255),
   beds__c DOUBLE PRECISION,
   address__c CHARACTER VARYING(100),
   baths__c DOUBLE PRECISION,
   broker__c CHARACTER VARYING(18) REFERENCES broker__c(sfid),
   description__c CHARACTER VARYING(500),
   state__c CHARACTER VARYING(20),
   city__c CHARACTER VARYING(50),
   zip__c CHARACTER VARYING(10),
   title__c CHARACTER VARYING(100),
   picture__c CHARACTER VARYING(255),
   price__c DOUBLE PRECISION,
   location__longitude__s DOUBLE PRECISION,
   location__latitude__s DOUBLE PRECISION
  );`);

  client.query(`CREATE TABLE favorite__c (
   id SERIAL NOT NULL,
   sfid CHARACTER VARYING(18) UNIQUE,
   property__c CHARACTER VARYING(18) REFERENCES property__c(sfid)
  );`);


  client.query(`INSERT INTO broker__c (email__c, phone__c, name, mobile_phone__c, sfid, title__c, picture__c) VALUES ('caroline@ionicrealty.com', '617-244-3672', 'Caroline Kingsley', '617-244-3672', 'a0036000003SsJwAAK', 'Senior Broker', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg');`);
  client.query(`INSERT INTO broker__c (email__c, phone__c, name, mobile_phone__c, sfid, title__c, picture__c) VALUES ('jen@ionicrealty.com', '617-244-3672', 'Jennifer Wu', '617-244-3672', 'a0036000003SsJzAAK', 'Senior Broker', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jennifer_wu.jpg');`);
  client.query(`INSERT INTO broker__c (email__c, phone__c, name, mobile_phone__c, sfid, title__c, picture__c) VALUES ('michael@ionicrealty.com', '617-244-3672', 'Michael Jones', '617-244-3672', 'a0036000003SsJxAAK', 'Senior Broker', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michael_jones.jpg');`);
  client.query(`INSERT INTO broker__c (email__c, phone__c, name, mobile_phone__c, sfid, title__c, picture__c) VALUES ('michelle@ionicrealty.com', '617-244-3672', 'Michelle Lambert', '617-244-3672', 'a0036000003SsK2AAK', 'Senior Broker', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michelle_lambert.jpg');`);
  client.query(`INSERT INTO broker__c (email__c, phone__c, name, mobile_phone__c, sfid, title__c, picture__c) VALUES ('jonathan@ionicrealty.com', '617-244-3672', 'Jonathan Bradley', '617-244-3672', 'a0036000003SsJyAAK', 'Senior Broker', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jonathan_bradley.jpg');`);
  client.query(`INSERT INTO broker__c (email__c, phone__c, name, mobile_phone__c, sfid, title__c, picture__c) VALUES ('olivia@ionicrealty.com', '617-244-3672', 'Olivia Green', '617-244-3672', 'a0036000003SsK0AAK', 'Senior Broker', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/olivia_green.jpg');`);
  client.query(`INSERT INTO broker__c (email__c, phone__c, name, mobile_phone__c, sfid, title__c, picture__c) VALUES ('miriam@ionicrealty.com', '617-244-3672', 'Miriam Aupont', '617-244-3672', 'a0036000003SsK1AAK', 'Senior Broker', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/miriam_aupont.jpg');`);
  client.query(`INSERT INTO broker__c (email__c, phone__c, name, mobile_phone__c, sfid, title__c, picture__c) VALUES ('victor@ionicrealty.com', '617-244-3672', 'Victor Ochoa', '617-244-3672', 'a0036000003SsK3AAK', 'Senior Broker', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/victor_ochoa.jpg');`);

  client.query(`INSERT INTO property__c (name, thumbnail__c, beds__c, location__longitude__s, address__c, baths__c, broker__c, description__c, sfid, state__c, city__c, zip__c, title__c, picture__c, price__c, location__latitude__s) VALUES ('18 Henry st', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house01sq.jpg', 4, -71.1109500000000025, '18 Henry st', 3, 'a0036000003SsJwAAK', 'Lorem ipsum dolor sit amet', 'a0236000002NHKoAAO', 'MA', 'Cambridge', '01742', 'Stunning Victorian', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house01.jpg', 975000, 42.3566300000000027);`);
  client.query(`INSERT INTO property__c (name, thumbnail__c, beds__c, location__longitude__s, address__c, baths__c, broker__c, description__c, sfid, state__c, city__c, zip__c, title__c, picture__c, price__c, location__latitude__s) VALUES ('145 Commonwealth ave', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house12sq.jpg', 4, 71.0753109999999992, '145 Commonwealth ave', 3, 'a0036000003SsJxAAK', 'Lorem ipsum dolor sit amet', 'a0236000002NHKtAAO', 'MA', 'Boston', '02420', 'Contemporary Luxury', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house12.jpg', 845000, 42.3524659999999997);`);
  client.query(`INSERT INTO property__c (name, thumbnail__c, beds__c, location__longitude__s, address__c, baths__c, broker__c, description__c, sfid, state__c, city__c, zip__c, title__c, picture__c, price__c, location__latitude__s) VALUES ('448 Hanover st', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house06sq.jpg', 4, -71.0526169999999979, '448 Hanover st', 2, 'a0036000003SsK1AAK', 'Lorem ipsum dolor sit amet', 'a0236000002NHKxAAO', 'MA', 'Boston', '02420', 'Quiet Retreat', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house06.jpg', 725000, 42.366855000000001);`);
  client.query(`INSERT INTO property__c (name, thumbnail__c, beds__c, location__longitude__s, address__c, baths__c, broker__c, description__c, sfid, state__c, city__c, zip__c, title__c, picture__c, price__c, location__latitude__s) VALUES ('110 Baxter street', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house05sq.jpg', 3, -71.0539430000000038, '110 Baxter street', 2, 'a0036000003SsK0AAK', 'Lorem ipsum dolor sit amet', 'a0236000002NHKwAAO', 'MA', 'Boston', '02420', 'Waterfront in the City', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house05.jpg', 850000, 42.3724860000000021);`);
  client.query(`INSERT INTO property__c (name, thumbnail__c, beds__c, location__longitude__s, address__c, baths__c, broker__c, description__c, sfid, state__c, city__c, zip__c, title__c, picture__c, price__c, location__latitude__s) VALUES ('32 Prince st', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house04sq.jpg', 5, -71.1104480000000052, '32 Prince st', 4, 'a0036000003SsJzAAK', 'Lorem ipsum dolor sit amet', 'a0236000002NHKvAAO', 'MA', 'Cambridge', '02420', 'Stunning Colonial', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house04.jpg', 930000, 42.3606419999999986);`);
  client.query(`INSERT INTO property__c (name, thumbnail__c, beds__c, location__longitude__s, address__c, baths__c, broker__c, description__c, sfid, state__c, city__c, zip__c, title__c, picture__c, price__c, location__latitude__s) VALUES ('95 Gloucester st', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house11sq.jpg', 3, -71.0844069999999988, '95 Gloucester st', 2, 'a0036000003SsJwAAK', 'Lorem ipsum dolor sit amet', 'a0236000002NHKqAAO', 'MA', 'Boston', '02420', 'Architectural Details', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house11.jpg', 690000, 42.349693000000002);`);
  client.query(`INSERT INTO property__c (name, thumbnail__c, beds__c, location__longitude__s, address__c, baths__c, broker__c, description__c, sfid, state__c, city__c, zip__c, title__c, picture__c, price__c, location__latitude__s) VALUES ('24 Pearl st', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house02sq.jpg', 5, -71.1086899999999957, '24 Pearl st', 4, 'a0036000003SsJxAAK', 'Lorem ipsum dolor sit amet', 'a0236000002NHKrAAO', 'MA', 'Cambridge', '02420', 'Ultimate Sophistication', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house02.jpg', 1200000, 42.3591029999999975);`);
  client.query(`INSERT INTO property__c (name, thumbnail__c, beds__c, location__longitude__s, address__c, baths__c, broker__c, description__c, sfid, state__c, city__c, zip__c, title__c, picture__c, price__c, location__latitude__s) VALUES ('72 Francis st', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house03sq.jpg', 5, -71.1068269999999956, '72 Francis st', 4, 'a0036000003SsJyAAK', 'Lorem ipsum dolor sit amet', 'a0236000002NHKuAAO', 'MA', 'Boston', '02420', 'Modern City Living', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house03.jpg', 825000, 42.3354349999999968);`);
  client.query(`INSERT INTO property__c (name, thumbnail__c, beds__c, location__longitude__s, address__c, baths__c, broker__c, description__c, sfid, state__c, city__c, zip__c, title__c, picture__c, price__c, location__latitude__s) VALUES ('48 Brattle st', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house10sq.jpg', 5, -71.1216529999999949, '48 Brattle st', 4, 'a0036000003SsK3AAK', 'Lorem ipsum dolor sit amet', 'a0236000002NHKzAAO', 'MA', 'Cambridge', '02420', 'Heart of Harvard Square', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house10.jpg', 450000, 42.3741169999999983);`);
  client.query(`INSERT INTO property__c (name, thumbnail__c, beds__c, location__longitude__s, address__c, baths__c, broker__c, description__c, sfid, state__c, city__c, zip__c, title__c, picture__c, price__c, location__latitude__s) VALUES ('640 Harrison Ave', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house08sq.jpg', 2, -71.0687810000000013, '640 Harrison Ave', 1, 'a0036000003SsJxAAK', 'Lorem ipsum dolor sit amet', 'a0236000002NHKsAAO', 'MA', 'Boston', '02420', 'City Living', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house08.jpg', 600000, 42.339891999999999);`);
  client.query(`INSERT INTO property__c (name, thumbnail__c, beds__c, location__longitude__s, address__c, baths__c, broker__c, description__c, sfid, state__c, city__c, zip__c, title__c, picture__c, price__c, location__latitude__s) VALUES ('127 Endicott st', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house07sq.jpg', 3, -71.0573519999999945, '127 Endicott st', 1, 'a0036000003SsK2AAK', 'Lorem ipsum dolor sit amet', 'a0236000002NHKyAAO', 'MA', 'Boston', '02420', 'City Living', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house07.jpg', 450000, 42.3650030000000015);`);
  client.query(`INSERT INTO property__c (name, thumbnail__c, beds__c, location__longitude__s, address__c, baths__c, broker__c, description__c, sfid, state__c, city__c, zip__c, title__c, picture__c, price__c, location__latitude__s) VALUES ('121 Harborwalk', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house09sq.jpg', 3, -71.0493270000000052, '121 Harborwalk', 3, 'a0036000003SsJwAAK', 'Lorem ipsum dolor sit amet', 'a0236000002NHKpAAO', 'MA', 'Boston', '02420', 'Seaport District Retreat', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house09.jpg', 450000, 42.3569499999999977);`);

  client.query(`INSERT INTO favorite__c (property__c, sfid) VALUES ('a0236000002NHKoAAO', 'a0136000003SsewAAC');`);

};