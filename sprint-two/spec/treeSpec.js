describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });
  it("should add a child when we invoke addChild", function(){
    tree.addChild("bobby");
    expect(tree.value).toEqual("bobby");
  });

  // Add more tests here to test the functionality of tree.
});