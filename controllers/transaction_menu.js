const {Transaction_Menu} = require('../models')

class TransactionMenuController {
    static create = async (req,res,next) => {
        try {
            let user_id = req.currentUser.id
            let { menu_id} = req.body
            let transaction_menu = await Transaction_Menu.create({
                user_id , menu_id
            })

            res.status(201).json(transaction_menu)
        } catch (error) {
            next(error)
        }
    }

    static delete = async (req,res,next) => {
        try {
            const user_id = req.currentUser.id
            let {id} = req.params
            let transaction = await Transaction_Menu.findByPk(id)
            
            if(transaction && transaction.user_id === user_id) {
                transaction.destroy()
                res.status(200).json({
                    message: "Deleted transaction menu succesfully"
                })
            } else next({name: "NotFound"})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = TransactionMenuController