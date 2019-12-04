/// <reference types="cypress" />

it("Equlity", () => {
    const a = 1;

    expect(a).equal(1);
    expect(a, "Deveria ser 1").equal(1);
    expect(a).to.be.equal(1);
    expect(a).not.to.be.equal(2);
});

it("Truthy", () => {

    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(a).to.be.not.null;


});

it("Objetc Equality", () => {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).equal(obj);
    expect(obj).equals(obj);
    expect(obj).eq(obj);
    expect(obj).to.be.equal(obj);
    expect(obj).to.be.deep.equal(obj);
    expect(obj).to.be.equal(obj);

})


it("Arrays", () => {
    const arr = [1, 2, 3]

    expect(arr).to.have.members([1, 2, 3]);
    expect(arr).to.include.members([1, 3]);
    expect(arr).to.not.be.empty;
    expect([]).to.be.empty;

})

it("Types", () => {
    const num = 1
    const str = 'String'

    expect(num).to.be.a('number');
    expect(str).to.be.a('String');
    expect({}).to.be.an('object');
    expect([]).to.be.an('array');

})

it("String", () => {

    const str = 'String de teste'

    expect(str).to.be.equal('String de teste');
    expect(str).to.have.length(15);
    expect(str).to.contains('de');
    expect(str).to.match(/de/);
    expect(str).to.match(/^String/);
    expect(str).to.match(/teste$/);
    expect(str).to.match(/.{15}/);
    expect(str).to.match(/\w+/);
    expect(str).to.match(/\D+/);
    
})