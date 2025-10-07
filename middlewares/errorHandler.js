function errorHandler(err ,req,res,next){

    console.error("erreur",err.message);
    res.status(500).json({ message: 'Erreur serveur', error: err });
}
module.exports=errorHandler;