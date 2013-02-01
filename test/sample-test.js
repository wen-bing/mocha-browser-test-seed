describe("Sample", function(){
      describe("#add", function(){
            it('1+1 should return 2', function(){
                  expect(Sample.add(1, 1)).be(2);
            });
            it('1+0 should return 1', function(){
                  expect(Sample.add(1, 0)).be(1);
            });
      });

      describe("#sub", function(){
            it("1-2 should return -1", function(){
                 expect(Sample.sub(1,2)).be(-1);
            });

            it("5-1 should return 4", function(){
                  expect(Sample.sub(5,1)).be(4);
            })
      });
});