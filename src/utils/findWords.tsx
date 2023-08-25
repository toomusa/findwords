interface Output {
	[key: string] : boolean;
}

type InputParams = {
	input: string,
	output?: Output,
	iterator?: string,
	tracker?: number[]
};

type ValidWordTuple = [string, boolean];

const isValidWord = async (word: string): Promise<ValidWordTuple> => {
	try {
		const response = await fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/definitions`, { headers: {
							'X-RapidAPI-Key': '80c3fabd83mshc44d9723dc45a9ap1da501jsn8faca156e252',
							'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
						}});
		const results = await response.json();
		return results?.word ? [word, true] : [word, false];
	} catch {
		return [word, false];
	}
};

const validateWords = async (words: string[]): Promise<string[]> => {
	const isWord: ValidWordTuple[] = [];
	for (let i = 0; i < words?.length; i++) {
		isWord.push(await isValidWord(words[i]));
	}

	const validWords: string[] = [];
	await Promise.all(isWord)
		.then((response) => {
			response.forEach(tuple => {
				if (tuple?.[1]) {
					validWords.push(tuple[0])
				}
			});
		})
		.catch(() => {
			return [];
		});
	return validWords;
};

export const findWords = async ({input, output = {}, iterator = "", tracker = []}: InputParams): Promise<string[]> => {
	if (iterator.length > 1) {
			output[iterator] = true;
	}

	input.split("").forEach((item, i) => {
		if (!tracker.includes(i)) {
			findWords({ input, output, iterator: iterator + item, tracker: [...tracker, i] });
		}
	});

	return await validateWords(Object.keys(output));
};
