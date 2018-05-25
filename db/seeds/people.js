
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([{
          "fname": "Carpenter",
          "lname": "Watts",
          "phone": "+1 (958) 590-3988",
          "email": "carpenterwatts@enerforce.com",
          "company": "Enerforce",
          "address": "365 Woodpoint Road, Hayden, New Jersey 35825",
          "photo_url": "http://placehold.it/100x100"
        },
        {
          "fname": "Jacqueline",
          "lname": "Parker",
          "phone": "+1 (992) 478-3481",
          "email": "jacquelineparker@collaire.com",
          "company": "Collaire",
          "address": "698 Jardine Place, Waverly, Alaska 12490",
          "photo_url": "http://placehold.it/100x100"
        }
      ]);
    });
};
