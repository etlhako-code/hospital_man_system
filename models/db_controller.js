var mysql =require('mysql');
var express = require('express');
var router = express.Router();


var con = mysql.createConnection({

    host : 'localhost',
    user : 'root',
    password : '',
    database : 'nodelogin'
});

con.connect(function(err){
    if(err){
        throw err;
        console.log('you are connected');

    }
});

module.exports.signup = function(username,email,password,status,callback) {
    var query =  "INSERT INTO `users`(`username`,`email`,`password`,`email_status`) VALUES ('" + username + "','" + email + "','" + password + "','"+status+"')";
    con.query(query,callback);
}

module.exports.getuserid = function (email,callback){
    var query = "select *from verify where email = '"+email+"' ";
    con.query(query,callback);
}

module.exports.verify = function (username,email,token,callback){
    var query = "insert into `verify` (`username`,`email`,`token`) values ('"+username+"','"+email+"','"+token+"')";
    con.query(query,callback);
}


module.exports.getEmpbyId = function(id,callback){
    var query = "select * from employee where id ="+id;
    con.query(query,callback);
}


module.exports.editEmp = function(id,name,email,contact,join_date,role,callback){
    var query = "update `employee` set `name`='"+name+"', `email`='"+email+"', `contact`='"+contact+"', `join_date`='"+join_date+"', `role`='"+role+"' where id="+id;
    con.query(query,callback);
}


module.exports.deleteEmp = function(id,callback){
    //console.log("i m here");
    var query = "delete from employee where id="+id;
    con.query(query,callback);
}

module.exports.add_appointment =function(p_name,department,d_name,date,time,email,phone,callback){
    var query = "insert into appointment (patient_name,department,doctor_name,date,time,email,phone) values ('"+p_name+"','"+department+"','"+d_name+"','"+date+"','"+time+"','"+email+"','"+phone+"')";
    con.query(query,callback);
}

module.exports.getallappointment = function(callback){
    var query = "select * from appointment";
    con.query(query,callback);
}

 module.exports.searchEmp = function(key,callback){
    var query='SELECT  *from employee where name  like "%'+key+'%"' ;
    con.query(query,callback);
    console.log(query);
}


 module.exports.getappointmentbyid = function(id,callback){
     var query = "select * from appointment where id="+id;
     console.log(query);
     con.query(query,callback);
 }


 module.exports.editappointment = function(id,p_name,department,d_name,date,time,email,phone,callback){
     var query = "update appointment set patient_name='"+p_name+"',department='"+department+"',doctor_name='"+d_name+"',date='"+date+"',time='"+time+"',email='"+email+"',phone='"+phone+"' where id="+id;
     con.query(query,callback);
 }

 module.exports.deleteappointment = function(id,callback){
     var query = "delete from appointment where id="+id;
     con.query(query,callback);
 }
//module.exports =router;


module.exports.findOne =function (email , callback){
    var query = "select *from users where email='"+email+"'" ;
    con.query(query,callback);
    console.log(query);
}


module.exports.setpassword =function(id,newpassword,callback){
    var query = "update `users` set `password`='"+newpassword+"' where id="+id;
    con.query(query,callback);
}

module.exports.add_employee = function(name,email,contact,join_date,role,salary,callback){
    var query = "Insert into `employee` (`name`,`email`,`contact`,`join_date`,`role`,`salary`) values ('"+name+"','"+email+"','"+contact+"','"+join_date+"','"+role+"','"+salary+"')";
    con.query(query,callback);
    console.log(query);
}


module.exports.getAllemployee = function (callback){
    var query = "select * from employee";
    con.query(query,callback);
}


module.exports.getuserdetails = function(username,callback){
    var query = "select * from users where username='"+username+"'";
    con.query(query,callback);
    console.log(query);
}

module.exports.edit_profile=function(id,username,email,password,callback){
    var query = "update users set username ='"+username+"', email = '"+email+"',password='"+password+"' where id="+id;
    con.query(query,callback);
    console.log(query);
}
