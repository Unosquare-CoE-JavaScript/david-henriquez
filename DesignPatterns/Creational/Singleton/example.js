class SingletonTester
{
  static isSingleton(generator)
  {
    let example1 = generator();
    let example2 = generator();
    
    return example1 === example2;
  }
}