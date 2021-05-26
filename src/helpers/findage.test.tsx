import findage from './findage';

test("expected ages return",()=>{
    expect(findage("1985-10-23")).toBe(36);
    expect(findage("2000-12-12")).toBe(21);
    expect(findage("1991")).toBe(30);
});