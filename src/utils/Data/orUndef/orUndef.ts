function orUndef<X>(expr: X | false | undefined): X | undefined {
  return expr || undefined;
}

export default orUndef;
