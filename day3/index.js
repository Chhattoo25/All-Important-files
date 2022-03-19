//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.

scope={ a  : "*scope in js define accessibility of variables, objects, and functions",
 b : "*there are three type of scope 1.Global 2. local(inside a function) 3.block scope",
 c : "*Scopes can be nested. Inside an inner scope you can access the variables of an outer scope."}
  hoisting={
      d:"* Attendence  ",
      e:"*Js declaration is called hoisting  ",
      f:"*javaScript Initializations are Not Hoisted ",
  }
  constructor_function={
      g:"*creating blueprint for the same type of data",
      h:"*this is the keyword use in cons. function",
      i:"*this keyword is refer to an object",
      j:"*this does not have any value",
  },
  prototype={
      k:"*every function and obj have an property of an prototype",
      l:"*prototype can be used to add properties and method to const. function",
      m:"*Prototypes are the mechanism by which JavaScript objects inherit features from one another",
      n:"*prototype itself is an object",
      o:"*prototype have its own prtotype -->prototype chain",
  }



  var btn1 = document.getElementById("scope")
  var btn2 = document.getElementById("hoisting")
  var btn2 = document.getElementById("constructor function")
  var btn2 = document.getElementById("prototype")
  var btn11 = document.getElementById("btn11")
  function scopedata(a,b,c,d){
    var output = Object.values(scope)
      console.log(Object.values(scope))
      localStorage.setItem("scope",JSON.stringify(scope))
      para = document.getElementById("btn1")
      para.append(output)
  }
  function hoistingdata(a,b,c,d){
    
      console.log(Object.values(hoisting))
      localStorage.setItem("hoisting",JSON.stringify(hoisting))
      var output= Object.values(hoisting)
      var p2 = document.getElementById("btn2")
     p2.append(output)
    //   btn11.textContent = Object.values(hoisting)
      
  }
  function constructordata(a,b,c,d){

      console.log(Object.values(constructor_function))
      localStorage.setItem("constructor_function",JSON.stringify(constructor_function))
      var output= Object.values(constructor_function)
      var p3 = document.getElementById("btn3")
     p3.append(output)
  }
  function prototypedata(a,b,c,d,e){

      console.log(Object.values(prototype))
      localStorage.setItem("prototype",JSON.stringify(prototype))
      var output= Object.values(prototype)
      var p4 = document.getElementById("btn4")
     p4.append(output)
  }
// let arr =new Array[1,2,3,4]
// console.log(arr)