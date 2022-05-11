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

  const strandArr = strand.split('');

  if (!!strandArr.find(letter => !['A', 'C', 'G', 'T'].includes(letter))) throw new Error('Invalid nucleotide in strand');

  strandArr.forEach((letter) => {
    res[letter] = res[letter] + 1;
  })
  return res;
}
