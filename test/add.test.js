import add from '../src/add.js';
import { expect } from 'chai';

describe('Example tests', () =>
{
	it("Example test 1", () =>
	{
		expect(add(1, 1)).to.equal(2);
	})
});