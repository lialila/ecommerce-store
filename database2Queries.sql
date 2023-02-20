-- create a table

CREATE TABLE shop (
 id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
 name varchar(50) NOT NULL,
 type varchar(50) NOT NULL,
 price varchar(50) NOT NULL,
 shu varchar(50) NOT NULL,
 description varchar(300) NOT NULL
);

--insert item
INSERT INTO shop
(name, type, price, shu, description)
VALUES
('Carolina Reaper', 'carolinareaper', 9, 'Scoville scale: 1,800,000', 'The Carolina Reaper is a cultivar of the Capsicum chinense plant. Developed by American breeder Ed Currie, the pepper is red and gnarled, with a bumpy texture and small pointed tail. In 2017, Guinness World Records declared it the hottest chili pepper in the world'),
    ('Habanero Golden', 'habanero', 5, 'Scoville scale: 300,000', 'The habanero chili comes from the Amazon, from which it was spread, reaching Mexico.  Today, the largest producer of the habanero pepper is the Yucatán Peninsula, in Mexico. Habaneros are an integral part of Yucatecan food, accompanying most dishes, either in natural form or purée or salsa.'),
    ('Apocalypse Scorpion Chocolate', 'apocalypse', 7, 'Scoville scale: 2,000,000', 'The Apocalypse Scorpion pepper is an Italian super-hot scorpion-type chili whose heat has been recorded at levels rivaling the Carolina Reaper.'),
    ('Trinidad Moruga scorpion', 'trinidad', 5, 'Scoville scale: 1,200,000', 'The yellow cultivar of the Trinidad Moruga Scorpion was created by Wahid Ogeer of Trinidad. Aside from the heat, the Trinidad Moruga scorpion has a tender fruit-like flavor, which makes it a sweet-hot combination.'),
    ('Ghost Peach', 'ghost', 4, 'Scoville scale: 1,000,000', 'The ghost pepper, also known as bhut jolokia, is a chili pepper grown in Northeast India. Guinness World Records said it was the hottest pepper in the world in 2007.  It was passed by three hotter chillis during 2011.'),
    ('Jalapeño', 'jalapenho', 6, 'Scoville scale: 4,000 - 8,500', 'Jalapeños were in use by the Aztecs prior to the Spanish conquest. The use of peppers in the Americas dates back thousands of years, including the practice of smoking some varieties of peppers in order to preserve them.');
