import database from '../models';

class PersonController {

   static async getPeople(req, res) {
      try {
         const people = await database.Person.findAll();
         return res.status(200).json(people);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

}

export default PersonController;