export async function up(sql) {
  await sql`
 CREATE TABLE shop (
   id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   name varchar(50) NOT NULL,
   type varchar(50) NOT NULL,
  price varchar(50) NOT NULL,
  shu varchar(50) NOT NULL,
   description varchar(300) NOT NULL
  );
`;
}

export async function down(sql) {
  await sql`
  DROP TABLE shop
  `;
}

// CREATE TABLE shop (
//  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//  name varchar(50) NOT NULL,
//  type varchar(50) NOT NULL,
//  price varchar(50) NOT NULL,
//  shu varchar(50) NOT NULL,
//  description varchar(300) NOT NULL
// );
