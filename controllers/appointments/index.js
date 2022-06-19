var express = require ('express');
var router = express.Router();
var db = require.main.require ('../../models/db_controller');
var bodyPaser = require ('body-parser');

router.get('*', function(req, res, next){
	if(req.cookies['username'] == null){
		res.send('/login');
	}else{
		next();
	}
});
router.get('/getall_appointments',function(req,res,next){
    db.getallappointment(function(err,result){
        res.send(result);
    })
})
router.post('/add_appointment',function(req,res){
    db.add_appointment(
        req.body.p_name,
        req.body.department,
        req.body.d_name,
        req.body.date,req.body.time,req.body.email,req.body.phone,function(err,result){
        res.send(result);
    });
});

router.post('/edit_appointment/:id',function(req,res){
    var id = req.params.id;
    db.getappointmentbyid(id,function(err,result){
        if(!result) return res.send("")
        db.editappointment(id,req.body.p_name,req.body.department,req.body.d_name,req.body.date,req.body.time,req.body.email,req.body.phone,function(err,reslt){
                res.send(reslt);
        });
    });
  
});

router.post('/delete_appointment/:id',function(req,res){
    var id =req.params.id;
    db.deleteappointment(id,function(err,result){
        if(!result) return res.send("")
        db.getappointmentbyid(id,function(err,reslt){
    
        })
    });
})

module.exports =router;