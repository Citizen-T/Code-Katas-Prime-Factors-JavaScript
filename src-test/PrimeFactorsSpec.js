describe("PrimeFactors", () => {
	describe("of", () => {
		it("1 is []", () => {
			expect(PrimeFactors.of(1)).toEqual([]);
		});

		it("2 is [2]", () => {
			expect(PrimeFactors.of(2)).toEqual([2]);
		});

		it("3 is [3]", () => {
			expect(PrimeFactors.of(3)).toEqual([3]);
		});

		it("4 is [2,2]", () => {
			expect(PrimeFactors.of(4)).toEqual([2, 2]);
		});

		it("6 is [2,3]", () => {
			expect(PrimeFactors.of(6)).toEqual([2, 3]);
		});

		it("8 is [2,2,2]", () => {
			expect(PrimeFactors.of(8)).toEqual([2, 2, 2]);
		});

		it("9 is [3,3]", () => {
			expect(PrimeFactors.of(9)).toEqual([3, 3]);
		});

		it("acceptance test", () => {
			expect(PrimeFactors.of(2*2*2*3*3*5*7*11*11)).toEqual([2,2,2,3,3,5,7,11,11]);
		});
	});
});