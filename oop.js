class Person {

    _name;
    _dateOfBirth;
    _placeOfBirth;
  
    constructor(name, dateOfBirth, placeOfBirth){
      this._name = name;
      this._dateOfBirth = dateOfBirth;
      this._placeOfBirth = placeOfBirth;
      
    }
  
    get name(){
      return this._name;
    }
    
    set name(name){
      this._name = name;
    }
  
    get dateOfBirth(){
      return this._dateOfBirth;
    }
  
    talk(){
      return `Hi my name is ${this._name} and I was born in ${this._placeOfBirth}.`;
    }
    
  } 
  class AdaStaff extends Person {
  
    _company;
    _base;
  
    constructor(name, dateOfBirth, placeOfBirth, company, base){
  
      super(name, dateOfBirth, placeOfBirth);
      this._company = company;
      this._base = base;
    }
  
    get base(){
      return this._base;
    }
    
    set base(base){
      this._base = base;
    }
  
    get company(){
      return this._company;
    }
    
    set company(company){
      this._company = company;
    }
  
    talk(){
      return `Hi my name is ${this._name}. I work in ${this._base} and my company is ${this._company}.`;
    }
  }
  class AdaStudent extends Person {
  
      _pathway;
      _company;
    
      constructor(name, dateOfBirth, placeOfBirth, company, pathway){
    
        super(name, dateOfBirth, placeOfBirth);
        this._pathway = pathway;
        this._company = company;
      }
    
      get pathway(){
        return this._pathway;
      }
      
      set pathway(pathway){
        this._pathway = pathway;
      }
    
      get company(){
        return this._company;
      }
      
      set company(company){
        this._company = company;
      }
    
      talk(){
        return `Hi my name is ${this._name}. I work in ${this._pathway} and my company is ${this._company}.`;
      }

    }
    
class Cohort {

  _cohortCode;
  
  constructor(cohortCode){

    this._cohortCode = cohortCode;
    this.cohort = [];

  }
  add(adaStudent) {
    this.cohort.push(adaStudent)
    return this.cohort.length;
}
  remove(adaStudent) {
    this.cohort.splice(adaStudent[0], 1)
    return this.cohort.length;
}
  
}


  const aqil = new Person("Aqil Hussain", "01/01/2000", "Manchester");
  const steve = new AdaStaff("Steve Rich", "01/01/1998", "Lincoln", "Lecturer", "Manchester");
  const jess = new AdaStaff ("Jess Heaney", "09/02/1995", "Spain", "Talent Coach", "Manchester" )
  const muumbe = new AdaStudent("Muumbe Hapenga", "19/01/2006", "Leicester","PwC", "Software Engineering")
  
  console.log(steve);
  console.log(aqil);
  console.log(steve.talk());
  console.log(aqil.talk());
  console.log(steve.name);
  console.log(jess.talk())
  console.log(jess.dateOfBirth)
  console.log(muumbe)
  //Create a new instance of Cohort called april24
const april24 = new Cohort("24-04-LDN-MCR");
//Create an AdaStudent object
const sumilA = new AdaStudent("Sumil Aryin", "22/12/2002", "London", "PwC", "TC", 2024);
//Add sumilA to the april24 cohort array
april24.add(sumilA);
//Create a new Ada student and add them to the array all in one line
april24.add(new AdaStudent("Jess Fryer", "02/02/1998", "Manchester", "PwC", "TC", 2024))
//Check the contents of the array.

april24.add(muumbe)

april24.remove(sumilA)
april24.remove(muumbe)
console.log(april24)