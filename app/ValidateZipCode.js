// JavaScript Document

var ValidateZipCode = function(inZip){
  this.inZip = inZip;
};

ValidateZipCode.prototype.validateZip = function() {
  //our code goes here

  if(this.inZip.includes("+")){
    return "Please enter a number 0-9";
  }

  if(this.inZip === ""){
    return "Please enter a number";
  }

  if(this.inZip === "00000"){
    return "Not a valid zip code";
  }
  if(this.inZip.includes("<" || this.inZip.includes(">"))){
    return "Not a valid zip code";
  }
  const numberType = parseInt(this.inZip);
  if( isNaN(numberType) ){
    return "Please enter a number";
  }

  if(this.inZip.length != 5){
    return "Please enter a five digit zip code";
  } 
  let pattern = /[^0-9]/;
	let result = pattern.test(this.inZip);
  if(result){
    return "Please enter a number 0-9";
  }

  return "Valid"
};

module.exports = ValidateZipCode;
