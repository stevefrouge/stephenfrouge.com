function Login(loginDao){
    
    this.loginDao = loginDao; 
}


module.exports = Login;

Login.prototype = {
    login: function (req, res) {
        var self = this;
        var item = req.body;        
        
        self.loginDao.login(item, function (loggedin) {
            if (loggedin) {
               res.redirect('/loggedin');
            }else{
                res.redirect('/');
            }
            
        });
                
    }
    
    
};