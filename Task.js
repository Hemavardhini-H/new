function person(FirstName ,LastName,OfficeAddress){
    this.FirstName=FirstName,
    this.LastName=LastName,
    this.OfficeAddress=OfficeAddress
}

var Person1 = new person("Hema","Vardhini","Srikalahasti,Chittoor");
var Person2 = new person("Dillip","Dev","Vidhyanagar , Nellore");
var Person3 = new person("Sumanjali","Pasupuleti","Ameerpet,Hyderabad");

console.log("Person1:")
console.log("FirstName: " + Person1.FirstName)
console.log("LastName: " + Person1.LastName)
console.log("OfficeAddress: " + Person1.OfficeAddress)

console.log("Person2:")
console.log("FirstName: " + Person2.FirstName)
console.log("LastName: " + Person2.LastName)
console.log("OfficeAddress: " + Person2.OfficeAddress)

console.log("Person3:")
console.log("FirstName: " + Person3.FirstName)
console.log("LastName: " + Person3.LastName)
console.log("OfficeAddress: " + Person3.OfficeAddress)