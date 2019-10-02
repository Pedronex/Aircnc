const User = require('../models/User');
// Index, Show , Store, Update, Destroy
/*
    Index = Listagem
    Show = Consulta
    Store = Criar
    Update = Alterar
    Destroy = Deletar
*/

module.exports = {
    async store(req,res){
        const { email } = req.body; 
        
        let user = await User.findOne({ email });

        if(!user)
            user = await User.create({ email });
        
        return res.json(user);
    }
    
};