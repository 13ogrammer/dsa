export class BTNode<T> {
  constructor(
    public val: T,
    public left: BTNode<T> | null = null,
    public right: BTNode<T> | null = null
  ) {}
}

export function btreeBuilder<T>(arr: (T | null)[]) {
  const gen = valueGenerator(arr);
  return builder(gen);
}

function* valueGenerator<T>(arr: (T | null)[]) {
  for (const val of arr) {
    yield val;
  }
}

function builder<T>(gen: Generator<T | null>): BTNode<T> | null {
  const node = gen.next();

  if (node.done || node.value === null) {
    return null;
  }

  const left = builder(gen);
  const right = builder(gen);

  return new BTNode(node.value, left, right);
}
