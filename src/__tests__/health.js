import checkHP from "../health.js"

test.each([
    [51, 'healthy'],
    [50, 'wounded'],
    [15, 'wounded'],
    [14, 'critical']
])(
    ("should check hp %i and give status %s "),
    (hp, expected) => {
        const result = checkHP(hp);
        expect(result).toBe(expected)
    }
)
