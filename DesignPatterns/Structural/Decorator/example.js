class Bird
{
  constructor(age=0)
  {
    this.age = age;
  }

  fly()
  {
    return this.age < 10 ? 'flying' : 'too old';
  }
}

class Lizard
{
  constructor(age=0)
  {
    this.age = age;
  }

  crawl()
  {
    return this.age > 1 ? 'crawling' : 'too young';
  }
}

class Dragon
{
  constructor(age=0)
  {
    this._bird = new Bird();
    this._lizard = new Lizard();
    this._age = age;    
  }
  
  set age(ageValue) 
  {
    this._age = this._bird.age 
        = this._lizard.age = ageValue;
  }

  get age() 
  { 
     return this._age; 
  }

  fly() 
  { 
      return this._bird.fly(); 
      
  }
  crawl() 
  { 
      return this._lizard.crawl(); 
      
  }

}