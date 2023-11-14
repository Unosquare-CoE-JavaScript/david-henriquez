class Shape
{
  constructor(name, renderer)
  {
    this.name = name;
    this.renderer = renderer
  }
  
  toString()
  {
      return `Drawing ${this.name} as ${this.renderer.method}`
  }
}

class Triangle extends Shape
{
  constructor(renderer)
  {
    super('triangle', renderer);
  }
  
}
//
class Square extends Shape
{
  constructor(renderer)
  {
    super('square', renderer);
  }
}

class Renderer
{
    constructor(method)
    {
        this.method = method    
    }
    
    methodOfRender()
    {
        return this.method
    }
}
class VectorRenderer extends Renderer
{
    constructor()
    {
        super("lines")
    }
}

class RasterRenderer extends Renderer
{
    constructor()
    {
        super("pixels")
    }
}