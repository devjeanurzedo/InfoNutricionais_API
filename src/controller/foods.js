/* eslint-disable class-methods-use-this */
const axios = require('axios').default;

class Categoria {
  async getCategorias(req, res) {
    const categories = await axios.get(
      'https://taco-food-api.herokuapp.com/api/v1/category'
    );
    return res.json(categories.data);
  }

  async getFoodByCateg(req, res) {
    const { categ } = req.params;
    const foods = await axios.get(
      `https://taco-food-api.herokuapp.com/api/v1/category/${categ}/food`
    );
    return res.json(foods.data);
  }
}

export default new Categoria();
