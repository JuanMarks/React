import Cart from "../modes/Cart";


class CartsControllers {
    async index(req, res) {
        try {
            const carts = await Cart.find()
            return res.status(200).json(carts)
        } catch (err) {
            console.error(err);
            return res.status(500).json({error: "Internal server error."})
        }
        
    }

    async create(req, res){
        try {
            const{code , price} = req.body;
            const cart = await Cart.create({code,price});
            return res.status(201).json(cart)
        } catch (err) {
            console.error(err);
            return res.status(500).json({error: "Internal server error."})
        }
    }
}

export default new CartsControllers;