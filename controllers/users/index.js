var express = require('express');
var router = express.Router();
var db = require.main.require ('./models/db_controller');
const { check, validationResult } = require('express-validator');

router.get('*', function(req, res, next){
	if(req.cookies['username'] == null){
		res.send('/login');
	}else{
		next();
	}
});

router.get('/',function(req,res){
    db.getAllemployee(function(err,result){
        res.send({employee : result});

    });
});

router.post('/add',function(req,res){
    var name = req.body.name;
    var email = req.body.email;
    var contact = req.body.contact;
    var join_date = req.body.date;
    var role = req.body.role;
    var salary = req.body.salary;
    db.add_employee(name,email,contact,join_date,role,salary,function(err,result){
        console.log('employee inserted!!');
        res.send('employee added');
    });
});

router.get('/edit_employee/:id',function(req,res){
    var id = req.params.id;
    db.getEmpbyId(id,function(err,result){

        res.send({list : result});
    });
});

router.post('/edit_employee/:id',function(req,res){
    var id = req.params.id;
    db.editEmp(id,req.body.name,req.body.email,req.body.contact,req.body.date,req.body.role,function(err,result){
        res.send('employee saved');
    });

});

router.get('/delete_employee/:id',function(req,res){
    var id = req.params.id;
    db.getEmpbyId(id,function(err,result){
        res.send({list : result});
    });
});

router.post('/delete_employee/:id',function(req,res){
    var id = req.params.id;
    
    db.deleteEmp(id,function(err,result){
        res.send('employee deleted');
    });

});

router.post('/search',function(req,res){
    var key = req.body.search;
    db.searchEmp(key,function(err,result){
        console.log(result);
        res.send({employee : result});
    });
});

module.exports = router;
