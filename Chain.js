class chain{
constructor(bodyA,bodyB){
var options={
    bodyA:bird.body,
    bodyB:log6.body,
    stiffness:0.07,
    length:10    
    
}
this.chain=Constraint.create(options)
World.add(world,chain);
}




}