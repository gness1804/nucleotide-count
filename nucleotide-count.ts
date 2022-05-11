type NucleotideCount = {
  [key: string]: number
}

export function nucleotideCounts(strand: string): NucleotideCount {
  let res: NucleotideCount = {
    'A': 0,
    'C': 0,
    'G': 0,
    'T': 0,
  };

  if (!strand) return res;
  strand.split('').forEach((letter) => {
    res[letter] = res[letter] + 1;
  })
  return res;
}
