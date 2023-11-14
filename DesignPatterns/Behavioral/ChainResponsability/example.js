class Goblin
{
  constructor(game, baseAttack, baseDefense)
  {
    this.game = game;
    this.baseAttack = 1;
    this.baseDefense = 1;
    this.game.addGoblins(this);
  }

  get attack()
  {
    let attackCheck = 0
    console.log(this.game.goblins.length)
    for(let i=0; i < this.game.goblins.length; i++) 
    {
        console.log(this.game.goblins[i].baseAttack)

        let goblin = this.game.goblins[i];
        if (goblin instanceof GoblinKing) 
        {
            attackCheck++
        }
    }
 
    return this.baseAttack + attackCheck 
  }

  get defense()
  {
    let defenseCheck = this.game.goblins.length - 1 
    return this.baseDefense + defenseCheck 
  }

}

class GoblinKing extends Goblin
{
  constructor(game)
  {
      super(game)
      this.baseDefense = 3;
      this.baseAttack = 3;
  }
  
}

class Game
{
    constructor()
    {
        this.goblins = []
    }
    
    addGoblins(goblin)
    {
        this.goblins.push(goblin)
        return this
    }
}

